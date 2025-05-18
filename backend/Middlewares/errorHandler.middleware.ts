import { Request, Response, NextFunction } from 'express';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

// Custom error class for application-specific errors
export class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Handle Prisma client known request errors (e.g., unique constraint violations)
const handlePrismaKnownRequestError = (err: PrismaClientKnownRequestError) => {
  let message = 'Database error occurred';
  let statusCode = 400;

  // Handle specific Prisma error codes
  if (err.code === 'P2002') {
    message = `Duplicate field value: ${err.meta?.target}`;
  } else if (err.code === 'P2025') {
    message = 'Record not found';
    statusCode = 404;
  } else if (err.code === 'P2003') {
    message = 'Foreign key constraint failed';
  }

  return new AppError(message, statusCode);
};

// Handle Prisma validation errors
const handlePrismaValidationError = (err: PrismaClientValidationError) => {
  return new AppError('Invalid input data', 400);
};

// Handle JWT errors
const handleJWTError = () => new AppError('Invalid token. Please log in again.', 401);
const handleJWTExpiredError = () => new AppError('Your token has expired. Please log in again.', 401);

// Handle validation errors from Zod or other validation libraries
const handleValidationError = (err: any) => {
  const message = err.errors?.map((e: any) => e.message).join(', ') || 'Validation error';
  return new AppError(message, 400);
};

// Development error response - includes stack trace
const sendErrorDev = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err
  });
};

// Production error response - more user-friendly
const sendErrorProd = (err: any, res: Response) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } 
  // Programming or other unknown error: don't leak error details
  else {
    // Log error for developers
    console.error('ERROR 💥', err);
    
    // Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
};

// Main error handling middleware
export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Different error handling for development and production environments
  const nodeEnv = process.env.NODE_ENV || 'development';
  
  if (nodeEnv === 'development') {
    sendErrorDev(err, res);
  } else {
    let error = { ...err };
    error.message = err.message;
    
    // Handle specific error types
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    if (error instanceof PrismaClientKnownRequestError) error = handlePrismaKnownRequestError(error);
    if (error instanceof PrismaClientValidationError) error = handlePrismaValidationError(error);
    if (error.name === 'ZodError' || error.name === 'ValidationError') error = handleValidationError(error);
    
    sendErrorProd(error, res);
  }
};

// Not Found middleware - for handling undefined routes
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(`Not Found - ${req.originalUrl}`, 404);
  next(error);
};
import prisma from "../config/prismaClientConfig";
import {comparePassword, hashPassword} from "../config/bycrypt";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config/env";
import {NextFunction, Request, Response} from "express";

// Extend Express Request interface to include 'user'
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

import { sendEmail } from "../config/mailer";
import z from "zod"

const ClientSchema =  z.object({
    name: z.string().min(2).max(20),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.enum(['USER', 'ADMIN']),
})

export type ClientType = z.infer<typeof ClientSchema>;


const prismaUser = prisma.client;

// createUser serves as signUp
export const signUp = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const {name, email, password, role}:ClientType = req.body;
        const userAlreadyExists = await prismaUser.findUnique({where: {email: email}})

        if (userAlreadyExists) {
            res.status(400).json({
                success: false,
                message: "User already exists"
            });
            return;

        }

        const hashedPassword = await hashPassword(password);
        const newUser = await prismaUser.create({
            data: {
                username: name,
                email: email,
                password: hashedPassword,
                role: role,
            }
        })

        const token = jwt.sign({userId: newUser.id}, JWT_SECRET as string, {expiresIn: "1d"})

        res.status(201).json({
            success: true,
            message: "successfully created User !",
            data: newUser,
            token: token
        })
        await sendEmail({toEmail: email, name})
    } catch (e) {
        next(e);
    }

}

// SignIn
export const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body

        const user = await prismaUser.findUnique({
            where: {
                email
            }
        })
        if (!user) {

            res.status(403).json({
                success: false,
                message: "Invalid credentials"
            });
            return;
        }
        if (user) {
            const isMatch = await comparePassword(password, user.password)
            if (isMatch) {
                const token = jwt.sign({userId: user.id}, JWT_SECRET as string, {expiresIn: "2d"})

                res.status(200).json({
                    success: true,
                    message: "User found successfully",
                    data: user,
                    token: token
                })
                await sendEmail({toEmail: email})
            } else {
                res.status(403).json({
                    success: true,
                    message: "Invalid credentials",
                })
            }


        }


    } catch (error) {
        next(error)
    }

}

//get the current authenticated User
export const me = (req:Request,res:Response,next:NextFunction)=>{
    try{

        res.status(200).json({
            success:true,
            message:"user data retrieve successfully",
            data: req.user
        }); 
    }catch(err:any){
        next(err);
    }
}
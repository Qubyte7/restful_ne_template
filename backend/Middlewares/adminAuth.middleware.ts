import {NextFunction, Response, Request} from "express"

interface AuthenticatedRequest extends Request {
    user?: any
}

const adminAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.role == 'ADMIN') {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: "Access denied"
        });
    }
}

export  default adminAuth;
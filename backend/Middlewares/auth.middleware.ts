import {NextFunction,Response,Request} from "express"

interface AuthenticatedRequest extends Request {
    user?: any
}
import jwt, {JwtPayload, Secret} from "jsonwebtoken"
import {JWT_SECRET} from "../config/env";
import prisma from "../config/prismaClientConfig";

export const authorizeUser=async (req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
    const token=req.headers.token as string
    if(!token){
        res.status(403).json({
            message:"No token provided, Un Authorized",
        })

    }
    const formattedToken=token?.split(" ")[1]
    const decodedUser=jwt.verify(formattedToken,JWT_SECRET as Secret) as JwtPayload
    const user=await prisma.client.findUnique({
        where:{
            id:decodedUser.userId
        }
    })
    if(user){
        req.user=user
        next()
    }
    else{
        res.status(403).json({
            message:"Unauthorized"
        })
    }


}
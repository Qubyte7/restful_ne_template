import prisma from "../config/prismaClientConfig";
import {NextFunction, Request, Response} from "express";
import z from "zod"
import {vehicleClient} from "./vehicle.controller";

const ClientSchema = z.object({
    name: z.string().min(2).max(20),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.enum(['USER', 'ADMIN']),
})


export type ClientType = z.infer<typeof ClientSchema>;


const prismaUser = prisma.client;

export const getAllDriver = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const fetchedDrivers = prismaUser.findMany({
            where: {
                role: 'USER'
            }
        })
        res.status(200).json({
            success: true,
            message: "All drivers fetched successfully",
            data: fetchedDrivers
        })
    } catch (e) {
        next(e);
    }

}

export const getAllAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const fetchedDrivers = prismaUser.findMany({
            where: {
                role: 'ADMIN'
            }
        })
        res.status(200).json({
            success: true,
            message: "All drivers fetched successfully",
            data: fetchedDrivers
        })
    } catch (e) {
        next(e);
    }
}

export const getDriverByCarPlate = (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {car_number_plate} = req.body;
        const client = vehicleClient.findUnique({where:{vehicle_plate:car_number_plate}});
        if (!client){
            res.status(404).json({
                success:false,
                message:"Client not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"Client fetched successfully",
            data:client
        })
    }catch (e:any){
        
    }
}

export const deleteClient = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} =  req.params;
        const clientId = parseInt(id);

        const clientDriver =  await prismaUser.findUnique({where:{id:clientId}});
        if(!clientDriver){
            res.status(404).json({
                success:false,
                message:"Client not found"
            });
        }
        prismaUser.delete({where:{id:clientId}});
        res.status(200).json({
            success:true,
            message:"Client deleted successfully"
        })

    }catch (e:any){
        next(e);
    }
}

export const updateClient = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {id} = req.params;
        const clientId = parseInt(id);
        const {name,email,password,role}:ClientType = req.body;
        const client = await prismaUser.findUnique({where:{id:clientId}});
        if (!client){
            res.status(404).json({
                success:false,
                message:"Client not found"
            })
        }
        const newClient =  await prismaUser.update({
            where:{id:clientId},
            data:{
                username:name,
                email:email,
                password:password,
                role:role,
            }
        })

    }catch (e:any){
        next(e);
    }
}


export const getDriverByEmail = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email} = req.body;
        const client = await prismaUser.findUnique({where:{
            email:email
        }})

        if(!client){
            res.status(404).json({
                success:false,
                message:"driver does not exist !",
            })
        }

        res.status(200).json({
            success:true,
            message:"client found !",
            data:client
        })

    }catch(e){
        next(e);
    }
}
import {NextFunction, Request, Response} from "express";
import prisma from "../config/prismaClientConfig";

const defaultPage = 1;
const defaultLimit = 10;

export const vehicleClient = prisma.vehicle_details;

export const registerVehicle = async (req:Request,res:Response,next:NextFunction)=>{
    const {client_id,vehicle_number_plate,vehicle_type} = req.body;
    try{
        const vehicle = await vehicleClient.create({
            data:{
                client_Id:client_id,
                vehicle_plate:vehicle_number_plate,
                vehicle_type:vehicle_type,
            }
        })
        res.status(201).json({
            success:true,
            message:"Vehicle registered successfully",
            data:vehicle
        })

    }catch (e:any){
        next(e);
    }

}

export const getAllVehicles = async (req:Request,res:Response,next:NextFunction)=>{
    const page =  parseInt(req.query.page as string) || defaultPage;
    const limit =  parseInt(req.query.limit as string) || defaultLimit;
    const skip = (page - 1) * limit;
    try{
        const AllVehicles = await vehicleClient.findMany({
            skip:skip,
            take:limit,
            orderBy:{
                id:'asc'
            }
        });

        const totalItems = await vehicleClient.count();
        const totalPages = Math.ceil(totalItems / limit);
        const hasNextPage = page < totalPages;
        const hasPreviousPage = page > 1;


        res.status(200).json({
            success:true,
            currentPage: page,
            totalPages: totalPages,
            totalItems: totalItems,
            pageSize: limit,
            hasNextPage: hasNextPage,
            hasPreviousPage: hasPreviousPage,
            message:"All vehicles fetched successfully",
            data:AllVehicles
        })
    }catch (e:any){
        next(e);
    }
}

export const getVehicleByPlate = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const {vehicle_plate} = req.params;

        const vehicle =  await vehicleClient.findUnique({
            where: {
                vehicle_plate: vehicle_plate
            }
        });
        if(!vehicle){
            res.status(404).json({
                success:false,
                message:"Vehicle not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"Vehicle fetched successfully",
            data:vehicle
        })

    }catch (e:any){
        next(e);
    }
}

export const updateVehicleOnly = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {vehicle_id} =  req.params;
        const id = parseInt(vehicle_id);
        const {vehicle_number_plate,vehicle_type} = req.body;
        const vehicleExists = await vehicleClient.findUnique({where:{id:id}});
        if(!vehicleExists){
            res.status(404).json({
                success:false,
                message:"Vehicle not found"
            })
        }

        const updatedVehicle = await vehicleClient.update({
            where:{id:id},
            data:{
                vehicle_plate:vehicle_number_plate,
                vehicle_type:vehicle_type,
            }
        })



    }catch (e){
        next(e);
    }
}

export const updateVehicleWithClient = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {vehicle_id} =  req.params;
        const id = parseInt(vehicle_id);
        const {New_owner,vehicle_number_plate,vehicle_type} = req.body;
        const vehicleExists = await vehicleClient.findUnique({where:{id:id}});
        if(!vehicleExists){
            res.status(404).json({
                success:false,
                message:"Vehicle not found"
            })
        }

        const updatedVehicle = await vehicleClient.update({
            where:{id:id},
            data:{
                client_Id:New_owner,
                vehicle_plate:vehicle_number_plate,
                vehicle_type:vehicle_type,
            }
        })



    }catch (e){
        next(e);
    }
}

export const deleteVehicle =async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const {number_plate} = req.params;
        const vehicle =  await vehicleClient.findUnique({
            where: {
                vehicle_plate: number_plate
            }
        });
        if(!vehicle){
            res.status(404).json({
                success:false,
                message:"Vehicle not found"
            })
        }

        vehicleClient.delete({where:{vehicle_plate:number_plate}});
        res.status(200).json({
            success:true,
            message:"Vehicle deleted successfully"
        })

    }catch (e:any){
        next(e);
    }
}
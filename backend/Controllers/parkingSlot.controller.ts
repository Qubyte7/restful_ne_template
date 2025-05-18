import {NextFunction, Request, Response} from "express";
import prisma from "../config/prismaClientConfig";
import z from "zod";

const slotStatusType = z.object({
    status:z.enum(['INUSE','FREE'])
});

export type SlotStatusType = z.infer<typeof slotStatusType>;


const slotClient = prisma.parkingSlot;

export const getAllParkingSlots = (req:Request,res:Response,next:NextFunction) => {
    try{
        const AllParkingSlots = slotClient.findMany();
        res.status(200).json({
            status:true,
            data:AllParkingSlots
        })
     
    }catch (e){
        next(e);
    }
}

export const getAvailableParkingSlots = (req:Request,res:Response,next:NextFunction) => {
    try{
        const availableParkingSlots = slotClient.findMany({where:{status:'FREE'}});
        res.status(200).json({
            status:true,
            data:availableParkingSlots
        })
    }catch (e){
        next(e);
    }
}

export const deleteSlot = (req:Request,res:Response,next:NextFunction) => {
    try{
        const {id} = req.params;
        const parkingSlotId = parseInt(id);
        const parkingSlot = slotClient.findUnique({where:{id:parkingSlotId}});
        if (!parkingSlot){
            res.status(404).json({
                status:false,
                message:"Parking slot not found"
            })
        }
        
        slotClient.delete({where:{id:parkingSlotId}});
        res.status(200).json({
            status:true,
            message:"Parking slot deleted successfully"
        })
    }catch (e){
        next(e);
    }
}

export const updateSlotStatus = (req:Request,res:Response,next:NextFunction) => {
    try{
        const {id}  = req.params;
        const {status}:SlotStatusType = req.body;
        const parkingSlotId = parseInt(id);
        const parkingSlot = slotClient.findUnique({where:{id:parkingSlotId}});
        if (!parkingSlot){
            res.status(404).json({
                status:false,
                message:"Parking slot not found"
            })
        }
        
        const updatedParkingSlot = slotClient.update({where:{id:parkingSlotId},data:{status:status}});
        res.status(200).json({
            status:true,
            message:"Parking slot status updated successfully",
            data:updatedParkingSlot
        })
        
    }catch (e){
        next(e);
    }
}

export const addSlot = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const {slotnumber} = req.body;
        const newSlot = await slotClient.create({
            data:{
                slotNumber:slotnumber,
                status:'FREE'
            }
        })
        
    }catch (e){
        next(e);
    }
}
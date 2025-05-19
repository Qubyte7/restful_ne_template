import {NextFunction, Request, Response} from "express";
import prisma from "../config/prismaClientConfig";

const parkingSessionClient = prisma.parkingSession;
const defaultPage = 1;
const defaultLimit = 10;


export const getAllSession = async (req: Request, res: Response, next: NextFunction) => {
    //pagination
    const page = parseInt(req.query.page as string) || defaultPage;
    const limit = parseInt(req.query.limit as string) || defaultLimit;
    const skip = (page - 1) * limit;

    try {

        const AllSessions = await parkingSessionClient.findMany({
            skip: skip,
            take: limit,
            orderBy: {id: 'asc'}
        });

        //pagination pages
        const totalItems = await parkingSessionClient.count();
        const totalPages = Math.ceil(totalItems / limit);
        const hasNextPage = page < totalPages;
        const hasPreviousPage = page > 1;


        res.status(200).json({
            success: true,
            message: "All sessions fetched successfully",
            currentPage: page, 
            totalPages: totalPages,
            totalItems: totalItems,
            pageSize: limit,
            hasNextPage: hasNextPage,
            hasPreviousPage: hasPreviousPage,
            data: AllSessions
        })
        return;
    } catch (e) {
        next(e);
    }
}

export const getSessionByParkingSlot = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {parking_slot_number} = req.body;
        const specificSession = await parkingSessionClient.findMany({where: {parking_slot_id: parking_slot_number}});

    } catch (e) {
        next(e);
    }
}

export const getSessionByVehiclePlate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {vehicle_number_plate} = req.body;
        const specificSession = await parkingSessionClient.findMany({where: {vehicle_number_plate: vehicle_number_plate}});

    } catch (e) {
        next(e);
    }
}

export const getSessionByClientName = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {client_name} = req.body;
        const specificSession = await parkingSessionClient.findMany({where: {ower_name: client_name}});

        res.status(200).json({
            success: true,
            data: specificSession
        })


    } catch (e) {
        next(e);
    }
}

export const getParkingSessionByStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {vehicleStatus} = req.body;
        const specificSession = await parkingSessionClient.findMany({where: {status: vehicleStatus}});
        res.status(200).json({
            success: true,
            data: specificSession
        })
    } catch (e) {
        next(e);
    }
}

export const addParkingSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {vehicle_number_plate, driver_name, driver_email, parking_slot_id, entry_time} = req.body;
        const newParkingSession = await parkingSessionClient.create({
            data: {
                vehicle_number_plate: vehicle_number_plate,
                parking_slot_id: parking_slot_id,
                entry_time: entry_time,
                ower_name: driver_name,
                owner_email: driver_email,
                status: 'PARKING',
            }
        })
        res.status(200).json({
            success: true,
            message: "Parking session created successfully",
            data: newParkingSession
        })

    } catch (e) {
        next(e);
    }
}

export const updateParkingSessionDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const sessionId = parseInt(id);
        const {car_plate, slot_id, driver_email, driver_name} = req.body;
        const session = await parkingSessionClient.findUnique({where: {id: sessionId}});
        if (!session) {
            res.status(404).json({
                success: false,
                message: "Parking session not found"
            })
        }
        const updatedSession = await parkingSessionClient.update({
            where: {id: sessionId},
            data: {
                vehicle_number_plate: car_plate,
                parking_slot_id: slot_id,
                ower_name: driver_name,
                owner_email: driver_email,
            }
        })

        res.status(200).json({
            success: true,
            message: "Parking session updated successfully",
            data: updatedSession
        })


    } catch (e) {
        next(e);
    }
}

export const endParkingSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const sessionId = parseInt(id);
        const {exit_time} = req.body;
        const sessionExists = parkingSessionClient.findUnique({where: {id: sessionId}});
        if (!sessionExists) {
            res.status(404).json({
                success: false,
                message: "Parking session not found"
            });
        }

        const updatedCarParkingSession = await parkingSessionClient.update({
            where: {id: sessionId},
            data: {
                exit_time: exit_time,
                status: 'OUT'
            }
        })
        res.status(200).json({
            success: true,
            message: "Parking session exited successfully",
            data: updatedCarParkingSession
        })

    } catch (e) {
        next(e);
    }
}

export const deleteSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id} = req.params;
        const sessionId = parseInt(id);

        const sessionExists = await parkingSessionClient.findUnique({where: {id: sessionId}});

        if (!sessionExists) {
                res.status(404).json({ // Use return to prevent further execution
                success: false,
                message: "Parking session not found"
            });
        }

        await parkingSessionClient.delete({where: {id: sessionId}});

        res.status(200).json({
            success: true,
            message: "Parking session deleted successfully"
        });

    } catch (e: any) {
        next(e);
    }
};


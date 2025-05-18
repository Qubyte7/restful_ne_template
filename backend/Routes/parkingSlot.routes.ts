import {Router} from "express";
import {
    addSlot,
    deleteSlot,
    getAllParkingSlots,
    getAvailableParkingSlots,
    updateSlotStatus
} from "../Controllers/parkingSlot.controller";

const parkingSlotRouter = Router();

/**
 * @swagger
 * /pms/api/v1/parking-slots:
 *   get:
 *     summary: Get all parking slots
 *     tags: [Parking Slots]
 *     responses:
 *       200:
 *         description: List of all parking slots
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ParkingSlot'
 */
parkingSlotRouter.get("/",getAllParkingSlots);

/**
 * @swagger
 * /pms/api/v1/parking-slots/available-slots:
 *   get:
 *     summary: Get available parking slots
 *     tags: [Parking Slots]
 *     responses:
 *       200:
 *         description: List of available parking slots
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ParkingSlot'
 */
parkingSlotRouter.get("/available-slots",getAvailableParkingSlots);

/**
 * @swagger
 * /pms/api/v1/parking-slots/{id}:
 *   delete:
 *     summary: Delete a parking slot
 *     tags: [Parking Slots]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Parking slot ID
 *     responses:
 *       200:
 *         description: Parking slot deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Parking slot deleted successfully"
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
parkingSlotRouter.delete("/:id",deleteSlot);

/**
 * @swagger
 * /pms/api/v1/parking-slots/{id}:
 *   put:
 *     summary: Update a parking slot status
 *     tags: [Parking Slots]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Parking slot ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ParkingSlotStatusUpdate'
 *     responses:
 *       200:
 *         description: Parking slot status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Parking slot status updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/ParkingSlot'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
parkingSlotRouter.put("/:id",updateSlotStatus);

/**
 * @swagger
 * /pms/api/v1/parking-slots:
 *   post:
 *     summary: Add a new parking slot
 *     tags: [Parking Slots]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ParkingSlotInput'
 *     responses:
 *       201:
 *         description: Parking slot created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Parking slot created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/ParkingSlot'
 */
parkingSlotRouter.post("/",addSlot);

export default parkingSlotRouter;

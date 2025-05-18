import {Router} from "express";
import {
    addParkingSession, deleteSession,
    getAllSession, getParkingSessionByStatus, getSessionByClientName,
    getSessionByParkingSlot,
    getSessionByVehiclePlate, updateParkingSessionDetails
} from "../Controllers/parkingSession.controller";
import {authorizeUser} from "../Middlewares/auth.middleware";
import adminAuth from "../Middlewares/adminAuth.middleware";

const parkingSessionRouter = Router();

/**
 * @swagger
 * /pms/api/v1/parking-session:
 *   get:
 *     summary: Get all parking sessions
 *     tags: [Parking Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of parking sessions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
parkingSessionRouter.get("/",authorizeUser,adminAuth,getAllSession);

/**
 * @swagger
 * /pms/api/v1/parking-session/by-parking-slot:
 *   get:
 *     summary: Get parking sessions by parking slot
 *     tags: [Parking Sessions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - parking_slot_number
 *             properties:
 *               parking_slot_number:
 *                 type: string
 *                 example: "A1"
 *     responses:
 *       200:
 *         description: List of parking sessions for the specified parking slot
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ParkingSession'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Forbidden - Admin access required
 */
parkingSessionRouter.get("/by-parking-slot",authorizeUser,adminAuth,getSessionByParkingSlot);

/**
 * @swagger
 * /pms/api/v1/parking-session/by-vehicle-plate:
 *   get:
 *     summary: Get parking sessions by vehicle plate number
 *     tags: [Parking Sessions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - vehicle_number_plate
 *             properties:
 *               vehicle_number_plate:
 *                 type: string
 *                 example: "ABC123"
 *     responses:
 *       200:
 *         description: List of parking sessions for the specified vehicle
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ParkingSession'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Forbidden - Admin access required
 */
parkingSessionRouter.get("/by-vehicle-plate",authorizeUser,adminAuth,getSessionByVehiclePlate);

/**
 * @swagger
 * /pms/api/v1/parking-session/by-client-name:
 *   get:
 *     summary: Get parking sessions by client name
 *     tags: [Parking Sessions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - client_name
 *             properties:
 *               client_name:
 *                 type: string
 *                 example: "John Doe"
 *     responses:
 *       200:
 *         description: List of parking sessions for the specified client
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ParkingSession'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Forbidden - Admin access required
 */
parkingSessionRouter.get("/by-client-name",authorizeUser,adminAuth,getSessionByClientName);

/**
 * @swagger
 * /pms/api/v1/parking-session/by-vehicle-status:
 *   get:
 *     summary: Get parking sessions by vehicle status
 *     tags: [Parking Sessions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - vehicleStatus
 *             properties:
 *               vehicleStatus:
 *                 type: string
 *                 enum: [PARKING, OUT]
 *                 example: "PARKING"
 *     responses:
 *       200:
 *         description: List of parking sessions with the specified status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ParkingSession'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Forbidden - Admin access required
 */
parkingSessionRouter.get("/by-vehicle-status",authorizeUser,adminAuth,getParkingSessionByStatus);

/**
 * @swagger
 * /pms/api/v1/parking-session:
 *   post:
 *     summary: Create a new parking session
 *     tags: [Parking Sessions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ParkingSessionInput'
 *     responses:
 *       200:
 *         description: Parking session created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Parking session created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/ParkingSession'
 *       400:
 *         $ref: '#/components/responses/BadRequestError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Forbidden - Admin access required
 */
parkingSessionRouter.post("/",authorizeUser,adminAuth,addParkingSession);

/**
 * @swagger
 * /pms/api/v1/parking-session/{id}:
 *   put:
 *     summary: Update a parking session
 *     tags: [Parking Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Parking session ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ParkingSessionUpdateInput'
 *     responses:
 *       200:
 *         description: Parking session updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Parking session updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/ParkingSession'
 *       400:
 *         $ref: '#/components/responses/BadRequestError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Forbidden - Admin access required
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
parkingSessionRouter.put("/:id",authorizeUser,adminAuth,updateParkingSessionDetails);

/**
 * @swagger
 * /pms/api/v1/parking-session/{id}:
 *   delete:
 *     summary: Delete a parking session
 *     tags: [Parking Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Parking session ID
 *     responses:
 *       200:
 *         description: Parking session deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Parking session deleted successfully"
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Forbidden - Admin access required
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
parkingSessionRouter.delete("/:id",authorizeUser,adminAuth,deleteSession);

export default parkingSessionRouter;

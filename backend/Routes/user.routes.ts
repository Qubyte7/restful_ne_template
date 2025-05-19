import {Router} from 'express'
import {getAllDriver, getAllAdmin, getDriverByCarPlate, deleteClient, updateClient, getDriverByEmail} from "../Controllers/user.controller";
import {authorizeUser} from "../Middlewares/auth.middleware";
import adminAuth from "../Middlewares/adminAuth.middleware";


const userRouter = Router();


userRouter.get('/get-driver',authorizeUser,getDriverByEmail);


/**
 * @swagger
 * /pms/api/v1/users/drivers:
 *   get:
 *     summary: Get all drivers
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all drivers
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
 *                   example: "All drivers fetched successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Client'
 */
userRouter.get('/drivers', getAllDriver);

/**
 * @swagger
 * /pms/api/v1/users/admins:
 *   get:
 *     summary: Get all admins
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all admins
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
 *                   example: "All admins fetched successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Client'
 */
userRouter.get('/admins', getAllAdmin);

/**
 * @swagger
 * /pms/api/v1/users/driver/by-car-plate:
 *   post:
 *     summary: Get driver by car plate
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - car_number_plate
 *             properties:
 *               car_number_plate:
 *                 type: string
 *                 example: "ABC123"
 *     responses:
 *       200:
 *         description: Driver information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Client'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
userRouter.post('/driver/by-car-plate', getDriverByCarPlate);

/**
 * @swagger
 * /pms/api/v1/users/client/{id}:
 *   delete:
 *     summary: Delete a client
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Client ID
 *     responses:
 *       200:
 *         description: Client deleted successfully
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
 *                   example: "Client deleted successfully"
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
userRouter.delete('/client/:id', deleteClient);

/**
 * @swagger
 * /pms/api/v1/users/client/{id}:
 *   put:
 *     summary: Update a client
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Client ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClientUpdateInput'
 *     responses:
 *       200:
 *         description: Client updated successfully
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
 *                   example: "Client updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Client'
 *       400:
 *         $ref: '#/components/responses/BadRequestError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
userRouter.put('/client/:id', updateClient);

export default userRouter;

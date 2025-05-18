import {Router} from 'express'
import {me, signIn,signUp} from "../Controllers/auth.controller";
import { authorizeUser } from '../Middlewares/auth.middleware';

const authRouter = Router();
authRouter.get('/me',authorizeUser,me);

/**
 * @swagger
 * /pms/api/v1/auth/signUp:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignUpInput'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: User already exists or invalid input
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
authRouter.post('/signUp',signUp);

/**
 * @swagger
 * /pms/api/v1/auth/signIn:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignInInput'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       403:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
authRouter.post('/signIn',signIn);

export default authRouter;

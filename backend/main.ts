import Express from 'express';
import {SERVER_PORT} from "./config/env";
import authRouter from "./Routes/auth.routes";
import userRouter from "./Routes/user.routes";
import vehicleRouter from "./Routes/vehicle.routes";
import parkingSessionRouter from "./Routes/parkingSession.routes";
import parkingSlotRouter from "./Routes/parkingSlot.routes"; // Added missing import
import {errorHandlerMiddleware, notFound} from "./Middlewares/errorHandler.middleware";
import {swaggerUi, specs} from './config/swagger';

const app = Express();
app.use(Express.json());

// SWAGGER
app.use("/pms/api-docs", ...swaggerUi.serve, swaggerUi.setup(specs)); // Updated path for consistency

// Routes definition
app.use('/pms/api/v1/auth', authRouter);
app.use('/pms/api/v1/users', userRouter);
app.use('/pms/api/v1/vehicles', vehicleRouter);
app.use('/pms/api/v1/parking-session', parkingSessionRouter);
app.use('/pms/api/v1/parking-slots', parkingSlotRouter); // Added missing route

// Error handling middleware - moved after routes
app.use(notFound); // Handle 404 errors for undefined routes
app.use(errorHandlerMiddleware); // Handle other errors

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});
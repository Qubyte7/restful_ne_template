import {config} from 'dotenv';
config({path:`.env`})

export const {SERVER_PORT,JWT_SECRET}=process.env;

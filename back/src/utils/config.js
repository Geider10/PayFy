import dotenv from 'dotenv';
import {rateLimit} from 'express-rate-limit';
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || process.env.MONGO_URI_DEV
export const PORT = process.env.PORT || process.env.PORT_DEV
export const SECRET_KEY = process.env.SECRET_KEY || process.env.SECRET_KEY_DEV
export const ACCESS_TOKEN_MP =  process.env.ACCESS_TOKEN_MP || process.env.ACCESS_TOKEN_MP_DEV

export const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    limit: 10,
    message: 'Too many requests, please try again later 1 minute',
    standardHeaders: true,
    legacyHeaders: false,
    statusCode: 429
})

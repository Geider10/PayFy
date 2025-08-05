import { JsonWebTokenError, TokenExpiredError, verify} from 'jsonwebtoken';
import {SECRET_KEY} from '../config/config';
import {Request, Response, NextFunction} from 'express';

export function verifyToken(req : Request, _res : Response, next : NextFunction){
    try {
        if(!SECRET_KEY) throw new Error("SECRET_KEY is required")
        const authHeader  = req.header('Authorization')
        if (!authHeader || authHeader.trim() == "")  throw new Error("token is required")
        
        const token = authHeader.replace("Bearer ", "").trim()
        const decoded = verify(token.slice(1, -1), SECRET_KEY)
        //req.user = decoded
        console.log(decoded);
        next()
    } catch (error) {
        if(error instanceof TokenExpiredError) throw new Error("Token expired")
        if(error instanceof JsonWebTokenError) throw new Error("Toekn invalid")
        throw new Error("Error validation token")
    }
}
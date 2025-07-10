import {AuthController} from '../controllers/auth.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {userValidator,loginUserValidator} from '../validators/user.validator.js';
import {Router} from 'express';

export const authRouter = Router()
authRouter.post('/signup',validateSchema(userValidator),AuthController.signUp)
authRouter.post('/login',validateSchema(loginUserValidator),AuthController.logIn)
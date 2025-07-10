import {Router} from 'express';
import {UserController} from '../controllers/user.controller.js';
import {validateSchema} from '../middlewares/validateSchema.js';
import {userValidator} from '../validators/user.validator.js';   

export const userRouter = Router()
userRouter.get('/:id',UserController.getUserById)
userRouter.put('/:id', validateSchema(userValidator),UserController.updateUser)


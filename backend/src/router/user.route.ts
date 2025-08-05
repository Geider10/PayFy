import {Router} from 'express';
import {UserController} from '../controller/user.controller';
import {verifyToken} from '../middleware/verifyToken';
import container from '../config/container';

export const userRouter = Router();
const userController = container.resolve(UserController);

userRouter.post('/signup', userController.Signup.bind(userController));
userRouter.post('/login', userController.Login.bind(userController));
userRouter.get("/:id", verifyToken , userController.GetById.bind(userController));
userRouter.put("/:id", verifyToken , userController.Update.bind(userController));
userRouter.delete("/:id", verifyToken , userController.Delete.bind(userController));
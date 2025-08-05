import {Router} from 'express';
import {UserController} from '../controller/user.controller';
import container from '../util/container';

export const userRouter = Router();
const userController = container.resolve(UserController);

userRouter.post('/signup', userController.Signup.bind(userController));
userRouter.post('/login', userController.Login.bind(userController));
userRouter.get("/:id", userController.GetById.bind(userController));
userRouter.put("/:id", userController.Update.bind(userController));
userRouter.delete("/:id", userController.Delete.bind(userController));
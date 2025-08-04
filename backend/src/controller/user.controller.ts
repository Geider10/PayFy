import { Request, Response } from 'express';
import {UserService} from '../service/user.service';
import { UserSignup , UserLogin} from '../types';
import { MainResponse } from '../util/mainResponse';
import {injectable} from 'tsyringe';

@injectable()
export class UserController {
    constructor(readonly _userService : UserService) {}

    async Signup (req : Request , res : Response, next : Function ){
        try {
            const user : UserSignup = req.body;
            await this._userService.Singup(user);

            res.status(201).json(new MainResponse(true, "User created with success"));
        } catch (error) {
            next(error)
        }
    }
    async Login (req : Request, res : Response, next : Function){
        try {
            const user : UserLogin = req.body;
            const token = await this._userService.Login(user);

            res.status(200).json(token);
        } catch (error) {
            next(error);
        }
    }
}
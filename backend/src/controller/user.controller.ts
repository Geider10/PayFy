import { Request, Response } from 'express';
import {UserService} from '../service/user.service';
import { UserSignup } from '../types';
import { MainResponse } from '../util/mainResponse';
import {injectable} from 'tsyringe';

@injectable()
export class UserController {
    constructor(readonly _userService : UserService) {}

    async Signup (req : Request , res : Response, next : Function ){
        try {
            const user : UserSignup = req.body;
            await this._userService.Singup(user);
            const main = new MainResponse(true, "User created with success");
            res.status(201).json(main)
        } catch (error) {
            next(error)
        }
    }
}
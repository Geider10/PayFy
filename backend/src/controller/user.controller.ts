import { Request, Response } from 'express';
import {UserService} from '../service/user.service';
import { UserSignup , UserLogin, UserUpdate} from '../types';
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
    async GetById (req : Request, res : Response, next : Function){
        try {
            const id = req.params.id;

            const userGet = await this._userService.GetById(id);
            res.status(200).json(userGet);
        } catch (error) {
            next(error);
        }
    }
    async Update ({params, body} : Request, res : Response, next : Function){
        try {
            const id = params.id;
            const userUpdate : UserUpdate = body;

            await this._userService.Update(id, userUpdate);
            res.status(200).json(new MainResponse(true, "User updated with success"));
        } catch (error) {
            next(error)
        }
    }
    async Delete ({params} : Request, res : Response, next : Function){
        try {
            const id = params.id;

            await this._userService.Delete(id);
            res.status(200).json(new MainResponse(true, "User deleted with success"));
        } catch (error) {
            next(error);
        }
    }
}
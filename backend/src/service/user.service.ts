import {UserRepository} from '../repository/user.repository';
import {UserSignup} from '../types';
import {Util} from '../util/util';
import {injectable} from 'tsyringe';

@injectable()
export class UserService{
    constructor(
        readonly _userRepo: UserRepository,
        readonly _util: Util){}

    async Singup ( userSignup : UserSignup) {
        const userExists = await this._userRepo.GetByEmail(userSignup.email);
        if(userExists != null) throw new Error("Email of user already exists");
        
        const passwordHash = await this._util.HashText(userSignup.password);
        const user = {...userSignup, password : passwordHash}
        await this._userRepo.Add(user)
    }
}
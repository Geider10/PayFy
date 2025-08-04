import {IUserRepository} from '../repository/user.repository';
import {UserSignup, UserLogin} from '../types';
import {Util} from '../util/util';
import {inject, injectable} from 'tsyringe';
import {MainError} from '../util/mainError';

@injectable()
export class UserService{
    constructor(
        @inject("IUserRepository") readonly _userRepo: IUserRepository,
        readonly _util: Util){}

    async Singup (userSignup : UserSignup) {
        const userExists = await this._userRepo.GetByEmail(userSignup.email);
        if(userExists != null) throw new MainError(400,"Email of user already exists");
        
        const passwordHash = await this._util.HashText(userSignup.password);
        const user = {...userSignup, password : passwordHash}
        await this._userRepo.Add(user)
    }
    async Login (userLogin : UserLogin) : Promise<string>{
        const userExists = await this._userRepo.GetByEmail(userLogin.email);
        if (userExists == null) throw new MainError(400,"Email of user no registered");

        const passwordMatch = await this._util.VerifyHashText(userLogin.password, userExists.password);
        if(!passwordMatch) throw new MainError(400,"Password of user is incorrect");

        const token = this._util.CreateToken(userExists.id);
        return token;
    }
}
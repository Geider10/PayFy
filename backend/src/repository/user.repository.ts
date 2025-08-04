import {User} from '../data/model/user.model';
import {UserCreationAttributes, UserAttributes} from '../types';
import {injectable} from 'tsyringe';

export interface IUserRepository{
    GetByEmail(email : string) : Promise<UserAttributes | null>
    Add(user : UserCreationAttributes) : Promise<void>
}

@injectable()
export class UserRepository implements  IUserRepository{
    async GetByEmail (email : string) : Promise<UserAttributes | null> {
       return await User.findOne( { where : {email}})
    }
    async Add ( user : UserCreationAttributes){
        await User.create(user)
    }
}
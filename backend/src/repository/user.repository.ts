import {User} from '../data/model/user.model';
import {UserCreationAttributes, UserAttributes} from '../types';
import {injectable} from 'tsyringe';

@injectable()
export class UserRepository{
    async GetByEmail (email : string) : Promise<UserAttributes | null> {
       return await User.findOne( { where : {email}})
    }
    async Add ( user : UserCreationAttributes){
        await User.create(user)
    }
}
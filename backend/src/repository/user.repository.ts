import {User} from '../data/model/user.model';
import {UserCreationAttributes, UserAttributes} from '../types';
import {injectable} from 'tsyringe';

export interface IUserRepository{
    GetByEmail(email : string) : Promise<UserAttributes | null>
    Add(user : UserCreationAttributes) : Promise<void>
    GetById(id : string) : Promise<User | null>
    Update(user : User) : Promise<void>
    Delete(user : User) : Promise<void>
}

@injectable()
export class UserRepository implements  IUserRepository{
    async GetByEmail (email : string) : Promise<UserAttributes | null> {
       return await User.findOne( { where : {email}})
    }
    async Add ( user : UserCreationAttributes){
        await User.create(user)
    }
    async GetById (id : string) : Promise<User | null>{
        return await User.findByPk(id);
    } 
    async Update(user : User) {
        await user.save();
    }
    async Delete(user : User){
        await user.destroy();
    }
}
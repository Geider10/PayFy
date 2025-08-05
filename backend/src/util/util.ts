import {genSalt, compare, hash} from 'bcrypt';
import {singleton} from 'tsyringe';
import {sign} from 'jsonwebtoken';
import {SECRET_KEY} from '../config/config';

@singleton()
export class Util {
    async HashText(text : string) : Promise<string>{
        const salt = await genSalt(10)
        const dataHash = await hash(text,salt)
        return dataHash
    }
    async VerifyHashText(text : string, textHash : string) : Promise<boolean>{
        const dataVerify  = await compare(text,textHash)
        return dataVerify
    }
    CreateToken(id : string) : string{
        const jwt = sign({userId : id}, SECRET_KEY!, {expiresIn : "15m"} )
        return jwt
    }

}
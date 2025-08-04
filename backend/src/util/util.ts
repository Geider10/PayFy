import bcrypt from 'bcrypt';
import {injectable} from 'tsyringe';

@injectable()
export class Util {
    async HashText(text : string){
        const salt = await bcrypt.genSalt(10)
        const dataHash = await bcrypt.hash(text,salt)
        return dataHash
    }
    async VerifyHashText(text : string, textHash : string){
        const dataVerify  = await bcrypt.compare(text,textHash)
        return dataVerify
    }
}
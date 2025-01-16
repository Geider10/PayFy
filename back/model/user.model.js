import {Schema,model} from 'mongoose';

const schema = new Schema({
    name : {type:String, required:true},
    lastname : {type:String, required:true},
    email : {type:String, required:true, unique : true},   
    password : {type:String, required:true},    
    favoriteServices : [
        {type : Schema.types.ObjectId, ref : 'service'}
    ]
})

export const userModel = model('user', schema);
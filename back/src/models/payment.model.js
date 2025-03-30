import {Schema, model} from 'mongoose';

const schema = new Schema({
    userId : {type: Schema.Types.ObjectId, ref: 'user', required : true},
    invoiceId : {type: String, required : true}, 
    paymentStatus : {type: String, enum : ['pending', 'approved', 'rejected'],required : true},   
    paymentDateCreated : {type: Date, default: Date.now}
})

export const paymentModel = model('payment', schema);
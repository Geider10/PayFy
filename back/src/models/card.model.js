import {Schema, model} from 'mongoose';

const schema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    cardHolderName: {type: String, required: true}, 
    cardNumber : {type: String, required: true, select : false},    
    cardType : {type: String, enum : ['credit' , 'debit'],required: true},
    cardExpirationDate : {type: String, required: true},
    // cardCvv : {type: String, required: true, select : false}, //no se recomienda almacenar este atributo
    cardDateCreated : {type: Date, default: Date.now}
})

export const cardModel = model('paymentMethod', schema);   


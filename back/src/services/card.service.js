import {cardModel} from '../data/models/card.model.js';
import {encryptData, decryptData} from '../utils/utils.js';

export class CardService {
    static async getCards(){
        const paymentMethods = await cardModel.find().lean().select('+cardNumber')
        if(paymentMethods.length == 0) throw new Error('There are no paymentMethods')
        const decryptPaymentMethods = paymentMethods.map((p)=>{
            p.cardNumber = decryptData(p.cardNumber)
            return { userId : p.userId ,cardId : p._id, lastFord : p.cardNumber.slice(-4)}
        })

        return decryptPaymentMethods
    }

    static async getCardById({id}){
        const paymentMethod = await cardModel.findById(id).lean().select('+cardNumber')
        if(!paymentMethod) throw new Error('PaymentMethod no found')  
        const {cardNumber} = paymentMethod
        return {lastFord : decryptData(cardNumber).slice(-4)}
    }
    
    static async createCard({pmBody}){
        const encryptCardNumber =  encryptData(pmBody.cardNumber)
        await cardModel.create({...pmBody, cardNumber: encryptCardNumber})

        return {success: true, message : 'paymentMethod successfully created'}
    }

    static async updateCard({id, pmBody}){   
        const encryptCardNumber = encryptData(pmBody.cardNumber)
        const cardUpdated = {...pmBody, cardNumber : encryptCardNumber} 
        await cardModel.findByIdAndUpdate(id,{$set : cardUpdated, new : true})

        return {success: true, message : 'paymentMethod successfully updated'}
    }

    static async deleteCardById({id}){
        const deletedCard = await cardModel.findByIdAndDelete(id)
        if(!deletedCard) throw new Error('PaymentMethod no found')

        return {success: true, message : 'paymentMethod successfully deleted'}
    }
}
import {CardService} from '../services/card.service.js';

export class CardController{
    static async getPaymentMethods(req,res,next){
        try {
            const paymentMethods = await CardService.getCards()
            res.status(200).json(paymentMethods)
        } catch (error) {
            next(error)            
        }
    }
    static async getPaymentMethodById(req,res,next){
        try {
            const {id} = req.params
            const paymentMethod = await CardService.getCardById({id})
            res.status(200).json(paymentMethod)
        } catch (error) {
            next(error)
        }
    }
    static async createPaymentMethod(req,res,next){
        try {
            const pmBody = req.body
            const paymentMethod = await CardService.createCard({pmBody})
            res.status(201).json(paymentMethod)
        } catch (error) {
            next(error)
        }
    }
    static async updatePaymentMethod(req,res,next){
        try {
            const {id} = req.params
            const pmBody = req.body
            const paymentMethod = await CardService.updateCard({id,pmBody})
            res.status(200).json(paymentMethod)
        } catch (error) {
            next(error)
        }
    }
    static async deletePaymentMethod(req,res,next){
        try {
            const {id} = req.params
            const paymentMethod = await CardService.deleteCardById({id})
            res.status(200).json(paymentMethod)
        } catch (error) {
            next(error)
        }
    }
}
import {PaymentService} from '../services/payment.service.js';

export class PaymentController{
    static async getPaymentsUser(req,res,next){
        try {
            const {clientId} = req.params
            const payments = await PaymentService.getPaymentsUser({clientId})
            res.status(200).json(payments)
        } catch (error) {
            next(error)
        }
    }
    static async getPaymentByIdUser(req,res,next){
        try {
            const {payId} = req.params
            const payment = await PaymentService.getPaymentByIdUser({payId})
            res.status(200).json(payment)
        } catch (error) {
            next(error)
        }
    }
    static async createPaymentUser(req,res,next){
        try {
            const paymentBody = req.body
            const payment = await PaymentService.createPaymentUser({paymentBody})
            res.status(201).json(payment)
        } catch (error) {
            next(error)
        }
    }
    static async paymentInvoice(req,res,next){
        try {
            const payBody = req.body
            const payment = await PaymentService.paymentInvoice({payBody})
            res.status(201).json(payment)
        } catch (error) {
            next(error)
        }
    }
}
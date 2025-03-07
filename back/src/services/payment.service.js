import {paymentModel} from '../models/payment.model.js';
import {formatDate, readJSON} from '../utils/utils.js';

export class PaymentService{
    static async getPaymentsUser({clientId}){
        let payments = await paymentModel.find().lean()
        if(payments.length == 0 ) throw new Error('There are no payments')
        payments = payments.map(p => {
        p.paymentDateCreated = formatDate(p.paymentDateCreated)
        return p
        })
        const paymentsUser = payments.filter(p => p.userId == clientId)
        if(paymentsUser.length == 0) return {message : 'There are no payments for this user'}
        return paymentsUser
    }

    static async getPaymentByIdUser({payId}){
        const payment = await paymentModel.findById(payId).lean().populate(['userId','paymentMethodId'])
        if(!payment) throw new Error('Payment no found')
        const companies = readJSON('../data/companies.json')
        const company = companies.find(c => c.serviceId == payment.serviceId)
        
        return {...payment, serviceId : company, paymentDateCreated : formatDate(payment.paymentDateCreated)}
    }

    static async createPaymentUser({paymentBody}){
        const payment = await paymentModel.create(paymentBody)

        return {success: true, message : 'Payment successfully created', payment}
    }
}
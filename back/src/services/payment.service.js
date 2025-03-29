import {paymentModel} from '../models/payment.model.js';
import {formatDate, readJSON} from '../utils/utils.js';
import {ACCESS_TOKEN_MP} from '../utils/config.js';
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
    
    static async paymentInvoice({payBody}){
        const {client_description, amount, invoice_title, invoice_id, company} = payBody
        const preference = {
            "items": [
                {
                "id": invoice_id,
                "title": invoice_title,
                "description": client_description,
                "picture_url": "https://www.myapp.com/myimage.jpg",
                "category_id": company.name,
                "quantity": 1,
                "currency_id": "ARS",
                "unit_price": amount
                }
            ]
        }
        try {
            const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${ACCESS_TOKEN_MP}`
                },
                body : JSON.stringify(preference)
            })
            const data = await response.json()
            console.log(data.init_point);
            return data.init_point
        } catch (error) {
            throw new Error('Error creating payment', error)
            
        }
    }
}
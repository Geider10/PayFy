import {AxiosError} from 'axios';
import {Debt} from '@/types/types';

export const payInvoice = async(invoice : Debt) => {
    const ACCESS_TOKEN_MP= process.env.EXPO_PUBLIC_ACCESS_TOKEN_MP
    const {company, invoice_id, invoice_title, client_description, amount} = invoice;
    try {
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
        const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${ACCESS_TOKEN_MP}`
            },
            body : JSON.stringify(preference)
        })
        const data = await response.json()
        return {ok:true, data:{url:data.init_point}}
    } catch (error) {
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
        
    }
}
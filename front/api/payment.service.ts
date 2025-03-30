import {AxiosError} from 'axios';
import {Debt, CreateDebt} from '@/types/types';
import axiosApi from "./axiosApi";
const PAYMENT_URI = "/payment";

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

export const apiPostPayment = async ( payment : CreateDebt) => {
    try {
        const { data} = await axiosApi.post(`${PAYMENT_URI}`, payment);
        return {ok : true, data}
    } catch (error) {
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
        
    }
}

export const apiGetPaymentsUser = async (userId : string) => {
    try {
        const {data} = await axiosApi.get(`${PAYMENT_URI}/${userId}`)
        return {ok : true, data}
    } catch (error) {
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}       
    }
}
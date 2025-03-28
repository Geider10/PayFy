import { AxiosError } from "axios";
import axiosApi from "./axiosApi";
import {CreateCard} from '@/types/types';
const CARDSS_URI = "/card";


export const apiGetCards = async () => {
    try {
        const { data } = await axiosApi.get(`${CARDSS_URI}`);
        return { ok: true, data }
    } catch (error) {
        console.log(error);
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}

export const apiGetCardById = async (id : string) =>{
    try {
        const {data} = await axiosApi.get(`${CARDSS_URI}/${id}`)
        return { ok: true, data}
    } catch (error) {
        console.log(error);
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}

export const apiPostCards = async (createCardInfo: CreateCard) => {
    try {
        const { data } = await axiosApi.post(`${CARDSS_URI}`, createCardInfo);
        return { ok: true, data }
    } catch (error) {
        console.log(error);
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}

export const apiDeleteCardById = async (id: string) => {
    try{
        const {data} = await axiosApi.delete(`${CARDSS_URI}/${id}`)
        return { ok: true, data}
    }
    catch(error){
        console.log(error);
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}
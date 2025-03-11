import { AxiosError } from "axios";
import axiosApi from "./axiosApi";
const PROVIDERS_URI = "/provider";

export type AddService = {
  userId: string;
  clientId: string;
  serviceId: string;
};

export const apiGetServicesCategories = async () => {
    try {
        const { data } = await axiosApi.get(`${PROVIDERS_URI}/categories`);
        return { ok: true, data }
    } catch (error) {
        console.log(error);
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}

export const apiGetServicesByCategory = async (categoryId:string) => {
    try {
        const { data } = await axiosApi.get(`${PROVIDERS_URI}/companies/${categoryId}`);
        return { ok: true, data }
    } catch (error) {
        console.log(error);
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}

export const apiGetUserServices = async (userId:string) => {
    try {
        const { data } = await axiosApi.get(`${PROVIDERS_URI}/services/${userId}`);
        return { ok: true, data }
    } catch (error:unknown) {
        console.log(error)
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}

export const apiGetUserDebts = async (userId:string) => {
    try {
        const { data } = await axiosApi.get(`${PROVIDERS_URI}/debts`);
        return { ok: true, data }
    } catch (error:unknown) {
        console.log(error)
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}

export const apiAddService = async (addServiceData:AddService) => {
    try {
        const { data } = await axiosApi.post(`${PROVIDERS_URI}/services`, addServiceData);
        return { ok: true, data }
    } catch (error:unknown) {
        console.log(error)
        if(error instanceof AxiosError){
            return {ok:false, data:error.response?.data}
        }
        return {ok:false, data:{message:"Server error"}}
    }
}


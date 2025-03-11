import { AxiosError } from "axios";
import axiosApi from './axiosApi';
import axios from 'axios';

const AUTH_URI = "/auth";

export type LoginForm = {
    userEmail: string;
    userPassword: string;
};

export type RegDataVals = {
    userName: string;
    userLastName: string;
    userDNI: string;
    userPassword: string;
    userEmail: string;
    userPasswordConf: string;
};

export const apiRegister = async (registerData: RegDataVals) => {
    try {
        const response = await axiosApi.post(`${AUTH_URI}/signup`, registerData);
        return { ok: true, data: response.data }
    } catch (error) {
        console.log(error);
        return {ok: false, data: (error as AxiosError).response?.data }
    }

}

export const apiLogin = async (loginData: LoginForm) => {
    try {
        const response = await axiosApi.post(`${AUTH_URI}/login`, loginData);
        return { ok: true, data: response.data };
    } catch (error: unknown) {
        console.log(error)
        return { ok: false, data: (error as AxiosError).response?.data };
    }
}
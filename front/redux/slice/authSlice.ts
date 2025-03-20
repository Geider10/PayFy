import { AUTH_STATUS } from "@/constants/enums/AuthStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {UserInfo} from '@/types/types';

export interface AuthState {
    status: AUTH_STATUS;
    user: UserInfo;
    token?: string;
    errorMessage: { on?: "auth" | "reg", message?: string };
}
const useData = {
    userEmail : '',
    userLastName : '',
    userName : '',
    _id : '',
}

const initialState: AuthState = {
    status: AUTH_STATUS.checking,
    user: useData,
    token: undefined,
    errorMessage: {},
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {
        onChecking: (state) => {
            state.status = AUTH_STATUS.checking;
            state.user = useData;
            state.token = undefined;
            state.errorMessage = {};
        },
        onLogin: (state, { payload }: { payload: { token?: string, user: UserInfo } }) => {
            state.status = AUTH_STATUS.authenticated;
            state.user = payload.user;
            state.token = payload.token;
            state.errorMessage = {};
        },
        onBadLogin: (state, { payload }: { payload: { on?: "auth" | "reg", message?: string } }) => {
            (state.status = AUTH_STATUS.not_authenticated), (state.user = useData), (state.token = undefined);
            state.errorMessage = payload;
        },
        onBadRegister: (state, { payload }: { payload: { on?: "auth" | "reg", message?: string } }) => {
            (state.status = AUTH_STATUS.not_authenticated), (state.user = useData), (state.token = undefined);
            state.errorMessage = payload;
        },
        clearErrormessage: (state) => {
            state.errorMessage = {};
        },
        onLogOut: (state) => {
            state.status = AUTH_STATUS.not_authenticated;
            state.user = useData;
            state.token = undefined;
            state.errorMessage = {};
        },
    },
});

export const { onChecking, onLogin, onBadLogin, clearErrormessage, onLogOut, onBadRegister } =
    authSlice.actions;
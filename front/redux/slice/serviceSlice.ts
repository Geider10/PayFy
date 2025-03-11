import {createSlice} from '@reduxjs/toolkit';

interface User {
    clienteId : string
}
interface Category {
    id : string,
    name : string
}
interface Service {
    serviceId : string,
    type : string,
    name : string,
    cuit : string,
    picture_url : string,
    category : Category,
    registeredUsers : Array<User>,
}
interface ServiceState {
    services : Array<Service>
}
export const initialState : ServiceState = {
    services : []
}
export const serviceSlice = createSlice({
    name : 'serviceSlice',
    initialState : initialState,
    reducers : {
        setServices( state, {payload}: { payload: Array<Service> }) {
            state.services = payload
        }
    }
})
export const { setServices } = serviceSlice.actions
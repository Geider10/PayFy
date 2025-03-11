import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '@/redux/store';
import {setServices} from '@/redux/slice/serviceSlice';
import {apiGetServicesByCategory} from '../api/providers.service';
export const useServiceStore = () => {
    const services = useSelector( (state : RootState) => state.serviceSlice.services);
    const dispatch = useDispatch(); 

    const setServicesData = async () =>{
        const {data, ok} = await apiGetServicesByCategory('1');
        if(ok){
            dispatch(setServices(data));
            console.log('The services' + data);
        }
    }
    return {
        services,
        setServicesData
    }
}
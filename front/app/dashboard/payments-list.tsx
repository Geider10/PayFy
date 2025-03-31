import HeaderApp from '@/components/dashboard/HeaderApp';
import {FlatList, View, StyleSheet} from 'react-native';
import {ThemedView} from '@/components/ThemedView';
import { PaymentsClient } from '@/components/payments/PaymentsClient';
import { apiGetPaymentsUser } from "@/api/payment.service";
import {useEffect, useState} from 'react';
import {useAuthStore} from '@/hooks/useAuthStore';
import {Payment} from '@/types/types';
import { ThemedText } from '@/components/ThemedText';

export default function PaymentsList(){
    const {user} = useAuthStore()
    const [payments, setPayments] = useState<Array<Payment>>([])

    const getPayments = async () => {
        console.log(user._id);
        const {ok, data} = await apiGetPaymentsUser(String(user._id))
        if(ok){
            setPayments(data)
        }
    }
    useEffect(()=>{
        getPayments() 
    },[])
    return (
        <ThemedView style = {style.content}>
            <HeaderApp/>
            <ThemedText type="subtitle">Historial de pagos</ThemedText>
            <PaymentsClient paymentList={payments}/>
        </ThemedView>
    )
}

const style = StyleSheet.create({
    content : {
        flex : 1,
        padding : 15,
        gap : 20
    }
})
import {View, StyleSheet} from 'react-native';
import {Payment} from '@/types/types';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {ColorsBase} from '@/constants/Colors';    
import { useColorScheme } from '@/hooks/useColorScheme.web';


export const PaymentCard = (paymentProp : Payment) => {
    const theme = useColorScheme() ?? 'light';
    const {invoiceId ,paymentDateCreated, paymentStatus} = paymentProp
    return (
        <ThemedView style={[style.contentCard ,{ backgroundColor:  theme == 'light' ? ColorsBase.neutral200 : '#000'}]}>
            <View style={style.contentWord}>
                <ThemedText type='defaultSemiBold'>{invoiceId.company.name}</ThemedText>
                <ThemedText type='defaultSemiBold'>$ {invoiceId.amount}</ThemedText>
            </View>
            <View style={style.contentWord}>
                <TextStatusPay status={paymentStatus}></TextStatusPay>
                <ThemedText type='default' style = {style.word}> {paymentDateCreated}</ThemedText>
            </View>
        </ThemedView>
    )
}

const TextStatusPay = ({status} : {status : string}) => {
    let valueStatus = ''
    let colorText = ''
    if(status == 'approved') {
        valueStatus = 'Aprobado'
        colorText = ColorsBase.cyan400
    }
    else if(status == 'pending') {
        valueStatus = 'Pendiente'
        colorText = ColorsBase.yellow400
    }
    else if(status == 'rejected') {
        valueStatus = 'Rechazado'
        colorText = ColorsBase.red400
    }

    return (
        <ThemedText type='default' style = {{color : colorText}}> {valueStatus} </ThemedText>
    )
}

const style = StyleSheet.create({
    contentCard : {
        padding : 10,
        borderRadius : 5,
        borderWidth : 1,
        borderColor : ColorsBase.neutral600,
        gap : 10
    },
    contentWord : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    word : {
        color : ColorsBase.neutral600
    }
    
})
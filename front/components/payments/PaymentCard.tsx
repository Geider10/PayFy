import {View} from 'react-native';
import {Payment} from '@/types/types';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

export const PaymentCard = (paymentProp : Payment) => {
    const {invoiceId ,paymentDateCreated} = paymentProp
    return (
        <ThemedView>
            <ThemedText type='default'>{paymentDateCreated}</ThemedText>
        </ThemedView>
    )
}
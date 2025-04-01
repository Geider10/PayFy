import {FlatList, View} from 'react-native';
import {Payment} from '@/types/types';
import { PaymentCard } from './PaymentCard';
import { ThemedText } from '../ThemedText';
import { ColorsBase } from '@/constants/Colors';
export const PaymentsClient = ( {paymentList} : {paymentList : Array<Payment>} ) => {
    return (
        <FlatList
            data= {paymentList}
            renderItem ={({item})=> <PaymentCard  _id = {item._id} userId={item.userId} invoiceId={item.invoiceId} paymentStatus={item.paymentStatus} paymentDateCreated={item.paymentDateCreated}/>}
            ListEmptyComponent={()=> (
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <ThemedText type='default' style={{color: ColorsBase.cyan400 }}>
                        ¡No hay pagos!
                    </ThemedText>
                </View>
            )}   
            ItemSeparatorComponent={()=><View style={{marginBottom : 10}}/>}  
        />
    )
}
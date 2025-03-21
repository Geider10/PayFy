import AllCards from '@/components/AllCards';
import HeaderApp from '@/components/dashboard/HeaderApp';
import {FlatList, View} from 'react-native';
export default function PaymentsList(){
    return (
       <FlatList
        contentContainerStyle={{padding : 15}}
        data={[]}
        renderItem={()=> null}
        ListHeaderComponent={
        <View style ={{gap : 20}}>
            <HeaderApp/>
        </View>
        }
       />
        
    )
}
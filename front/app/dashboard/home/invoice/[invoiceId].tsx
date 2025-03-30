import { ThemedText } from "@/components/ThemedText";
import { ThemedView} from '@/components/ThemedView';
import { ColorsBase, Colors } from "@/constants/Colors";
import { useLocalSearchParams, Link, router, RelativePathString} from "expo-router";
import { ScrollView, View, StyleSheet, Text, ActivityIndicator } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {apiGetUserDebts} from '@/api/providers.service';
import {useAuthStore} from '@/hooks/useAuthStore';
import {Debt} from '@/types/types';
import { HeaderToBack } from "@/components/HeaderToBack";
import {payInvoice} from '@/api/payment.service';
import {openBrowserAsync} from 'expo-web-browser';

export default function Route() {

  const { invoiceId } = useLocalSearchParams<{ invoiceId: string }>();
  const [debt, setDebt] = useState<Debt>()
  const {user} = useAuthStore()

  const handlePayInvoice = async () => {
    if (debt){
      const {ok, data} = await payInvoice(debt)
      if (ok){
          openBrowserAsync(data.url)
      }
    }
          
  }

  const getDebtById = async () =>{
    const {data } = await apiGetUserDebts(String(user._id))
    const findDebt = data.find( (d: Debt) => d.invoice_id == invoiceId)
    setDebt(findDebt)
  }
  useEffect(()=>{
    setTimeout(()=> {
      getDebtById()
    },1000)
  },[])
  return (
    <ThemedView style={{padding:15, flex:1}} >
      <View style={styles.contentCard}> 
          <HeaderToBack url={"/dashboard/home" as RelativePathString} title={"Factura"}/>
        {
          debt ? (
            <>
             <View style= {{flexDirection : 'row',alignItems : 'flex-start', justifyContent : 'space-between'}}>
          <View>
            <ThemedText type="subtitle" >{debt.company.name}</ThemedText>
            <ThemedText type="default" >Category</ThemedText>
          </View>
          <MaterialCommunityIcons name="newspaper-variant-outline" size={26} color="black" />
        </View>
        <View>
          <ThemedText style={styles.cardId}>N° Orden: {debt.invoice_id}</ThemedText>
        </View>
        <View
          style={styles.cardFlexRow}>
          <ThemedText type = "default">Vencimiento</ThemedText>
          <ThemedText type = "default">{debt.due_date}</ThemedText>
        </View >
        <View style={styles.cardPay} >
            <View style={styles.cardFlexRow} >
             <ThemedText style={styles.textRed2}>Pago</ThemedText>
             <ThemedText style={styles.textRed2}>$ {debt.amount}</ThemedText>
            </View>
            <View style={styles.cardFlexRow} >
              <ThemedText style={styles.textRed2}>Impuestos</ThemedText>
              <ThemedText style={styles.textRed2}>$ 0.0</ThemedText>
            </View>
            <View style={styles.cardFlexRow} >
              <ThemedText type = 'subtitle' style={styles.textRed}>Total</ThemedText>
              <ThemedText type = 'subtitle' style={styles.textRed}>$ {debt.amount}</ThemedText>
            </View> 
        </View>
        <View>
          <Button
            mode="contained"
            buttonColor={ColorsBase.neutral800}
            onPress={()=> handlePayInvoice()}
            style={{borderRadius : 32}}
          >
            <ThemedText
                type='default'
                style={{ color: Colors.light.background }}
            >
                Pagar 
            </ThemedText>
          </Button>
        </View>
            </>
          ) : (
            <View style={styles.container}>
              <ActivityIndicator size='large' color='#00A599'></ActivityIndicator>
            </View>
          )
        }
       
       </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contentCard : {
    gap: 15,
  },
  cardId: {
    borderRadius : 10,
    borderWidth: 1,
    borderColor: ColorsBase.cyan400,
    backgroundColor: ColorsBase.cyan50, 
    padding: 10,
    color: ColorsBase.cyan400,
  },
  cardPay :{
    borderRadius : 10,
    borderWidth: 1,
    borderColor : ColorsBase.red400,
    backgroundColor : ColorsBase.red50,
    padding : 10
  } ,
  cardFlexRow: {
    flexDirection: 'row',
    justifyContent : "space-between"
  },
  textRed: {
    color : ColorsBase.red600
  },
  textRed2:{
    color : ColorsBase.red400
  },
  textBlack: {
    color: Colors.light.text
  },
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }
})
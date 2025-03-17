import HeaderApp from "@/components/dashboard/HeaderApp";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ColorsBase, Colors } from "@/constants/Colors";
import { useLocalSearchParams, Link, router } from "expo-router";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
export default function Route() {
  const { invoiceId } = useLocalSearchParams<{ invoiceId: string }>();
  const invocie =  {
    type: 'Agua',
    empresa: 'AySA',
    cliente_id: '88698235',
    status: 'Pendiente',
    due_date: '10/03/2025',
    amount: '19.800',
    invoice_id: "INV-20250310-AY002"
}
  return (
    <ScrollView style={{padding:15, flex:1}} contentContainerStyle={{justifyContent:"space-between"}}>
      <View style={styles.contentCard}> 
        <View style= {{flexDirection : 'row', gap : 10,alignItems : 'center'}}>
          <Link href={"/dashboard/home"} asChild>
            <MaterialCommunityIcons name="arrow-left" size={32} color="black" /> 
          </Link>
          <ThemedText type="title" style={{color : ColorsBase.cyan400}}>
            Factura 
          </ThemedText>
        </View>

        <View style= {{flexDirection : 'row',alignItems : 'flex-start', justifyContent : 'space-between'}}>
          <View>
            <ThemedText type="subtitle" style= {styles.textBlack}>{invocie.empresa}</ThemedText>
            <ThemedText style= {styles.textBlack}>Category</ThemedText>
          </View>
          <MaterialCommunityIcons name="newspaper-variant-outline" size={26} color="black" />
        </View>
        <View>
          <ThemedText style={styles.cardId}>N° Orden: {invocie.invoice_id}</ThemedText>
        </View>
        <View
          style={styles.cardFlexRow}>
          <ThemedText style= {styles.textBlack}>Vencimiento</ThemedText>
          <ThemedText style= {styles.textBlack}>{invocie.due_date}</ThemedText>
        </View >
        <View style={styles.cardPay} >
            <View style={styles.cardFlexRow} >
             <ThemedText style={styles.textRed2}>Pago</ThemedText>
             <ThemedText style={styles.textRed2}>$ {invocie.amount}</ThemedText>
            </View>
            <View style={styles.cardFlexRow} >
              <ThemedText style={styles.textRed2}>Impuestos</ThemedText>
              <ThemedText style={styles.textRed2}>$ 0.0</ThemedText>
            </View>
            <View style={styles.cardFlexRow} >
              <ThemedText type = 'defaultSemiBold' style={styles.textRed}>Total</ThemedText>
              <ThemedText type = 'defaultSemiBold' style={styles.textRed}>$ {invocie.amount}</ThemedText>
            </View> 
        </View>
        <View>
          <Button
            mode="contained"
            buttonColor={ColorsBase.cyan400}
            onPress={()=> router.push('/dashboard/home')}
          >
            Pagar 
          </Button>
        </View>
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentCard : {
    gap: 15
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
  }
})
function StatusSnack({type}:{type:"retarded"|"pending"|"payed"}){
  return(
    <View>

    </View>
  )
}
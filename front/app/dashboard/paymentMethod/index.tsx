import HeaderApp from "@/components/dashboard/HeaderApp";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {CardsClient} from '@/components/paymentMethod/CardCliente';
import { useState } from "react";
import {Card} from '@/types/types';
import {Button} from 'react-native-paper';
export default function NewPaymentMethod() {

  const [cardList, setCardList] = useState<Array<Card>>([])
  
  return (
    <View style={{ flex: 1, width: "100%", height: "100%", padding : 15}}>
      <View style={{ gap: 16, maxWidth:900 }}>
        <HeaderApp />
        <ThemedText type="subtitle">Métodos de Pago</ThemedText>
        <View style={styles.content}>
          <CardsClient cardList={cardList} />
          <Button mode="contained" buttonColor="#333333" onPress={()=>router.push("/dashboard/paymentMethod/add")} style={{borderRadius : 32}}>
              <View style={styles.btnAddCard}>
                <MaterialCommunityIcons name="plus" size={24} color="white"/>
                <ThemedText type= "default" style={{color : Colors.dark.text}}> Agregar nueva terjeta</ThemedText>
              </View>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    content:{
      flexDirection : "column",
    },
    btnAddCard:{
        flexDirection: "row",
        justifyContent : "center",
        alignItems: "center",
        gap:5,
    }
})

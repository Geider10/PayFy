import HeaderApp from "@/components/dashboard/HeaderApp";
import { ThemedText } from "@/components/ThemedText";
import {ThemedView} from '@/components/ThemedView';
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View, ScrollView} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {CardsClient} from '@/components/paymentMethod/CardCliente';
import { useState, useEffect } from "react";
import {Card} from '@/types/types';
import {Button} from 'react-native-paper';
import {apiGetCards} from '@/api/cards.service';
import {useAuthStore} from '@/hooks/useAuthStore';

export default function NewPaymentMethod() {
  const {user} = useAuthStore()
  const [cardList, setCardList] = useState<Array<Card>>([])
  
  const getCards = async () => {
    const {ok, data} = await apiGetCards()
    if(ok){
      const cardsUser = data.filter((c : Card) => c.userId === user._id)
      setCardList(cardsUser)
    }
  }

  useEffect(()=>{
    getCards()
  }, [])
  return (
    <ThemedView style={styles.content}>
      <View style={{gap : 16}}>
        <HeaderApp />
        <ThemedText type="subtitle">Métodos de Pago</ThemedText>
            <CardsClient cardList={cardList} />
            <Button mode="contained" buttonColor="#333333" onPress={()=>router.push("/dashboard/paymentMethod/add")} style={{borderRadius : 32}}>
                  <View style={styles.btnAddCard}>
                    <MaterialCommunityIcons name="plus" size={24} color="white"/>
                    <ThemedText type= "default" style={{color : Colors.dark.text}}> Agregar nueva terjeta</ThemedText>
                  </View>
            </Button>
      </View>               
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    content:{
      flex: 1,
      padding : 15, 
    },
    btnAddCard:{
        flexDirection: "row",
        justifyContent : "center",
        alignItems: "center",
        gap:5,
    }
})

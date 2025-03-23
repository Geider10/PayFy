import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ColorsBase, Colors } from "@/constants/Colors";
import { apiPostCards } from "@/api/cards.service";
import { useAuthStore } from "@/hooks/useAuthStore";
import { router } from "expo-router";
import LoadingScreen from "@/app/loading";
import {Button} from 'react-native-paper';
import {ThemedText} from '@/components/ThemedText';
export const CardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [identificationType, setIdentificationType] = useState("DNI");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [email, setEmail] = useState("");

  const[loading, setLoading] = useState(false);

  const {user, token} = useAuthStore();
  const handleCreateCard = async()=>{
    console.log('add card a DB');
    // setLoading(true);
    // console.log(token, user)
    // const {ok, data} = await apiPostCards({token:token!,userId:user.id! });
    // if(ok){
    //   setLoading(false);
    //   router.replace("/dashboard/paymentMethod/card-success")
    //   return;
    // }
    // console.log(data)
    // setLoading(false);

  }

  return (
    <View style={styles.container}>
        <Modal transparent={true} animationType="slide" visible={loading}>
          <LoadingScreen />
        </Modal>
      <Text style={styles.label}>Número de Tarjeta</Text>
      <TextInput 
        style={styles.input} 
        value={cardNumber} 
        onChangeText={setCardNumber} 
        keyboardType="numeric" 
        placeholder="•••• •••• •••• ••••" 
      />

      <View style={styles.row}>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>Fecha de Expiración</Text>
          <TextInput 
            style={styles.input} 
            value={expirationDate} 
            onChangeText={setExpirationDate} 
            placeholder="MM/YY" 
          />
        </View>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>Código de Seguridad</Text>
          <TextInput 
            style={styles.input} 
            value={securityCode} 
            onChangeText={setSecurityCode} 
            keyboardType="numeric" 
            placeholder="•••" 
          />
        </View>
      </View>

      <Text style={styles.label}>Nombre del Titular</Text>
      <TextInput 
        style={styles.input} 
        value={cardholderName} 
        onChangeText={setCardholderName} 
        placeholder="Nombre Completo" 
      />

      <Text style={styles.label}>Tipo de Documento</Text>
      <View style={styles.pickerContainer}>
        <Picker 
          selectedValue={identificationType} 
          onValueChange={setIdentificationType} 
          style={styles.picker}
        >
          <Picker.Item label="DNI" value="DNI" />
          <Picker.Item label="Pasaporte" value="PASSPORT" />
        </Picker>
      </View>

      <Text style={styles.label}>Número de Documento</Text>
      <TextInput 
        style={styles.input} 
        value={identificationNumber} 
        onChangeText={setIdentificationNumber} 
        keyboardType="numeric" 
        placeholder="12345678" 
      />

      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        placeholder="correo@ejemplo.com" 
      />

      <Button 
       mode = "contained"
       buttonColor={ColorsBase.neutral800} 
       onPress={handleCreateCard} 
       style={{borderRadius : 32}}>
        <ThemedText type="default" style={{color : Colors.dark.text}} > Agregar</ThemedText>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 400,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: ColorsBase.neutral600,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: ColorsBase.cyan400,
    outlineColor: ColorsBase.cyan400,
    marginBottom: 12,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInputContainer: {
    width: "48%",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "transparent",
    overflow: "hidden",
  },
  picker: {
    height: 50,
    borderColor: ColorsBase.cyan400,
    borderRadius:10,
    outlineColor: ColorsBase.cyan400
  }
});

export default CardForm;
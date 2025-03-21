import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import Notification from "@/components/Notification";
import {HeaderToBack} from '@/components/HeaderToBack';
import {RelativePathString} from 'expo-router';
// based on /(auth)/(dashboard)/(tabs)/notifications by GioPati

const data = [
  {
    title: "!Tu factura del gas esta por vencer",
    subtitle:
      "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
    time: "Hace 2 horas",
    status: "Pendiente",
  },
  {
    title: "!Tu factura del gas esta por vencer",
    subtitle:
      "Faltan 4 dias para el vencimiento de tu factura el monto de : $ 20.000",
    time: "Hace 2 horas",
    status: "Atrasado",
  },
];

const notifications = () => {
  const [selected, setSelected] = useState("Todos");
  return (
    <FlatList
      contentContainerStyle={{padding:15}}
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View>
          <HeaderToBack url={"./" as RelativePathString} title="Notificaciones"/>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              marginBottom : 20
            }}>
            <View style={styles.ButtonMarcarButtons}>
              {["Todos", "No leídos", "Leídos"].map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.filterLeidos,
                    selected === filter && styles.selectedButton,
                  ]}
                  onPress={() => setSelected(filter)}>
                  <ThemedText
                    style={
                      selected === filter ? styles.selectedText : styles.text
                    }>
                    {filter}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <FlatList
            data={data}
            style={{ gap: 10 }}
            renderItem={({ item }) => <Notification item={item} />}
          />
        </View>
      }
    />
  );
};

export default notifications;

const styles = StyleSheet.create({
  ButtonMarcar: {
    justifyContent: "center",
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
  filterLeidos: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: ColorsBase.cyan500,
  },
  ButtonMarcarButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  selectedButton: {
    backgroundColor: ColorsBase.cyan500,
  },
  text: {
    color: "black",
  },
  selectedText: {
    color: "white",
  },
});

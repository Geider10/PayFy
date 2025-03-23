import {StyleSheet, ScrollView } from "react-native";
import { CardForm } from "@/components/paymentMethod/CardForm";
import { ColorsBase } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";
import { HeaderToBack } from "@/components/HeaderToBack";

const addView = () => {
  return (
    <ThemedView style={styles.container}>
      <HeaderToBack url="./" title="Agregar Tarjeta"/>
      <CardForm />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  headerText: {
    color: "#080808",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default addView;

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { CardForm } from "@/components/paymentMethod/CardForm";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { ThemedView } from "@/components/ThemedView";

const addView = () => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{width:45, height:45}} onPress={() => router.back()}>
          <IconSymbol
            name="arrow.backward"
            size={24}
            color={ColorsBase.neutral800}
          />
        </TouchableOpacity>
        {/* <Link href = "/paymentMethod" > Back</Link> */}
      </View>
        <Text style={styles.headerText}> Registrar tarjeta</Text>
      <CardForm />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:45,
    flex: 1,
    alignItems: "center",
    padding: 20,
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

import SimpleButton from "@/components/auth/SimpleButton";
import { ThemedText } from "@/components/ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";

// LinearGradient code by GioPati... /components/AllCards

export default function CardSuccess() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: ColorsBase.cyan100,
      }}
    >
      <View
        style={{
          maxWidth: 900,
          height: "100%",
          maxHeight: 1000,
          justifyContent: "center",
          alignItems: "center",
          gap: 50,
        }}
      >
        <Icon source={"check-decagram-outline"} size={80} color={"#75C975"} />
        <ThemedText type="title">¡Tarjeta Vinculada!</ThemedText>
        <LinearGradient
          colors={["#0048b8", "#0072ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <Icon source={"check-decagram-outline"} size={30} color={"#75C975"} />
          <Text style={styles.title}>****4583 vinculada con éxito</Text>
          <View style={styles.dottedLine} />
          <View style={styles.footer}>
            <Image
              source={require("../../../assets/images/visa-blue-logo-19529.png")}
              style={styles.logo}
            />
          </View>
        </LinearGradient>
        <SimpleButton
            onPress={()=>router.replace("/dashboard/home")}
          style={{
            width: "90%",
            borderRadius: 32,
            backgroundColor: ColorsBase.neutral800,
          }}
        >
          <Text style={{color:ColorsBase.neutral50, fontSize:16, fontWeight:700}}>Finalizar</Text>
        </SimpleButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 180,
    maxHeight: 200,
    marginVertical: 10,
    flex: 1,
    borderRadius: 15,
    padding: 20,
    justifyContent: "space-between",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  dottedLine: {
    borderWidth: 0.5,
    borderColor: "white",
    borderStyle: "dotted",
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
});

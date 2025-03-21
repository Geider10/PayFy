import HeaderApp from "@/components/dashboard/HeaderApp";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function NewPaymentMethod() {
  return (
    <View style={{ flex: 1, width: "100%", height: "100%", padding: 15, backgroundColor:ColorsBase.cyan100 }}>
      <View style={{ paddingVertical: 25, gap: 16, maxWidth:900 }}>
            <TouchableOpacity style={{width:30, height:30}} onPress={() => router.back()}>
                <IconSymbol
                    name="arrow.backward"
                    size={24}
                    color={ColorsBase.neutral800}
                />
            </TouchableOpacity>
        <HeaderApp />
        <ThemedText type="subtitle">Agregar método de Pago</ThemedText>
        <ThemedText>Selecciona el metodo:</ThemedText>
        <TouchableOpacity style={styles.typeSelector} onPress={()=>router.push("/paymentMethod/add")}>
            <MaterialIcons name="credit-card" size={24} color={ColorsBase.cyan400}/>
            <View style={{gap:5}}>
                <ThemedText style={{fontSize:18, fontWeight:700}}>Tarjeta de Crédito/Débito</ThemedText>
                <ThemedText>Visa, Mastercard, AMEX</ThemedText>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    typeSelector:{
        flexDirection: "row",
        borderColor: ColorsBase.cyan400,
        borderWidth:1,
        borderRadius:24,
        padding:16,
        gap:12,
        backgroundColor: ColorsBase.neutral50
    }
})

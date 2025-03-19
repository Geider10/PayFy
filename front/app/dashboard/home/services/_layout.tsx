import { HeaderToBack } from "@/components/HeaderToBack";
import { ThemedView } from "@/components/ThemedView";
import { Slot } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import {RelativePathString} from 'expo-router';

export default function ServicesLayout() {
  return (
    <ThemedView style={{ padding: 15, gap:20 }}>
      <HeaderToBack url={"/dashboard/home" as RelativePathString} title={"Elegí tu proveedor"}/>
      <View style={{ maxWidth: 900, width: "100%", alignSelf:"center", height:"100%" }}>
        <Slot />
      </View>
    </ThemedView>
  );
}

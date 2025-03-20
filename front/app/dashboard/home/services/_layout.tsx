import { ThemedView } from "@/components/ThemedView";
import { Slot } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import {RelativePathString} from 'expo-router';

export default function ServicesLayout() {
  return (
    <ThemedView style={{ padding: 15}}>
      <View style={{ maxWidth: 900, width: "100%", alignSelf:"center", height:"100%" }}>
        <Slot />
      </View>
    </ThemedView>
  );
}

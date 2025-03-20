import SimpleButton from "@/components/auth/SimpleButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import UserProfileAvatar from "@/components/user/UserProfileAvatar";
import { ColorsBase,Colors } from "@/constants/Colors";
import { useAuthStore } from "@/hooks/useAuthStore";
import fontStyles from "@/styles/fontStyles";
import { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {apiGetUserData} from '@/api/user.service';
import {UserProf} from '@/types/types';
export default function UserProfile() {
  const { user ,startLogout} = useAuthStore()
  const [userData, setUserData] = useState<UserProf>()

  const getUser = async () =>{
    const {data} = await apiGetUserData(String(user._id))
    setUserData(data)
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <ThemedView style={baseStyle.viewContainer}>
      <UserProfileAvatar/>
      {userData ? (
          <View style={baseStyle.viewBody}>
          <View style={baseStyle.tableData}>
            <DataRow label="Nombre"  message={userData.userName}/>
            <DataRow label="Apellido" message={userData.userLastName} />
            <DataRow label="DNI" message={userData.userDNI} />
            <DataRow label="Email" message={userData.userEmail} />
          </View>
          <SimpleButton onPress={()=>startLogout()} style={baseStyle.closeButton}>
            <ThemedText
              style={[fontStyles.bold, { color: ColorsBase.neutral50 }]}
            >
              Cerrar Sesión
            </ThemedText>
            <IconSymbol
              name="arrow.right.square"
              color={ColorsBase.neutral50}
            ></IconSymbol>
          </SimpleButton>
        </View>
      ):(
        <ActivityIndicator size='large' color='#00A599'></ActivityIndicator>
      )}
    </ThemedView>
  );
}

function DataRow({ label, message }: { label: string; message: string }) {
  return (
    <View style={baseStyle.dataRow}>
      <ThemedText style={baseStyle.rowLabel}>{label}</ThemedText>
      <ThemedText lightColor={Colors.light.text}>{message}</ThemedText>
    </View>
  );
}
const baseStyle = StyleSheet.create({
  viewContainer: {
    width: "100%",
    height: "100%",
  },
  viewBody: {
    width: "100%",
    flex: 1,
    paddingTop: 40,
    maxWidth: 400,
    maxHeight: 1000,
    alignItems: "center",
  },
  tableData: {
    width: "100%",
    gap: 16,
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  rowLabel: {
    color: ColorsBase.neutral600,
  },
  closeButton: {
    width: "100%",
    backgroundColor: ColorsBase.red300,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    borderRadius : 32,
    marginTop : 20
  },
});

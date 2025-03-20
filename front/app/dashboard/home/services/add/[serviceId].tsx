import {
  AddService,
  apiAddService,
} from "@/api/providers.service";
import authStyles from "@/components/auth/authStyles";
import MyInputText from "@/components/auth/MyInputText";
import SimpleButton from "@/components/auth/SimpleButton";
import { ThemedText } from "@/components/ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useLocalSearchParams, RelativePathString, router} from "expo-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, Text, View , StyleSheet} from "react-native";
import { HeaderToBack } from "@/components/HeaderToBack";

export default function ServiceAdd() {
  const [textModal, setTextModal] = useState("");
  const [isOk, setIsOk] = useState(false)
  const { serviceId, servName } = useLocalSearchParams<{
    serviceId: string;
    servName: string;
  }>();
  const { user } = useAuthStore();
  const { control, handleSubmit, getValues} = useForm<AddService>();
  
  const serviceBody : AddService= {
    userId : user._id,
    serviceId : serviceId,
    clientId: getValues().clientId
  }
  const onHandleSubmit = async () => {
    setTextModal("");
    const {data, ok } = await apiAddService(serviceBody);
    setIsOk(ok)
    if (ok) {
      setTextModal("Servicio agregado exitosamente");
      setTimeout(()=>{
        router.push("/dashboard/home")
      },3000)
      return;
    }
    else {
      setTextModal( `${servName} ${data.message}`);
    }
  };
  return (
    <ScrollView
      style={{flex: 1 }}
    >
      <HeaderToBack url={"/dashboard/home/services" as RelativePathString} title={servName}/>
      <View style={styles.contentService}>
        <ThemedText type="defaultSemiBold" style={{paddingBottom: 10 }}>
          Número de cliente:
        </ThemedText>
        <MyInputText
          name="clientId"
          iconName="person.2"
          control={control}
          placeholder="Ej: 1122334455"
        />
        <SimpleButton
          onPress={handleSubmit(onHandleSubmit)}
          style={{
            marginVertical: 15,
            borderRadius: 32,
            backgroundColor: ColorsBase.neutral800,
          }}
        >
          <ThemedText style={{ color: ColorsBase.neutral50, fontWeight: 700 }}>
            Agregar Servicio
          </ThemedText>
        </SimpleButton>
        {isOk ?(
          <View style={styles.contentModal}>
            <ThemedText type="defaultSemiBold" style={{color : ColorsBase.cyan400}} >{textModal}</ThemedText>
          </View>
         
        ) : (
          <View style={styles.contentModal}>
            <ThemedText type="defaultSemiBold" style={{color : ColorsBase.red400}} >{textModal}</ThemedText>
         </View>
        )
        }
      </View>
    </ScrollView>
  );
}

function StatusSnack({ type }: { type: "retarded" | "pending" | "payed" }) {
  return <View></View>;
}

const styles = StyleSheet.create({
  contentService :{
    justifyContent : 'flex-end'
  },
  contentModal : {
    alignItems : 'center'
  }
})
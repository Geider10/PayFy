import React, { memo, useEffect, useState } from "react";
import { Colors, ColorsBase } from "@/constants/Colors";
import { FlatList, Modal, TouchableOpacity, View } from "react-native";
import { Button, Icon } from "react-native-paper";
import HeaderApp from "./HeaderApp";
import { ThemedText } from "../ThemedText";
import ServicesClient from "./ServicesClient";
import TotalPayment from "./TotalPayment";
import { IconSymbol } from "../ui/IconSymbol";
import LoadingScreen from "@/app/loading";
import { useAuthStore } from "@/hooks/useAuthStore";
import { apiGetUserDebts, apiGetUserServices } from "@/api/providers.service";
import { router } from "expo-router";
import DebtsClient from "./DebtsClient";
import {Debt} from '@/types/types';
// based on /components/BodyDashboard by GioPati
const BodyDashboard = () => {
  const [pressCards, setPressCards] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userServices, setUserServices] = useState([]);
  const [userDebts, setUserDebts] = useState<Array<Debt>>([])
  const { user,startLogout } = useAuthStore();

  const getServicesUser = async () => {
    setLoading(true);
    const { ok, data } = await apiGetUserServices(String(user._id));
    if (data.error) {
      startLogout();
      return;
    }
    if (ok) {
      setUserServices(data);
      setLoading(false);
      return;
    }
    setLoading(false);
  };
  const getDebtsUSer = async () => {
    const {data} = await apiGetUserDebts(String(user._id))
    setUserDebts(data)
  }
  useEffect(() => {
    getServicesUser();
    getDebtsUSer()
  }, []);

  if (loading) {
    return (
      <Modal transparent={true} animationType="slide" visible>
        <LoadingScreen />
      </Modal>
    );
  }

  return (
    <FlatList
      style={{ backgroundColor: ColorsBase.cyan100, paddingHorizontal: 15 }}
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={() => (
        <View style={{ paddingTop: 20, gap: 15, paddingBottom: 67 }}>
          <HeaderApp />
          <TotalPayment progress={0.5} />
        
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Button
              style={{
                width: "48%",
                borderColor: pressCards ? "transparent" : ColorsBase.cyan500,
              }}
              buttonColor={
                pressCards ? ColorsBase.cyan500 : Colors.light.background
              }
              textColor={
                pressCards ? Colors.light.background : ColorsBase.cyan500
              }
              onPress={() => {
                setPressCards(true);
              }}
              mode={pressCards ? "contained" : "outlined"}
            >
              <ThemedText
                type="default"
                style={{
                  color: pressCards
                    ? Colors.light.background
                    : ColorsBase.cyan500,
                }}
              >
                Servicios
              </ThemedText>
            </Button>
            <Button
              style={{
                width: "48%",
                borderColor: pressCards ? ColorsBase.cyan500 : "transparent",
              }}
              buttonColor={
                pressCards ? Colors.light.background : ColorsBase.cyan500
              }
              textColor={
                pressCards ? ColorsBase.cyan500 : Colors.light.background
              }
              mode="outlined"
              onPress={() => setPressCards(false)}
            >
              <ThemedText
                type="default"
                style={{
                  color: pressCards
                    ? ColorsBase.cyan500
                    : Colors.light.background,
                }}
              >
                Facturas
              </ThemedText>
            </Button>
          </View>
          {pressCards ? (
            <ServicesClient servicesList={userServices} />
          ) : (
            <DebtsClient debtsList={userDebts}/>
          )}
        </View>
      )}
    />
  );
};

export default memo(BodyDashboard);

import React, { memo, useEffect, useState } from "react";
import { Colors, ColorsBase } from "@/constants/Colors";
import { FlatList, Modal, TouchableOpacity, View } from "react-native";
import { Button, Icon } from "react-native-paper";
import HeaderApp from "./HeaderApp";
import { ThemedText } from "../ThemedText";
import ServicesClient from "./ServicesClient";
import AllCards from "./AllCards";
import TotalPayment from "./TotalPayment";
import { IconSymbol } from "../ui/IconSymbol";
import LoadingScreen from "@/app/loading";
import { useAuthStore } from "@/hooks/useAuthStore";
import { apiGetUserDebts, apiGetUserServices } from "@/api/providers.service";
import { router } from "expo-router";

// based on /components/BodyDashboard by GioPati
const BodyDashboard = () => {
  const [pressCards, setPressCards] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userServices, setUserServices] = useState([]);
  const { user,startLogout } = useAuthStore();

  const getUserData = async () => {
    // console.log(user.userName, user.userLastName, user.userEmail, user._id);
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

  useEffect(() => {
    getUserData();
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
          <TouchableOpacity
            onPress={() =>
              router.push("/dashboard/home/services/list")
            }
            style={{
              maxWidth: 200,
              borderColor: ColorsBase.cyan400,
              borderWidth: 0.5,
              borderRadius: 8,
              backgroundColor: "#ffffff",
              paddingVertical: 8,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  right: 5,
                }}
              >
                <IconSymbol
                  name="plus.app"
                  color={ColorsBase.cyan400}
                  size={20}
                  style={{ right: -5 }}
                />
                <IconSymbol
                  name="house.slash"
                  color={ColorsBase.cyan400}
                  size={30}
                />
              </View>
              <View>
                <ThemedText
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: ColorsBase.cyan400,
                  }}
                >
                  Agregar Servicio
                </ThemedText>
              </View>
            </View>
          </TouchableOpacity>
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
                Mis Tarjetas
              </ThemedText>
            </Button>
          </View>
          {pressCards ? (
            <ServicesClient servicesList={userServices} />
          ) : (
            <AllCards />
          )}
        </View>
      )}
    />
  );
};

export default memo(BodyDashboard);

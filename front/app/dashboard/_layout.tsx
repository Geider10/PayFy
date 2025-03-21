import { Colors, ColorsBase } from "@/constants/Colors";
import { memo, useEffect } from "react";
import { Modal, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useLastRouteSegment } from "@/hooks/useLastRouteSegment";
import { useAuthStore } from "@/hooks/useAuthStore";
import LoadingScreen from "../loading";
import { AUTH_STATUS } from "@/constants/enums/AuthStatus";

// Based on /auth/Dashboard code, by GioPati

const Dashboard = () => {
  const lastSegment = useLastRouteSegment();
  const theme = useColorScheme() ?? "light";
  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: lastSegment == "home" ? "#ccedeb" : "#ffffff",
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={status == AUTH_STATUS.checking}
      >
        <LoadingScreen />
      </Modal>
      <Tabs
        initialRouteName="home"
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: ColorsBase.cyan500,
          sceneStyle: {
            backgroundColor: "#ffffff",
          },
          tabBarIconStyle: { flex: 1 },
          tabBarStyle: styles.barStyles,
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            href: "/dashboard/home",
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon iconName="home-filled" isFocused={focused} />
            ),
          }}
        />
         <Tabs.Screen
          name="paymentMethod"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon iconName="add-card" isFocused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="payments-list"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon iconName="receipt-long" isFocused={focused} />
            ),
          }}
        />
       
        <Tabs.Screen
          name="user"
          options={{
            href: "/dashboard/user",
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon iconName="account-circle" isFocused={focused} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  barStyles: {
    borderRadius: 32,
    marginHorizontal: 8,
    marginBottom: 8,
    position: "absolute",
    backgroundColor: "#333333",
    justifyContent: "center",
    height: 64,
    alignItems: "center",
  },
});

const TabBarIcon = ({
  isFocused,
  iconName,
}: {
  isFocused: boolean;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
}) => {
  const scale = isFocused ? 1.2 : 1;
  return (
    <Animated.View
      style={{
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: isFocused ? ColorsBase.cyan500 : "transparent",
        justifyContent: "center",
        alignItems: "center",
        transform: [{ scale }],
      }}
    >
      <MaterialIcons
        name={iconName}
        size={30}
        color={isFocused ? Colors.light.background : Colors.light.background}
      />
    </Animated.View>
  );
};

export default memo(Dashboard);

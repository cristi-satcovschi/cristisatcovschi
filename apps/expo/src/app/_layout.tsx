import React from "react";
import { Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
// import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { DrawerActions } from "@react-navigation/native";

import { TRPCProvider } from "../utils/api";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <Drawer
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2C5282",
            },

            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },

            headerLeft: () => (
              <Button
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
                title="Info"
                color="#fff"
              />
            ),
            headerLeftContainerStyle: {
              padding: 14,
            },
          }}
        >
          <Drawer.Screen name="index" redirect={true} />
        </Drawer>
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

export default RootLayout;

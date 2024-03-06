import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { Pressable } from "react-native";
import HistoryScreen from "../../screens/History";

// can see full list of designers and icons here: https://iconssend.expo.fyi/Index
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EmptyComponent from "../EmptyComponent";
import {
  BottomDrawerContext,
  EBottomDrawerContent,
} from "../../store/context/bottom-drawer";

import WalletScreen from "@/screens/Wallet";
import SettingsScreen from "@/screens/Settings";
import SendScreen from "@/screens/Transact/Send";
import SwapScreen from "@/screens/Transact/Swap";
import BottomDrawer from "@/screens/BottomDrawer";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const bottomDrawerCtx = useContext(BottomDrawerContext);
  const { show } = bottomDrawerCtx;
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Wallet"
            component={WalletScreen}
            options={{
              tabBarIcon: () => (
                <Ionicons name="wallet" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={HistoryScreen}
            options={{
              tabBarIcon: () => (
                <MaterialIcons name="history" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Transact"
            component={EmptyComponent}
            options={{
              tabBarIcon: () => (
                <MaterialIcons name="swap-calls" size={24} color="black" />
              ),
              tabBarButton: (props) => (
                <Pressable
                  {...props}
                  onPress={() => {
                    show(EBottomDrawerContent.TRANSACT_DRAWER_OPTIONS);
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Connect"
            component={EmptyComponent}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="connection"
                  size={24}
                  color="black"
                />
              ),
              tabBarButton: (props) => (
                <Pressable
                  {...props}
                  onPress={() => {
                    show(EBottomDrawerContent.CONNECT);
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: () => (
                <Ionicons name="settings" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Send"
            component={SendScreen}
            options={{
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="Swap"
            component={SwapScreen}
            options={{
              tabBarButton: () => null,
            }}
          />
        </Tab.Navigator>
        <BottomDrawer />
      </NavigationContainer>
    </>
  );
};

export default Navigation;

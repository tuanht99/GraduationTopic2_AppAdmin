import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { Text, View } from "react-native";
const Tabs = createMaterialTopTabNavigator();
import Shipper from "../screens/ManagerUser/Shipper";
import  Storez  from "../screens/ManagerUser/Stores";
import KhachHang from "../screens/ManagerUser/KhachHang"

export default function TabNavigator() {
  return (
      <Tabs.Navigator
        initialRouteName="KH"
        independent={true}
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "yellow" },
        }}
      >
        <Tabs.Screen
          name="KH"
          component={KhachHang}
          options={{ tabBarLabel: "Khách Hàng" }}
        />
        <Tabs.Screen
          name="Stores"
          component={Storez}
          options={{ tabBarLabel: "Cửa Hàng" }}
        />
        <Tabs.Screen
          name="Shipper"
          component={Shipper}
          options={{ tabBarLabel: "Shipper" }}
        />
      </Tabs.Navigator>
  );
}

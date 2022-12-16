import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
// import { Shippers } from "../screens/Shipper";
import { DetailStore } from "../screens/DetailStore";
import Revenue from "../screens/Revenue"
import BottomTab from "./BottomTab";
import Manage from "../screens/ManagerUser/Manage";
import Detail from "../screens/ManagerUser/Detail";
import DetailShipper from "../screens/ManagerUser/DetailShipper";
import DetailStores from "../screens/ManagerUser/DetailStore";

import DetailCCCD from "../screens/ManagerUser/DetailCCCD"
import CouponAdd from "../screens/Vourcher/Coupon";
import CarView from "../screens/ManagerUser/Xe"
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ManageUsers" component={Manage} />
        <Stack.Screen name="DetailStore" component={DetailStore} />
        <Stack.Screen name="Revenue" component={Revenue} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="DetailShipper" component={DetailShipper} />
        <Stack.Screen name="DetailStores" component={DetailStores} />

        <Stack.Screen name="DetailCCCD" component={DetailCCCD} />
        <Stack.Screen name="Coupon" component={CouponAdd} />
        <Stack.Screen name="Xe" component={CarView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

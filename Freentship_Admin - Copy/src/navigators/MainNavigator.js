import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import ManagerAdminView from "../screens/ManagerAdminView";
import InforUserView from "../screens/InforUserView";
import LoginView from "../screens/Login/LoginView";
const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="ManagerAdminView"
          component={ManagerAdminView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-multiple-outline"
                color={color}
                size={size}
              />
            ),
            tabBarOptions: { showLabel: false },
          }}
        />
        <Tab.Screen
          name="InforUser"
          component={InforUserView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shield-account-outline"
                color={color}
                size={size}
              />
            ),
            tabBarOptions: { showLabel: false },
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginView}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shield-account-outline"
                color={color}
                size={size}
              />
            ),
            tabBarOptions: { showLabel: false },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


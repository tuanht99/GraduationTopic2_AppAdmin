import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
import { Home } from "../screen/Home";
import { Shippers } from "../screen/Shipper";
import { Stores } from "../screen/Stores";
import Notification from "../screen/Notiification/Notification";

export default function BottomTab() {
  return (
    <Tab.Navigator 
      labeled={false}
      barStyle={{ backgroundColor: "#E94730" }}
      activeColor="white"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home} //Home Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={Stores}
        // Notification Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Shippers"
        component={Shippers} // Search Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="human-greeting"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification} // Search Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="circle-notifications"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

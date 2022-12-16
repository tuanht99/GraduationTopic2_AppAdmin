import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TabNavigator from "./TabNavigator";
const Tab = createMaterialBottomTabNavigator();
import Home from "../screens/Home/Home";
// import { Shippers } from "../screens/Shipper";
import Shipper from "../screens/ManagerUser/Shipper";
import Storez from "../screens/ManagerUser/Stores";
import KhachHang from "../screens/ManagerUser/KhachHang"
import { Stores } from "../screens/Stores";
import Coupons from "../screens/Vourcher/Coupons";
import ManagerAdminView from "../screens/Vourcher/ManagerAdminView";
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
        name="ManagerUser"
        component={ManagerAdminView} // Search Screen
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
        name="Coupons"
        component={Coupons} // Search Screen
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

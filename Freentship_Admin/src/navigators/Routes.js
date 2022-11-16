import { StyleSheet, Text, View } from 'react-native'
// Screens


import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginView from '../screens/Login/LoginView';
import { ConfirmOTP } from '../screens/Login/ConfirmOTPView'
import ManagerAdmin from '../screens/ManagerAdminView'
export default function Router() {
const Stack = createNativeStackNavigator()

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{
              // hidden navbar
              headerShown: false,
            }}
            component={LoginView}
          />
         <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} />
         <Stack.Screen 
            options={{
              // hidden navbar
              headerShown: false,
            }} name="Home" component={ManagerAdmin} />
        </Stack.Navigator>
      </NavigationContainer>
     
    );
  }
  

const styles = StyleSheet.create({})
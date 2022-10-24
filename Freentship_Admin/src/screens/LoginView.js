import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import  { useState } from 'react';

export default function LoginView({navigation}) {
  const txtPhone = 'Nhập số điện thoại của bạn ở đây';
  const txtWelcome = 'Chào mừng bạn đến với Freen’tship Admin'
  const txtInputPhone = 'Nhập số điện thoại của bạn để tiếp tục';
  const txtLogin = 'Đăng nhập';
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={ThemeRegister.container}>
    <View style={ThemeRegister.logoContainer}>
    <Image  source={require("../../assets/FreentShipAdmin.png")}></Image>
    </View>

    <View style={ThemeRegister.guildTextContainer}>
      <Text style={ThemeRegister.txtWelcome}>{txtWelcome} {'\n'}</Text>
      <Text style={ThemeRegister.txtPhone}>{txtInputPhone}</Text>
    </View>

    <View style={ThemeRegister.inputTextContainer}>
      <TextInput
        style={ThemeRegister.tipPhone}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={txtPhone}
        keyboardType="numeric"
      />
    </View>

    <View style={ThemeRegister.btnContainer}>
      <TouchableOpacity
        style={ThemeRegister.btnLogin}
        onPress={() => navigation.navigate('OTPVerification')}>
        <Text style={ThemeRegister.txtLogin}>{txtLogin}</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

const ThemeRegister = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
    flex: 1,
  },

  logoContainer: {
    flex: 2,
  color:'red',
  },
  logo: {
    textAlign: 'center',
    color: '#E94730',
    fontWeight: 'bold',
    fontSize: 40,
  },

  guildTextContainer: {
    flex: 2,
  },
  txtWelcome: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#E94730',
  },
  txtPhone: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#212121',
  },

  inputTextContainer: {
    flex: 2,
    paddingTop:30
  },
  tipPhone: {
    paddingVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    borderColor: '#E94730',
    borderWidth: 1,
    borderRadius: 10,
  },


  btnContainer: {
    flex: 10,
  },
  btnLogin: {
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#E94730',
    width: 300,
  },
  txtLogin: {
    color: 'white',
    textAlign: 'center',
  }
})
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Image,
  } from "react-native";
  import React from "react";
  import { useWindowDimensions } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { TextInput } from "react-native";
  import { useState, useEffect } from "react";
  import Header from "../../components/Layout/components/Header";
  import TabNavigator from "../../navigation/TabNavigator";
  
  
  
  
  // data flatList
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Hoà Phát Diên",
      status: 1,
      citizen_id: 1,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Ánh Sáng Đêm Sương Mù",
      status: 2,
      citizen_id: 2,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Dữ liệu thô",
      status: 1,
      citizen_id: 3,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Dữ liệu thô",
      status: 1,
      citizen_id: 3,
    },
    
  ];
  
  // end flatList
  // ******************************************************************************************************************
  export default function ManagerAdminView({ navigation }) {
  // ****************************************************************************************************************
  
  
  
  
  
  
  
  // định nghĩa
  
  // firebase User
  
    return (
      <SafeAreaView style={styles.container}>
        
        <Header/>
        {/*end  */}
        {/* tabview */}
        <View style={styles.Content}>
      
          <TabNavigator/>
        </View>
       
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Tittle: {
      fontSize: 30,
      fontStyle: "italic",
      color: "white",
      // fontFamily: 'Inter',
      fontWeight: "bold",
    },
    Logo: {
      justifyContent: "center",
  
      alignContent: "center",
      color: "white",
    },
  
    Header: {
      flex: 1.5,
      backgroundColor: "orange",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    Content: {
      flex: 8,
    },
    Navigator: {
      flex: 1,
      backgroundColor: "yellow",
    },
  });
  
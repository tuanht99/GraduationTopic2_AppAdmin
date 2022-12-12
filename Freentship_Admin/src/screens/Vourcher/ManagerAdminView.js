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

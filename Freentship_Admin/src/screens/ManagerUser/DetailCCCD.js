import { StyleSheet, Text, View, ScrollView, Image,SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function DetailCCCD({ navigation, route }) {
  const { CCCD,Centizen } = route.params;
  console.log(Centizen);
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>
       Mặt Trước Căn Cước Công Dân :
      </Text>
      <Image style={styles.Image} source={{uri:CCCD.truoc}}></Image>
      
      <Text style={styles.text}>
       Mặt Sau Căn Cước Công Dân :
      </Text>
      <Image  style={styles.Image} source={{uri:CCCD.sau}}></Image>
      <Text style={styles.text}>
      Thông tin CCCD trên giấy tờ:



      </Text>
      <Text style={styles.texts}>
      {Centizen}
      
      </Text>
    </ScrollView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
scrollView: {
  
},
text: {
  fontSize: 20,
  marginHorizontal: 20,

},
Image: {
  height: 300,
  width: 400,
},
texts: {
  fontSize: 40,
  marginHorizontal: 20,
  marginLeft: 100,
  marginTop: 10,
},
});


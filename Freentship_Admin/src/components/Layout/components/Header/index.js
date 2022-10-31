import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 150,
          height : 100,
          resizeMode: "contain",
          position: "absolute",
          top: 0,
          left : 30
        }}
        source={require("../../../../assets/logo/app-admin-red.png")}
      />
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: windowWidth,
    height: 70,
    backgroundColor: "#E94730",
  },
});

import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";
import { BottomNavigation } from "react-native-paper";

export default function Detail({ navigation, route }) {
  const { id } = route.params;
  console.log(id);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image/>

      </View>
      <View style={styles.content}>
        <Text>avsx</Text>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 4,
  },
  content: {
    flex: 10,
  },

  bottom: {
    flex: 2,
  },
});

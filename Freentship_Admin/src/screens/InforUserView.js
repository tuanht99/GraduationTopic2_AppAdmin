import { StyleSheet, Text, View ,SafeAreaView,Image} from "react-native";
import React from "react";

export default function InforUser({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View>
          <Image
            style={styles.Logo}
            source={require("../../assets/Logo-Admin.png")}
          ></Image>
        </View>
      </View>
     <View style={styles.Content}>
     <Text>InforUser</Text>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

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
});

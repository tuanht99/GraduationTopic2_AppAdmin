import 'expo-dev-client';
import { StyleSheet } from "react-native";
import Navigation from "./src/navigation";

export default function App() {
  return (
   <Navigation/>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: 10,
  //   margin: 0,
  // },
  // scrollText: {
  //   fontSize: 19,
  //   textAlign: "center",
  //   padding: 20,
  //   color: "#000",
  // },
});

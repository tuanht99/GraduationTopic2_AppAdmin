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
import { TabView, SceneMap } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useState, useEffect } from "react";
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
];

// end flatList

// dữ liệu flatList
const Item = ({ item }) => (
  
  <View style={styles.item}>
    <View style={{ marginBottom: 20, backgroundColor: "#fff" }}>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 20 }}>{item.title}</Text>
        </View>
        <View style={{ flex: 1 }}>
          {item.status === 1 ? (
            <Text
              style={{
                fontSize: 20,

                color: "#90EE90",
                fontWeight: "bold",
              }}
            >
              Active
            </Text>
          ) : null}
          {item.citizen_id === 2 ? (
            <Text
              style={{
                fontSize: 20,
                justifyContent: "center",
                color: "#DC143C",
              }}
            >
              Block
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  </View>
);
const renderItem = ({ item }) => (
  <View>
    <Item item={item} />
  </View>
);
//   end flatList

// view 1
const FirstRoute = (textInputValue) => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    {/* view input */}
    <View style={{ flex: 1, backgroundColor: "White", margin: 10 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          placeholderTextColor: "gray",
          fontWeight: "bold",
          margin: 10,
        }}
        onChangeText={(text) => setTextInputValue(text)}
        value={textInputValue}
        placeholder="Nhập tên Tài Khoản!"
      />
    </View>
    {/* end view input */}
    {/* View platlist */}
    <View style={{ backgroundColor: "#90EE90", flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 3 }}>
        <Text
          style={{
            fontSize: 20,
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          UserName:
        </Text>
      </View>
      <View style={{ flex: 1.5, padding: 10 }}>
        <Text style={{ fontSize: 20 }}>Trạng Thái:</Text>
      </View>
    </View>

    <View style={{ flex: 9, margin: 10 }}>
      <FlatList
        style={{ padding: 10 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>

  </View>
);
// end view 1

// view 2
const SecondRoute = (textInputValue) => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    {/* view input */}
    <View style={{ flex: 1, backgroundColor: "White", margin: 10 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          placeholderTextColor: "gray",
          fontWeight: "bold",
          margin: 10,
        }}
        onChangeText={(text) => setTextInputValue(text)}
        value={textInputValue}
        placeholder="Nhập tên Tài Khoản!"
      />
    </View>
    {/* end view input */}
    {/* View platlist */}
    <View style={{ backgroundColor: "#90EE90", flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 3 }}>
        <Text
          style={{
            fontSize: 20,
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          UserName:
        </Text>
      </View>
      <View style={{ flex: 1.5, padding: 10 }}>
        <Text style={{ fontSize: 20 }}>Trạng Thái:</Text>
      </View>
    </View>

    <View style={{ flex: 9, margin: 10 }}>
      <FlatList
        style={{ padding: 10 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>

  </View>
);
// end view 2

// View 3
const SanRoute = (textInputValue) => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    {/* view input */}
    <View style={{ flex: 1, backgroundColor: "White", margin: 10 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          placeholderTextColor: "gray",
          fontWeight: "bold",
          margin: 10,
        }}
        onChangeText={(text) => setTextInputValue(text)}
        value={textInputValue}
        placeholder="Nhập tên Tài Khoản!"
      />
    </View>
    {/* end view input */}
    {/* View platlist */}
    <View style={{ backgroundColor: "#90EE90", flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 3 }}>
        <Text
          style={{
            fontSize: 20,
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          UserName:
        </Text>
      </View>
      <View style={{ flex: 1.5, padding: 10 }}>
        <Text style={{ fontSize: 20 }}>Trạng Thái:</Text>
      </View>
    </View>

    <View style={{ flex: 9, margin: 10 }}>
      <FlatList
        style={{ padding: 10 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>

  </View>
);
// end view 3
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  san : SanRoute
});
export default function ManagerAdminView({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const [textInputValue, setTextInputValue] = React.useState("");

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Người dùng" },
    { key: "second", title: "Cửa Hàng" },
    { key: "san", title: "Shipper" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.Header}>
        <View>
          <Image
            style={styles.Logo}
            source={require("../../assets/Logo-Admin.png")}
          ></Image>
        </View>
      </View>
      {/*end  */}
      {/* tabview */}
      <View style={styles.Content}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
      {/* end tabview */}

      {/* view Navigator */}
     {/* end Navigator */}
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

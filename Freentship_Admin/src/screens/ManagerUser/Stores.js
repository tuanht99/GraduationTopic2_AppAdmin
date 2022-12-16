import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { GetAllUserStore } from "../../services";
import { useState, useEffect } from "react";
import { TextInput } from "react-native";

export default function Shipper({ navigation }) {
  const [textInputValue, setTextInputValue] = React.useState("");

  const [ListUser, setList] = useState([]);
  const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    GetAllUserStore()
      .then((data) => {
        setList(data);
        setMasterData(data);
      })
      .catch((err) => console.log("error =>", err));
  }, []);

  const searchFitter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        console.log(item.phone);
        const itemData = item.phone;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setList(newData);
      setTextInputValue(text);
    } else {
      setList(masterData);
      setTextInputValue(text);
    }
  };

  const Item = ({ item }) => (
    <View>
      <View style={{ marginBottom: 20, backgroundColor: "#fff" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("DetailStores", { id: item.id })}
          style={{ flexDirection: "row" }}
        >
          <View style={{ flex: 3 }}>
            <Text style={{ fontSize: 20 }}>{item.phone}</Text>
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
                hoạt động
              </Text>
            ) : item.status === 2 ? (
              <Text
                style={{
                  fontSize: 20,
                  justifyContent: "center",
                  color: "#DC143C",
                }}
              >
                đã khóa
              </Text>
            ) : <Text
              style={{
                fontSize: 20,
                justifyContent: "center",
                color: "#DC143C",
              }}
            >
              chưa đăng kí kinh doanh
            </Text>}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
  // renderItem 1
  const renderItem = ({ item }) => (
    <View>
      <Item item={item} />
    </View>
  );
  return (
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
          onChangeText={(text) => searchFitter(text)}
          value={textInputValue}
          underlineColorAndroid="transparent"
          placeholder="Nhập tên Tài Khoản!"
        />
      </View>
      {/* end view input */}
      {/* View platlist */}
      <View
        style={{ backgroundColor: "#90EE90", flex: 1, flexDirection: "row" }}
      >
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
          data={ListUser}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
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

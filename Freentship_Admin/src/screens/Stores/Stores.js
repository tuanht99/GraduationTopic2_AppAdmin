import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../../components/Layout/components/Header";
import { GetStores } from "../../services";

const Stores = ({ navigation }) => {
  const [stores, setStores] = useState([]);
 
  useEffect(() => {
    GetStores()
      .then((data) => {
        setStores(data);
      })
      .catch((err) => console.log("error =>", err));
  }, []);

  return (
    <View>
      <Header />
      <View>
        <Text style={styles.textTitle}>DANH SACH CUA HANG</Text>
      </View>
      <FlatList
        data={stores}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("DetailStore" , {id : item.id})}
      
            >
              <View
                style={{
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: 90,
                    width: 90,
                    borderRadius: 15,
                    overflow: "hidden",
                    resizeMode: "contain",
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>

              <View style={{ flexDirection: "column", flex: 4 }}>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  {item.name}
                </Text>

                <Text numberOfLines={2}>{item.address}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Stores;

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 5,
    marginLeft: 20,
  },
});

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import call from "react-native-phone-call";
import { Entypo } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import formatCash from "../../components/FormatCash";
import { GetDetailStore, GetAllOrder } from "../../services";

function DetailStore({ navigation, route }) {
  const { id } = route.params;
  const [store, setStore] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [amountPaidToAdmin, setAmountPaidToAdmin] = useState(0);

  console.log("order", orderSuccess);
  // console.log("orderByDate", orderByDate);
  useEffect(() => {
    GetDetailStore(id)
      .then((data) => {
        GetAllOrder(id).then((data) => {
          setOrder(data);
        });
        setStore(data);
      })
      .catch((err) => console.log("error =>", err));
  }, []);

  useEffect(() => {
    if (order.length > 0) {
      setOrderSuccess([]);
      order.map((i) => {
        if (i.status === 5) {
          setOrderSuccess((prev) => [...prev, i]);
        }
      });
    }
  }, [order]);
  useEffect(() => {
    const a = orderSuccess.map((i) => i.total_food);
    setTotalPrice(a);
  }, [orderSuccess]);

  useEffect(() => {
    if (totalPrice.length > 0) {
      setTotalRevenue(totalPrice.reduce(myFunc));
      setAmountPaidToAdmin((totalPrice.reduce(myFunc) * 20) / 100);
    }
  }, [totalPrice]);

  function myFunc(total, num) {
    return total + num;
  }
  const StoreInfo = ({ store }) => (
    <View key={id}>
      {/* {console.log("totalPrice", new Date(store.created.seconds*1000 + store.created.nanoseconds / 1000000))} */}
      <View>
        <Image
          style={styles.imgStore}
          source={{
            uri: store.image,
            width: windowWidth,
            height: windowHeight / 4,
          }}
        />
        <TouchableOpacity
          style={{ position: "absolute", bottom: 5, right: 0, flex: 1 }}
        >
          <Text
            style={{
              backgroundColor: "#fff",
              padding: 5,
              fontSize: 16,
              color: "#E94730",
              borderRadius: 10,
            }}
          >
            Đi đến cửa hàng
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoStore}>
        <Text style={styles.nameStore}>{store.name}</Text>
        <Text style={styles.phoneStore}>{store.address}</Text>
        {/* <Text style={styles.phoneStore}>{store.created.toDate()}</Text> */}
        <Text style={styles.phoneStore}>
          Ngày bán hàng :{" "}
          {new Date(store.created.seconds * 1000).toLocaleString()}
        </Text>
        <View style={styles.viewPhone}>
          <Text style={styles.phoneStore}>Phone : {store.phone}</Text>

          <TouchableOpacity
            style={[styles.phoneCallBtn, styles.phoneStore]}
            onPress={() => call({ number: store.phone + "", prompt: false })}
          >
            <Entypo
              name="phone"
              size={20}
              color="#fff"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.textCall}>gọi ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const initialLayout = { width: Dimensions.get("window").width };

  return store.map((store, index) => {
    return (
      <View key={index}>
        <StoreInfo store={store} />
        <Text style={[styles.phoneStore, styles.infoStore]}>
          Tổng đơn hàng đã bán : {} đơn hàng
        </Text>
        <Text style={[styles.phoneStore, styles.infoStore]}>
          Tổng doanh thu : {formatCash(totalRevenue + "")} vnd
        </Text>

        <Text style={[styles.phoneStore, styles.infoStore]}>
          Tiền mà cửa hàng phải trả : {formatCash(amountPaidToAdmin + "")} vnd
        </Text>

        <TouchableOpacity
          style={styles.btnRevenueByDate}
          onPress={() => navigation.navigate("Revenue", { orderInfo: order })}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", marginRight: 20 }}>
            Xem doanh thu theo ngày
          </Text>
          <FontAwesome5 name="chevron-circle-right" size={21} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  });
}
export default DetailStore;

const styles = StyleSheet.create({
  imgStore: {
    resizeMode: "cover",
  },
  infoStore: {
    marginHorizontal: 20,
  },
  nameStore: {
    fontSize: 22,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  phoneStore: {
    fontSize: 17,
    marginRight: 20,
    marginBottom: 10
  },
  viewPhone: {
    flexDirection: "row",
  },
  textCall: {
    fontSize: 13,
    color: "#fff",
  },
  phoneCallBtn: {
    flexDirection: "row",
    backgroundColor: "#E94730",
    borderRadius: 10,
    padding: 3,
  },
  btnRevenueByDate: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00CCFF",
    width: "auto",
    borderRadius: 20,
    marginHorizontal: 50,
    height: 40,
    marginTop: 50,
  },
});

import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import formatCash from "../../components/FormatCash";
import { TextInput } from "react-native-paper";

function Revenue({ route }) {
  const { order } = route.params;
  const [orderByDate, setOrderByDate] = useState([]);
  const [totalRevenueByDate, setTotalRevenueByDate] = useState(0);
  const [dateValueStart, setDateValueStart] = useState("2022-11-06");
  const [dateValueEnd, setDateValueEnd] = useState("2022-11-07");

  // get total amount from date to date...
  const getOrderByDate = () => {
    const start = new Date(dateValueStart + "T00:00:00.000Z");
    const end = new Date(dateValueEnd + "T23:59:59.000Z");
    const secondsStart = Math.round(start.getTime() / 1000);
    const secondsEnd = Math.round(end.getTime() / 1000);

    if (order.length > 0) {
      setOrderByDate([]);
      order.map((i) => {
        if (i.orderDate >= secondsStart && i.orderDate <= secondsEnd) {
          setOrderByDate((prev) => [...prev, i.total_food]);
        }
      });
    }
  };

  useEffect(() => {
    getOrderByDate();
  }, [dateValueStart, dateValueEnd]);

  useEffect(() => {
    if (orderByDate.length > 0) {
      console.log("dasdasd");
      setTotalRevenueByDate(orderByDate.reduce(myFunc));
    } else if (orderByDate.length == []) {
      setTotalRevenueByDate(0);
    }
  }, [orderByDate]);

  function myFunc(total, num) {
    return total + num;
  }

  return (
    <View style = {{margin : 20}}>
      <View style={styles.inputView}>
        <Text style={styles.lable}>Từ ngày : </Text>
        <TextInput
          style={styles.input}
          onChangeText={setDateValueStart}
          value={dateValueStart}
          placeholder="dd-mm-yyyy"
          keyboardType="numeric"
          cursorColor = "red"
        ></TextInput>
      </View>

      <View style={styles.inputView}>
        <Text style={styles.lable}>Đến ngày : </Text>
        <TextInput
          style={styles.input}
          onChangeText={setDateValueEnd}
          value={dateValueEnd}
          placeholder="dd-mm-yyyy"
          keyboardType="numeric"
          cursorColor = "red"
        ></TextInput>
      </View>
      <Text style = {{fontWeight: "bold", fontSize: 16}}>Số tiền  bán được :  {formatCash(totalRevenueByDate + '')} vnd </Text>
      <Text style = {{fontWeight: "bold", fontSize: 16}}>Số đơn hàng bán được :  {orderByDate.length} đơn </Text>
    </View>
  );
}
export default Revenue;

const styles = StyleSheet.create({
  inputView: { flexDirection: "row", alignItems: "center" },
  lable: { fontWeight: "bold", fontSize: 16, flex : 1 },
  input: {
    flex : 3 ,
    height: 20,
    margin: 12,
    boderRadius: 10 ,
    borderColor: "red",
    backgroundColor: "#fff",
    padding: 10,
  },
});

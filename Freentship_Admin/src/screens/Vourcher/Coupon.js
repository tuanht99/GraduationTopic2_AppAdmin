import { View, Text,SafeAreaView,ScrollView ,TouchableOpacity,
  Alert
} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { addVourcher } from "../../services";

function CouponAdd ({navigation,route}) {
  const [Ten, setTen] = useState("");
  const [Gia, setGia] = useState();
  const [Mota, setMota] = useState("")
  console.log(Ten);
  console.log(Mota);
  console.log(Gia);
  
  return (
  <SafeAreaView>
    <ScrollView >
      {/* image */}
    
      <View style={{paddingBottom: 10}}></View>

      {/* ten vourcher */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={{marginLeft: 10, marginRight: 10}}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Tên vourcher</Text>
          </View>

          <View>
            {/* // */}
            <View style={{ marginRight: 10 }}>
              <TextInput
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: "#E94730",
                  borderRadius: 5,
                }}
                placeholder={'Tên Coupon '}
                onChangeText={(Ten) => setTen(Ten)}
                value={Ten}
              ></TextInput>
            </View>
          </View>
        </View>
      </View>

      {/* Gia vourcher */}
     

      {/* Giá */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={{marginLeft: 10, marginRight: 10}}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Giá bán</Text>
          </View>

          <View>
            {/* // */}
            <View style={{ marginRight: 10 }}>
              <TextInput
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: "#E94730",
                  borderRadius: 5,
                }}
                keyboardType='numeric'
                placeholder={'25.000'}
                onChangeText={(Gia) => {setGia(Gia);
             
                }}
                value={Gia}
                
              ></TextInput>
              {/* <Text style={{color: 'red', fontSize: 10, paddingLeft: 10}}>
                {isFoodPrice? "" : "Gia k đc để trống 👍"}
              </Text> */}
            </View>
          </View>
        </View>
      </View>

      {/* Mô tả */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <View style={{marginLeft: 10, marginRight: 10}}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Mô tả (nếu có)</Text>
          </View>

          <View>
            {/* // */}
            <View style={{ marginRight: 10 }}>
              <TextInput
                style={{
                  height: 50,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: "#E94730",
                  borderRadius: 5,
                }}
                placeholder={'Áp dụng '}
                onChangeText={(Mota) => {setMota(Mota)}}
                value={Mota}
              ></TextInput>
            </View>
          </View>
        </View>
      </View>          

    </ScrollView>
    <View style={{ flex: 0.15 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
          width: "100%",
          borderTopColor: "#808080",
          borderTopWidth: 0.3,

          bottom: 0,
        }}
      >
  
        <View style={{marginLeft: 10, marginRight: 10}}>
          <TouchableOpacity 
              onPress={()=>addVourcher(Ten,Gia,Mota)}
              style={{
              backgroundColor: "#E94730",
              borderRadius: 15,
              width: "97%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text style={{color: "#fff",}}>Thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
</SafeAreaView> 
  )
}

export default CouponAdd
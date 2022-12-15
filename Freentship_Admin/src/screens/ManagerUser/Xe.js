import { View, Text,TouchableOpacity } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { addVehicleNumber } from "../../services";

const countries = [
  "Raider",
  "Air Blade",
  "cup",
  "Sirius",
  "SH",
  "Satria",
  "Sonic",
  "wave",
  "SH MODE",
  "VetBar",
  "Novour",
  "Winner",
  "Exciter",
 
];

export default function Xe({ navigation,route}) {
	const { id } = route.params;

	const [vehicleNumber, setvehicleNumber] = useState("");
	const [bienSo, setbienSo] = useState()

console.log(bienSo);
console.log(id);

  return (
    <SafeAreaView style={{ flex: 1,}}>
		
      <View style={{flexDirection:"row"}}>
	  <Text style={{margin:10}}>Nhập loại xe:</Text>
	  <SelectDropdown
	   style={{ }}
	   dropdownBackgroundColor={"red"}
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
		  if (vehicleNumber != undefined ){
			setbienSo(selectedItem+"-"+ vehicleNumber)
		  }
		  
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
	  </View>
	  <View >
		<Text style={{margin:10}}>Nhập biển số xe:</Text>
		<TextInput
                style={{
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderColor: "#E94730",
                  borderRadius: 5,
                }}
                placeholder={'Biển số xe '}
                onChangeText={(vehicleNumber) => setvehicleNumber(vehicleNumber)}
                value={vehicleNumber}
              ></TextInput>
			   <View style={{marginLeft: 10, marginRight: 10}}>
          <TouchableOpacity
              onPress={()=> addVehicleNumber(id,bienSo)}
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
    </SafeAreaView>
  );
}

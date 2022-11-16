import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useState, useRef, useEffect } from "react";
import PhoneInput from "react-native-phone-number-input";
// firebase import
import { db } from "../../services/config";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { async } from "@firebase/util";

export default function LoginView({ navigation }) {
  const txtPhone = "Nhập số điện thoại của bạn ở đây";
  const txtWelcome = "Chào mừng bạn đến với Freen’tship Admin";
  const txtInputPhone = "Nhập số điện thoại của bạn để tiếp tục";
  const txtLogin = "Đăng nhập";
  const [number, onChangeNumber] = React.useState(null);
  const [value, setValue] = useState(0);
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  // firebase
  const [User, setUser] = useState([]);

  const Data = async () => {
    const querySnapshot = await getDocs(collection(db, "admin"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUser(doc.data())
    })
  }; 
  useEffect(() => {
    Data();
  }, [value]);

  // console.log("dât :" +checkValid);

  console.log("tai khoan: " + User.phone);
  console.log(value);
  return (
    <SafeAreaView style={ThemeRegister.container}>
      <View style={ThemeRegister.logoContainer}>
        <Image source={require("../../../assets/FreentShipAdmin.png")}></Image>
      </View>

      <View style={ThemeRegister.guildTextContainer}>
        <Text style={ThemeRegister.txtWelcome}>
          {txtWelcome} {"\n"}
        </Text>
        <Text style={ThemeRegister.txtPhone}>{txtInputPhone}</Text>
      </View>

      <SafeAreaView style={styles.wrapper}>
        {showMessage && (
          <View style={styles.message}>
            <Text>Sai Quyền truy cập</Text>
            <Text>Vui lòng nhập đúng số điện thoại admin</Text>
          </View>
        )}
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="VN"
          layout="first"
          onChangeText={setValue}
          onChangeFormattedText={setFormattedValue}
          withDarkTheme
          withShadow
          autoFocus
          placeholder="Nhập số điện thoại"
          countryPickerProps={{}}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value)&& value == User.phone;
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);
            if (checkValid) {
              navigation.navigate("ConfirmOTP", {
                phoneNumber: formattedValue,
                // guestname,
                // avatar,
                // date,
                // sex,
                // id,
                // gmail,
                // phone
              });
            }
          }}
        >
          <Text style={{ color: "white" }}>Check</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const ThemeRegister = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
    flex: 1,
  },

  logoContainer: {
    flex: 2,
    color: "red",
  },
  logo: {
    textAlign: "center",
    color: "#E94730",
    fontWeight: "bold",
    fontSize: 40,
  },

  guildTextContainer: {
    flex: 2,
  },
  txtWelcome: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#E94730",
  },
  txtPhone: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    color: "#212121",
  },

  inputTextContainer: {
    flex: 2,
    paddingTop: 30,
  },
  tipPhone: {
    paddingVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    borderColor: "#E94730",
    borderWidth: 1,
    borderRadius: 10,
  },

  btnContainer: {
    flex: 10,
  },
  btnLogin: {
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#E94730",
    width: 300,
  },
  txtLogin: {
    color: "white",
    textAlign: "center",
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E94730",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  redColor: {
    backgroundColor: "#F57777",
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

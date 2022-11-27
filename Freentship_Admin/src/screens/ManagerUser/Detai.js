import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { GetDetailUser } from "../../services";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../services";

export default function Detail({ navigation, route }) {
  const { id } = route.params;
  const [User, setUser] = useState([]);
  const avatar = User.avatar;
  const UserName = User.name;
  const email = User.email;
  const dateOfBirth = User.dateOfBirth;
  const sex = User.sex;
  const address = User.address;
  const statusUser = User.status;
  const phone = User.phone;
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", id), (doc) => {
      console.log("Current data: ", doc.data());
      setUser(doc.data());
    });
  }, [id]);
  // switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // function active() {
  //   updateDoc(doc(db, "users", id), {
  //     name: UserName,
  //     dateOfBirth: dateOfBirth,
  //     avatar: avatar,
  //     sex: sex,
  //     email: email,
  //     phone: phone,
  //     address: address,
  //     status: 1,
  //   });
  // }
  // function block() {
  //   updateDoc(doc(db, "users", id), {
  //     name: UserName,
  //     dateOfBirth: dateOfBirth,
  //     avatar: avatar,
  //     sex: sex,
  //     email: email,
  //     phone: phone,
  //     address: address,
  //     status: 2,
  //   });
  //   // Alert.alert(
  //   //   "Thông báo",
  //   //   "Thay đổi Trạng thái thành công",
  //   //   [

  //   //     { text: "OK" }
  //   //   ]
  //   // )
  // }
  useEffect(() => {
    if (User.status === 1) {
      setIsEnabled(true);
    } else if (User.status === 2) {
      setIsEnabled(false);
    }
  }, [User]);

 
  //  updateDoc

  console.log(id);
  console.log(User);
  if (isEnabled == true) {
    updateDoc(doc(db, "users",id), {
      name: UserName,
      dateOfBirth: dateOfBirth,
      avatar: avatar,
      sex: sex,
      email: email,
      phone: phone,
      address: address,
      status: 1,
    });
  } else if (isEnabled === false) {
    updateDoc(doc(db, "users",id), {
      name: UserName,
      dateOfBirth: dateOfBirth,
      avatar: avatar,
      sex: sex,
      email: email,
      phone: phone,
      address: address,
      status: 2,
    });
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headercontent}>
          <Image style={styles.imgUser} source={{ uri: avatar }} />
        </View>
        {/* switch */}
        <View style={styles.headercontent2}>
          <Text style={{ fontSize: 15, color: "red" }}>
            Thay đổi trạng thái
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      {/* end */}
      <View style={styles.content}>
        <View style={styles.Profile}>
          {/* nút thay đổi */}
          <View style={{ flexDirection: "row", paddingBottom: 20 }}>
            <Text style={styles.profileText}>Thông tin cá nhân</Text>
          </View>
        </View>
        <View style={styles.Detail}>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "red" }}>Tên người dùng:</Text>
            <Text style={{ fontSize: 25, paddingLeft: 30 }}>{User.name}</Text>
          </View>
          <View style={{ backgroundColor: "black", flex: 0.01 }}></View>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "red" }}>Ngày sinh:</Text>
            <Text style={{ fontSize: 25, paddingLeft: 30 }}>
              {User.dateOfBirth}
            </Text>
          </View>
          <View style={{ backgroundColor: "black", flex: 0.01 }}></View>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "red" }}>Email:</Text>
            <Text style={{ fontSize: 25, paddingLeft: 30 }}>{User.email}</Text>
          </View>
          <View style={{ backgroundColor: "black", flex: 0.01 }}></View>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "red" }}>Giới tính:</Text>
            <Text style={{ fontSize: 25, paddingLeft: 30 }}>{User.sex}</Text>
          </View>
          <View style={{ backgroundColor: "black", flex: 0.01 }}></View>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "red" }}>địa chỉ:</Text>
            <Text style={{ fontSize: 25 }}>{User.address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00FFFF",
  },

  header: {
    flex: 4,
    flexDirection: "row",
  },
  content: {
    flex: 10,
  },

  bottom: {
    flex: 2,
  },
  imgUser: {
    flex: 1,

    borderRadius: 10,
  },
  headercontent: {
    flex: 2,
  },
  headercontent2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Profile: {
    margin: 5,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 30,
    textAlign: "center",

    fontWeight: "bold",
    color: "red",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  Detail: {
    flex: 8,
    backgroundColor: "white",
  },
});

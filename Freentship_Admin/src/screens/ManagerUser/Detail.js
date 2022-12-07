import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { GetDetailUser } from "../../services";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../services";
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import {ToastAndroid} from 'react-native' ;
export default function Detail({ navigation, route }) {
  const { id } = route.params;
  const [User, setUser] = useState([]);
  

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", id), (doc) => {
      console.log("Current data: ", doc.data());
      setUser(doc.data());
    });
  }, [id]);

  // switch
  const [isEnabled, setIsEnabled] = useState();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const active = async () => {
    if (id !== '') {
      const isActive = doc(db, 'users', id)
      await updateDoc(isActive, {
        status: 1,
      })
    }
   
  }
  const block = async () => {
    if (id !== '') {
      const isActive = doc(db, 'users', id)
      await updateDoc(isActive, {
        status: 2,
      })
    }
  }

  useEffect(() => {
    if (isEnabled === true) {
      active();
    } else if (isEnabled === false) {
      block();
    }
  }, [isEnabled]);

  useEffect(() => {
    if (User.status === 1) {
      setIsEnabled(true);
    } else if (User.status === 2) {
      setIsEnabled(false);
    }
  }, [User]);
 
  //  updateDoc

  
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headercontent}>
          <Image style={styles.imgUser} source={{ uri: User.avatar }} />
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
          <View style={{ backgroundColor: "black", flex: 0.01 }}></View>
       
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
         
           <Text style={{ fontSize: 25, color: "red" }}>CCCD:</Text>
            {User.CCCD != null ? (
              <TouchableOpacity 
           onPress={() =>
                    navigation.navigate('DetailCCCD', {
                      CCCD :User.CCCD,
                      Centizen: User.citizenID,
                    })
                  }
          style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  paddingLeft:100,
                  color: "#90EE90",
                  fontWeight: "bold",
                }}
              >
              đã có
              </Text>
               <AntDesign name="right" style={{
               fontSize:25,
    marginLeft: 130,
    marginRight: 10,
    color: "black"
            }} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={ ToastAndroid.show(
                'Người dùng chưa Xác Minh CCCD!',
                ToastAndroid.SHORT
              )}  style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  justifyContent: "center",
                  color: "#DC143C",
                  paddingLeft:80,
                }}
              >
              Chưa xác nhận
              </Text>
              <AntDesign name="right" style={{
               fontSize:25,
    marginLeft: 50,

    marginRight: 10,
    color: "black"
            }} />
              </TouchableOpacity>
            ) }
           
          </View>
       
        </View>
      </View>
   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },

  header: {
    flex: 4,
    flexDirection: "row",
  },
  content: {
    flex: 8,
  },

  bottom: {
    flex: 2,
  },
  imgUser: {
    flex: 1,

    borderRadius: 100,
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

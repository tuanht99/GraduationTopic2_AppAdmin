import { View, Text , Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/components/Header";
import { format } from 'date-fns';
// import messaging from "@react-native-firebase/messaging";

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log("Authorization status:", authStatus);
//   }

//   useEffect(() => {
//     if (requestUserPermission()) {
//       messaging()
//         .getToken()
//         .then((token) => console.log(token));
//     } else {
//       console.log("failed token status:", authStatus);
//     }

//     // Check whether an initial notification is available
//     messaging()
//       .getInitialNotification()
//       .then( async (remoteMessage) => {
//         if (remoteMessage) {
//           console.log(
//             "Notification caused app to open from quit state:",
//             remoteMessage.notification
//           );
//         }
//       });

//     // Assume a message-notification contains a "type" property in the data payload of the screen to open

//     messaging().onNotificationOpenedApp(async (remoteMessage) => {
//       console.log(
//         "Notification caused app to open from background state:",
//         remoteMessage.notification
//       );
//     });

//     // Register background handler
//     messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//       console.log("Message handled in the background!", remoteMessage);
//     });

//     const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//       Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
//     });

//     return unsubscribe;
//   }, []);
// }

const Home = () => {  
  const todaya = new Date('2022-11-07');
  const todayb = new Date('2022-04-26');

  const c = todaya - todayb
  //  const seconds = Math.round(today.getTime()/1000)
  const date = new Date(c/1000);
  console.log('adsad' , typeof(c))

  return (
    <View>
      <Header />
      <Text> FCM Tutorial : {date.toString()} </Text>
    </View>
  );
};

export default Home;

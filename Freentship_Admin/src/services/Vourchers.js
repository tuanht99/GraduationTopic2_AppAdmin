import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  onSnapshot,
  where,
  addDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
export async function GetVourcher() {
  const ListUser = [];
  const querySnapshot = await getDocs(collection(db, "vouchers"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshotsa
    ListUser.push({ id: doc.id, ...doc.data() });
  });

  return ListUser;
}
export async function addVourcher(ten, gia, mota) {
  addDoc(collection(db, "vouchers"), {
    ten: ten,
    price: gia,
    mota: mota,
  });
  Alert.alert('Thông báo', 'Thêm thành công thành công', [{ text: 'OK' }])
}

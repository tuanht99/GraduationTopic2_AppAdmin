import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  onSnapshot,
  where
} from "firebase/firestore"; 

export  async function GetListUser() {
    const ListUser = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshotsa
      ListUser.push({ id: doc.id, ...doc.data() });
    });
  
    return ListUser;
}

export async function GetDetailUser(id) {
  const Users = [];
  const ref = doc(db, "users", `${id}`);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    Users.push(docSnap.data());
  } else {
    console.log("No such document!");
  }
  return store;
}
export  async function GetListUserShipper() {
  const ListUser = [];
  const querySnapshot = await getDocs(collection(db, "shipper"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshotsa
    ListUser.push({ id: doc.id, ...doc.data() });
  });

  return ListUser;
}
export async function GetDetailUserShipper(id) {
  const Users = [];
  const ref = doc(db, "shipper", `${id}`);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    Users.push(docSnap.data());
  } else {
    console.log("No such document!");
  }
  return store;
}
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

export async function GetStores() {
  const stores = [];
  const querySnapshot = await getDocs(collection(db, "food_stores"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshotsa
    stores.push({ id: doc.id, ...doc.data() });
  });

  return stores;
}

export async function GetDetailStore(id) {
  const store = [];
  const ref = doc(db, "food_stores", `${id}`);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    store.push(docSnap.data());
  } else {
    console.log("No such document!");
  }
  return store;
}

export async function GetAllOrder(idStore) {
  const allOrder = [];
  const orderRef = collection(db, "orders");
  const q = query( orderRef , where("food_store_id", "==", `${idStore}`) , where("status", "==", 3));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((docRef) => {
    allOrder.push({ ...docRef.data() , orderDate : docRef.data().order_date.seconds});
    // console.log(docRef.id, " => ", docRef.data() , "dasd" , " => " , docRef.data().order_date.seconds);
  });
  return allOrder;
}

let start = new Date('2022-11-06');
let end = new Date('2022-11-08');

export async function GetAllOrderByDate(idStore) {
  const allOrderByDate = [];
  const orderRef = collection(db, "orders");
  const q = query( orderRef , where("food_store_id", "==", `${idStore}`) , where("order_date", ">=", "1667810906"),where("order_date", "<=", "1667811295"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((docRef) => {
    allOrderByDate.push({ ...docRef.data() });
    console.log(docRef.id, " => ", docRef.data());
  });
  return allOrderByDate;
}

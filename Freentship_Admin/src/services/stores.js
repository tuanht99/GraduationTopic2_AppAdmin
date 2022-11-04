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
  const q = query( orderRef , where("food_store_id", "==", `${idStore}`) , where("status", "==", 3) );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((docRef) => {
    allOrder.push({ ...docRef.data() });
    console.log(docRef.id, " => ", docRef.data());
  });
  return allOrder;
}

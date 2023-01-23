import { db, collection, getDocs, doc, setDoc } from "./firebase-config";
import moment from "moment";

async function getOrders() {
  const ordersCol = collection(db, "orders");
  const orderSnapshot = await getDocs(ordersCol);
  const orderList = orderSnapshot.docs.map((doc) => doc.data());
  return orderList;
}

async function createOrder(burger, price) {
  const order = {
    id: moment().toISOString(),
    ingredients: burger,
    price: price,
  };
  await setDoc(doc(db, "orders", order.id), order).then(alert("Order created"));
}

export { getOrders, createOrder };

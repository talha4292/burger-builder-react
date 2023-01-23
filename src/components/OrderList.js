import { useEffect, useState } from "react";
import { getOrders } from "../database/db";
import OrderItem from "./OrderItem";
import Loader from "./Loader";
import "../App.css";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getOrders().then(function (val) {
      setOrders(val);
      setLoader(false);
    });
  }, []);

  return (
    <div>
      {loader === true ? (
        <Loader />
      ) : (
        orders.map((order) => {
          return <OrderItem key={order.id} order={order} />;
        })
      )}
    </div>
  );
}

export default OrderList;

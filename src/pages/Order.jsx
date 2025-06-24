import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Order.css";

const Order = () => {
  const history = useHistory();

  const handleOrder = () => {
    history.push("/success");
  };

  return (
    <section className="order-section">
      <button className="order-buton" onClick={handleOrder}>
        Sipariş Ver
      </button>
    </section>
  );
};

export default Order;
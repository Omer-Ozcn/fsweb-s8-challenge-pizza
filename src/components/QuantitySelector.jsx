import React from "react";
import "../styles/QuantitySelector.css";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="quantity-selector">
      <button type="button" className="quantity-buton" onClick={handleDecrease}>-</button>
      <span className="quantity-value">{quantity}</span>
      <button type="button" className="quantity-buton" onClick={handleIncrease}>+</button>
    </div>
  );
};

export default QuantitySelector;
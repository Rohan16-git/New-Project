// src/components/Proceed.js
import React from "react";
import "./Proceed.css";
import { useHistory } from "react-router-dom";

const Proceed = () => {
  const history = useHistory();

  const cartItems = [
    { id: 1, name: "Teddy Bear", price: 15.99, quantity: 2 },
    { id: 2, name: "Lego Set", price: 49.99, quantity: 1 },
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="proceed-container">
      <h2>Order Summary</h2>
      <p className="delivery-info">
        Your order is eligible for <strong>FREE Delivery.</strong> Choose FREE Delivery option at checkout.
      </p>

      <div className="summary-card">
        {cartItems.map((item) => (
          <div key={item.id} className="summary-item">
            <p>{item.name}</p>
            <p>Qty: {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="total">
          <h4>Total: ${getTotalPrice()}</h4>
        </div>
        <button className="proceed-btn" onClick={() => history.push("/checkout")}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Proceed;

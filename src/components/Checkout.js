// src/components/Checkout.js
import React, { useState } from "react";
import "../Checkout.css";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    history.push("/confirmation");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handlePayment} className="checkout-form">
        <h3>Shipping Details</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={formData.zip}
          onChange={handleChange}
          required
        />

        <h3>Payment Method</h3>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === "card"}
              onChange={handleChange}
            />
            <img src="/icons/card.png" alt="Card" /> Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="netbanking"
              onChange={handleChange}
            />
            <img src="/icons/netbanking.png" alt="Net Banking" /> Net Banking
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              onChange={handleChange}
            />
            <img src="/icons/upi.png" alt="UPI" /> UPI Apps
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              onChange={handleChange}
            />
            <img src="/icons/cod.png" alt="COD" /> Cash on Delivery
          </label>
        </div>

        <button type="submit" className="place-order-btn">
          Use This Payment Method
        </button>
      </form>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";

const PaymentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (!formData[key]) {
        alert(`Please fill out the ${key}`);
        return;
      }
    }

    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="cardholderName"
        placeholder="Cardholder Name"
        value={formData.cardholderName}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        maxLength={19}
        value={formData.cardNumber}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <div className="flex space-x-2">
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          maxLength={5}
          value={formData.expiry}
          onChange={handleChange}
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          maxLength={4}
          value={formData.cvv}
          onChange={handleChange}
          className="input input-bordered w-1/2"
        />
      </div>
      <input
        type="text"
        name="zip"
        placeholder="Billing ZIP/Postal Code"
        value={formData.zip}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn btn-primary w-full">
        Confirm Payment Details
      </button>
    </form>
  );
};

export default PaymentForm;

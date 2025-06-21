import React, { useState } from "react";

const PaymentForm = ({ onSubmit }) => {
  const [paymentFormData, setPaymentFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    zip: "",
    billingAddress: true,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "billingAddress") {
      setPaymentFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setPaymentFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in paymentFormData) {
      if (!paymentFormData[key]) {
        alert(`Please fill out the ${key}`);
        return;
      }
    }

    //if (onSubmit) onSubmit(paymentFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="cardholderName"
        placeholder="Cardholder Name"
        value={paymentFormData.cardholderName}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        maxLength={19}
        value={paymentFormData.cardNumber}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <div className="flex space-x-2">
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          maxLength={5}
          value={paymentFormData.expiry}
          onChange={handleChange}
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          maxLength={4}
          value={paymentFormData.cvv}
          onChange={handleChange}
          className="input input-bordered w-1/2"
        />
      </div>

      <button type="submit" className="btn w-full m-0">
        Confirm Payment Details
      </button>
    </form>
  );
};

export default PaymentForm;

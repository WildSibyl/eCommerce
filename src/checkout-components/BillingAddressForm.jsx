import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router";

const BillingAddressForm = ({ checkoutForm, handleChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    for (let key in checkoutForm) {
      if (!checkoutForm[key]) {
        alert(`Please fill out the ${key} field`);
        return;
      }
    }

    //if (onSubmit) onSubmit(checkoutForm);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="billingUserName"
        placeholder="Full Name"
        value={checkoutForm.billingUserName}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="billingStreet"
        placeholder="Street Address"
        value={checkoutForm.billingStreet}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="billingCity"
        placeholder="City"
        value={checkoutForm.billingCity}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="billingState"
        placeholder="State/Province"
        value={checkoutForm.billingState}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="billingZipCode"
        placeholder="Zip code"
        value={checkoutForm.billingZipCode}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="billingCountry"
        placeholder="Country"
        value={checkoutForm.billingCountry}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn w-full m-0">
        Confirm Billing Address
      </button>
    </form>
  );
};

export default BillingAddressForm;

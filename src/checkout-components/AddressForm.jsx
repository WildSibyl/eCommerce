import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router";

const AddressForm = ({ onSubmit }) => {
  const { addressFormData, setAddressFormData } = useOutletContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    for (let key in addressFormData) {
      if (!addressFormData[key]) {
        alert(`Please fill out the ${key}`);
        return;
      }
    }

    if (onSubmit) onSubmit(addressFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={addressFormData.fullName}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="street"
        placeholder="Street Address"
        value={addressFormData.street}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={addressFormData.city}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="state"
        placeholder="State/Province"
        value={addressFormData.state}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        value={addressFormData.postalCode}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={addressFormData.country}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn w-full m-0">
        Confirm Address
      </button>
    </form>
  );
};

export default AddressForm;

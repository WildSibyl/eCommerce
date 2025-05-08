import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router";

const AddressForm = ({ onSubmit }) => {
  const { formData, setFormData } = useOutletContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
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
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="street"
        placeholder="Street Address"
        value={formData.street}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="state"
        placeholder="State/Province"
        value={formData.state}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        value={formData.postalCode}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn btn-primary w-full">
        Confirm Address
      </button>
    </form>
  );
};

export default AddressForm;

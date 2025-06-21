import React, { useState } from "react";
import { toast } from "react-toastify";

const AddressForm = ({ checkoutForm, handleChange, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "userName",
      "street",
      "city",
      "state",
      "zipCode",
      "country",
    ];

    if (!checkoutForm.billingAddressIsSame) {
      requiredFields.push(
        "billingUserName",
        "billingStreet",
        "billingCity",
        "billingState",
        "billingZipCode",
        "billingCountry"
      );
    }

    for (let key of requiredFields) {
      if (!checkoutForm[key]) {
        toast.error(`Please fill out the ${key} field`);
        return;
      }
    }

    setIsOpen(false);
    //if (onSubmit) onSubmit(checkoutForm);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className=" max-w-md mx-auto">
        <div
          className={` max-w-md mx-auto transition-all duration-500 overflow-hidden ${
            isOpen
              ? "max-h-[1000px] opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              name="userName"
              placeholder="Full Name"
              value={checkoutForm.userName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={checkoutForm.street}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={checkoutForm.city}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              value={checkoutForm.state}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={checkoutForm.zipCode}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={checkoutForm.country}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {isOpen ? (
          <button type="submit" className="btn w-full m-0 mt-4">
            Confirm Address
          </button>
        ) : null}
      </form>
      {isOpen ? null : (
        <button type="button" onClick={toggleForm} className="btn w-full m-0">
          Edit Address
        </button>
      )}
    </div>
  );
};

export default AddressForm;

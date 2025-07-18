import React, { useState } from "react";
import { toast } from "react-toastify";

const BillingAddressForm = ({ checkoutForm, handleChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in checkoutForm) {
      const value = checkoutForm[key];

      if (
        value === null ||
        value === undefined ||
        (typeof value === "string" && value.trim() === "")
      ) {
        toast.error(`Please fill out the ${key} field`);
        return;
      }
    }

    setIsOpen(false);
    //if (onSubmit) onSubmit(checkoutForm);
  };

  return (
    <div className="max-w-md mx-auto mt-4">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div
          className={` max-w-md mx-auto transition-all duration-500 overflow-hidden p-1 ${
            isOpen
              ? "max-h-[1000px] opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="space-y-4 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mx-4">Billing Address</h2>
            <input
              type="text"
              name="billingUserName"
              placeholder="Full name"
              value={checkoutForm.billingUserName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="billingStreet"
              placeholder="Street and house number"
              value={checkoutForm.billingStreet}
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
              name="billingCountry"
              placeholder="Country"
              value={checkoutForm.billingCountry}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingAddressForm;

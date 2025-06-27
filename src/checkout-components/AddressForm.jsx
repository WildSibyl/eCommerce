import React, { useState } from "react";
import { toast } from "react-toastify";
import BillingAddressForm from "./BillingAddressForm";

const AddressForm = ({ checkoutForm, handleChange }) => {
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
      <form onSubmit={handleSubmit} className=" max-w-md mx-auto ">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold mx-4">Shipping Address</h2>
        </div>
        <div
          className={` max-w-md mx-auto transition-all duration-500 overflow-hidden p-1 ${
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
        {checkoutForm.billingAddressIsSame === false && (
          <BillingAddressForm
            checkoutForm={checkoutForm}
            handleChange={handleChange}
          />
        )}
      </form>
      <div className="flex w-full">
        <div className="flex flex-col items-center justify-between mt-4 space-y-4 text-sm w-[50%]">
          <label className="flex justify-center items-center space-x-2">
            <input
              type="checkbox"
              name="billingAddressIsSame"
              checked={checkoutForm.billingAddressIsSame}
              onChange={handleChange}
              className="h-5 w-5 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              style={{ accentColor: "#1F46E5" }}
            />
            <span className="text-content-100 font-semibold w-[70%]">
              Use shipping address for billing too
            </span>
          </label>
        </div>
        {isOpen ? (
          <div className="px-1 flex w-[50%]">
            <button type="submit" className="btn m-0 mt-3 w-full">
              Confirm Address
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={toggleForm}
            className="btn w-[50%] m-0"
          >
            Edit Address
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressForm;

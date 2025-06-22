import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in paymentFormData) {
      if (!paymentFormData[key]) {
        alert(`Please fill out the ${key}`);
        return;
      }
    }

    if (!stripe || !elements) {
      toast.error("Stripe is not loaded yet. Please try again later.");
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
      },
    });

    if (error) {
      toast.error(`Payment failed: ${error.message}`);
      setIsProcessing(false);
      return;
    }

    toast.success("Payment successful!");
    setIsProcessing(false);

    //if (onSubmit) onSubmit(paymentFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <>
          {/* 
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
          </div>*/}
        </>
        <PaymentElement className="mt-4" />
        <div className="px-1">
          <button
            type="submit"
            disabled={isProcessing || !stripe || !elements}
            className="btn w-full m-0"
          >
            {isProcessing ? "Processing..." : "Confirm and Pay Now"}
          </button>
        </div>
      </form>
    </>
  );
};

export default PaymentForm;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router";
import { useAddToCart } from "../hooks/useLocalStorage";

const PaymentForm = ({ onBack, orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { clearCart, cartItems } = useAddToCart();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe is not loaded yet. Please try again later.");
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation/${orderId}`,
      },
      redirect: "if_required",
    });

    if (error) {
      toast.error(`Payment failed: ${error.message}`);
      setIsProcessing(false);
      return;
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      toast.success("Payment successful! 🎉");

      clearCart();

      setIsProcessing(false);
      navigate(`/order-confirmation/${orderId}`);
    }

    //if (onSubmit) onSubmit(paymentFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center text-sm text-error-content rounded-2xl bg-error p-4 m-2 mt-4">
          <p className="mb-2 text-center font-bold text-lg">
            DO NOT USE real payment details!
          </p>
          <p className="mb-2 text-center">
            Use the test cards you can find by following the link below. We are
            not responsible for any misuse of this testing site.
          </p>
          <a
            href="https://docs.stripe.com/testing#cards"
            className="underline text-error-content hover:text-error-content/80 font-bold text-lg mb-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Stripe Test Cards
          </a>
        </div>
        <PaymentElement className="mt-4" />
        <div className="px-1 flex gap-4">
          <button
            type="button"
            onClick={onBack}
            disabled={isProcessing || !stripe || !elements}
            className="btn bg-gray-500 w-[49%] m-0 -ml-1"
          >
            Edit Address
          </button>
          <button
            type="submit"
            disabled={isProcessing || !stripe || !elements}
            className="btn w-[49%] m-0"
          >
            {isProcessing ? "Processing..." : "Confirm and Pay Now"}
          </button>
        </div>
      </form>
    </>
  );
};

export default PaymentForm;

import { loadStripe } from "@stripe/stripe-js";

const API_URL = import.meta.env.VITE_APP_ECOMMERCE_API_URL;

if (!API_URL) {
  throw new Error("API URL is required, are you missing a .env file?");
}

const baseUrl = `${API_URL}/checkout`;

export const checkoutConfig = async (setStripePromise) => {
  const res = await fetch(`${baseUrl}/config`);
  const { publishableKey } = await res.json();
  const stripe = await loadStripe(publishableKey);
  setStripePromise(stripe);
};

export const checkoutPayment = async (formData) => {
  const res = await fetch(`${baseUrl}/create-payment-intent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  //console.log("Payment intent response:", data);

  if (!res.ok) {
    throw new Error(data.error || "An error occurred while processing payment");
  }

  return data;
};

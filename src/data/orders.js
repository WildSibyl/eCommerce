import { loadStripe } from "@stripe/stripe-js";

const API_URL = import.meta.env.VITE_APP_ECOMMERCE_API_URL;

if (!API_URL) {
  throw new Error("API URL is required, are you missing a .env file?");
}

const baseUrl = `${API_URL}/orders`;

export const getOrderById = async (orderId) => {
  const res = await fetch(`${baseUrl}/${orderId}`, {
    method: "GET",
    //credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch order confirmation");
  }

  const data = await res.json();
  return data;
};

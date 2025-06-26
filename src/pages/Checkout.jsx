import { useOutletContext, useNavigate } from "react-router";
import AddressForm from "../checkout-components/AddressForm";
import PaymentForm from "../checkout-components/PaymentForm";
import BillingAddressForm from "../checkout-components/BillingAddressForm";
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { checkoutConfig, checkoutPayment } from "../data/checkout";
import { useAuth } from "../hooks/useAuth";

const Checkout = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const { cart, cartItems } = useOutletContext();
  const { user } = useAuth();

  const navigate = useNavigate();
  const [checkoutForm, setCheckoutForm] = useState({
    userName: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    billingAddressIsSame: true,
    billingUserName: "",
    billingStreet: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
    billingCountry: "",
  });

  const isAddressValid = () => {
    const {
      userName,
      street,
      city,
      state,
      zipCode,
      country,
      billingAddressIsSame,
      billingUserName,
      billingStreet,
      billingCity,
      billingState,
      billingZipCode,
      billingCountry,
    } = checkoutForm;

    // Helper to check if all required fields are filled (non-empty strings)
    const isFilled = (...fields) =>
      fields.every((field) => field.trim() !== "");

    if (billingAddressIsSame) {
      // Only check shipping address fields
      return isFilled(userName, street, city, state, zipCode, country);
    } else {
      // Check both shipping and billing address fields
      return (
        isFilled(userName, street, city, state, zipCode, country) &&
        isFilled(
          billingUserName,
          billingStreet,
          billingCity,
          billingState,
          billingZipCode,
          billingCountry
        )
      );
    }
  };

  // Calculate subtotal, shipping, and total prices
  const subtotalPrice = cart.reduce((acc, product) => {
    const productPrice =
      product.discount > 0
        ? product.price - product.price * (product.discount / 100)
        : product.price;
    return acc + productPrice * product.quantity;
  }, 0);

  const shippingPrice = 5.0; // Flat shipping price
  const totalPrice = subtotalPrice + shippingPrice;
  const payload = {
    items: cart.map(({ id, quantity }) => ({
      productId: id.toString(),
      quantity,
    })),
    shipping: {
      address: checkoutForm.street,
      city: checkoutForm.city,
      state: checkoutForm.state,
      zip: checkoutForm.zipCode,
      country: checkoutForm.country,
    },
    billing: checkoutForm.billingAddressIsSame
      ? {
          address: checkoutForm.street,
          city: checkoutForm.city,
          state: checkoutForm.state,
          zip: checkoutForm.zipCode,
          country: checkoutForm.country,
        }
      : {
          address: checkoutForm.billingStreet,
          city: checkoutForm.billingCity,
          state: checkoutForm.billingState,
          zip: checkoutForm.billingZipCode,
          country: checkoutForm.billingCountry,
        },
    fee: shippingPrice.toFixed(2),
    total: Math.round(totalPrice * 100), // convert to cents
  };

  // Setting up Stripe configuration
  useEffect(() => {
    const fetchConfig = async () => {
      await checkoutConfig(setStripePromise);
    };
    fetchConfig();
  }, []);

  // Set client secret when checkout form is filled
  useEffect(() => {
    const fetchClientSecret = async () => {
      if (!clientSecret && isAddressValid()) {
        await checkoutPayment(payload, setClientSecret);
      }
    };
    fetchClientSecret();
  }, [checkoutForm]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "billingAddressIsSame") {
      setCheckoutForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setCheckoutForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckout = async (e) => {
    try {
      // Create payment intent on backend and get client secret
      const res = await checkoutPayment(payload, setClientSecret);

      navigate("/checkout/order-confirmation");
    } catch (error) {
      if (error.type === "StripeCardError") {
        // Handle card errors
        console.error("Card error:", error.message);
        toast.error(`Card error: ${error.message}`);
      } else if (error.type === "StripeInvalidRequestError") {
        // Handle invalid requests
        console.error("Invalid request:", error.message);
        toast.error(`Invalid request: ${error.message}`);
      } else if (error.type === "APIError") {
        // Handle invalid requests
        console.error("API error:", error.message);
        toast.error(`API error: ${error.message}`);
      } else {
        // Handle other errors
        console.error("Error:", error);
        toast.error("An error occurred while processing your payment.");
      }
    }
  };

  console.log("Stripe ready?", !!stripePromise, "Client Secret:", clientSecret);

  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-full lg:py-[5%]">
        <div className="flex flex-col items-center">
          <div className="max-w-[300px] mx-auto m-4">
            <img
              src="src/assets/empty_cart.png"
              alt="a stylized illustration of a confused cat in an empty cart"
            />
          </div>
          <h2 className="text-xl">Your cart is empty.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full lg:px-[10%]">
      <h2 className="text-3xl font-semibold m-4">Your Details</h2>
      <div className="flex flex-col md:flex-row mx-auto items-start justify-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-[70%]">
          <div className="">
            <AddressForm
              checkoutForm={checkoutForm}
              handleChange={handleChange}
              onSubmit={(data) => console.log("Submitted:", data)}
            />
            <div className="flex flex-col items-center justify-between mt-4 space-y-2 text-sm">
              <label className="flex justify-center items-center space-x-2">
                <input
                  type="checkbox"
                  name="billingAddressIsSame"
                  checked={checkoutForm.billingAddressIsSame}
                  onChange={handleChange}
                  className="h-5 w-5 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                  style={{ accentColor: "#1F46E5" }}
                />
                <span className="text-pnp-black font-semibold">
                  Use shipping address for billing
                </span>
              </label>
            </div>
            {checkoutForm.billingAddressIsSame === false && (
              <BillingAddressForm
                checkoutForm={checkoutForm}
                handleChange={handleChange}
                onSubmit={(data) => console.log("Submitted:", data)}
              />
            )}

            {stripePromise && clientSecret && isAddressValid() && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm handleCheckout={handleCheckout} />
              </Elements>
            )}
          </div>
        </div>
        <div className="flex flex-col md:w-[30%] md:h-[50vh] bg-base-200 rounded-lg shadow-md p-4 md:ml-4">
          <div className="flex flex-row justify-between mb-2">
            <p>Subtotal ({cartItems} Items):</p>
            <p className="text-xl">€ {subtotalPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between mb-2 border-b border-base-content pb-2">
            <p>Shipping:</p>
            <p className="text-xl">€ {shippingPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between mb-4">
            <p>Total:</p>
            <p className="text-xl font-semibold">€ {totalPrice.toFixed(2)}</p>
          </div>
          {!user && (
            <div className="flex flex-col items-center justify-center text-sm text-gray-500 rounded-2xl bg-base-100 p-4">
              Please log in to have this order saved to your account.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;

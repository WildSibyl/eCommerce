import { useOutletContext, useNavigate } from "react-router";
import AddressForm from "../checkout-components/AddressForm";
import PaymentForm from "../checkout-components/PaymentForm";
import ProgressBar from "../checkout-components/ProgressBar";
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { checkoutConfig, checkoutPayment } from "../data/checkout";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

const Checkout = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [orderId, setOrderId] = useState("");

  const { user } = useAuth();
  const { cart, cartItems, discountAmount, discountCode } = useCart();

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
  const subtotalRaw = cart.reduce((acc, product) => {
    const productPrice =
      product.discount > 0
        ? product.price - product.price * (product.discount / 100)
        : product.price;
    return acc + productPrice * product.quantity;
  }, 0);

  const subtotalPrice = subtotalRaw - discountAmount;

  const shippingPrice = 5.0; // Flat shipping price
  const totalPrice = subtotalPrice + shippingPrice;
  const payload = {
    items: cart.map(({ id, quantity }) => ({
      productId: id.toString(),
      quantity,
    })),
    shipping: {
      name: checkoutForm.userName,
      street: checkoutForm.street,
      city: checkoutForm.city,
      state: checkoutForm.state,
      zip: checkoutForm.zipCode,
      country: checkoutForm.country,
    },
    billing: checkoutForm.billingAddressIsSame
      ? {
          name: checkoutForm.userName,
          street: checkoutForm.street,
          city: checkoutForm.city,
          state: checkoutForm.state,
          zip: checkoutForm.zipCode,
          country: checkoutForm.country,
        }
      : {
          name: checkoutForm.billingUserName,
          street: checkoutForm.billingStreet,
          city: checkoutForm.billingCity,
          state: checkoutForm.billingState,
          zip: checkoutForm.billingZipCode,
          country: checkoutForm.billingCountry,
        },
    fee: shippingPrice.toFixed(2),
    discountCode: discountCode || null,
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
        try {
          const { clientSecret: secret, orderId: newOrderId } =
            await checkoutPayment(payload);
          if (secret) {
            setClientSecret(secret);
            setOrderId(newOrderId);
          } else {
            console.error("Missing clientSecret from response");
          }
        } catch (error) {
          console.error("Failed to fetch client secret:", error.message);
        }
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
      <div className="p-4">
        <ProgressBar currentStep={currentStep} />
      </div>
      <div className="flex flex-col md:flex-row mx-auto items-start justify-center gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="">
            {currentStep === 0 && (
              <div>
                <AddressForm
                  checkoutForm={checkoutForm}
                  handleChange={handleChange}
                  onConfirm={() => {
                    if (isAddressValid()) {
                      setCurrentStep(1);
                    } else {
                      toast.error(
                        "Please fill out all required address fields"
                      );
                    }
                  }}
                />
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <PaymentForm
                    onBack={() => setCurrentStep(0)}
                    orderId={orderId}
                  />
                </Elements>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[70%] mx-auto md:w-[40%] md:min-h-[50vh] bg-base-200 rounded-lg shadow-md p-4 md:ml-4">
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
            <div className="flex flex-col items-center justify-center text-sm text-content-100 rounded-2xl bg-base-100 p-4 m-2 mt-4">
              Please log in to have this order saved to your account.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;

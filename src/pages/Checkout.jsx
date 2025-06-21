import { useOutletContext, useNavigate } from "react-router";
import AddressForm from "../checkout-components/AddressForm";
import PaymentForm from "../checkout-components/PaymentForm";
import BillingAddressForm from "../checkout-components/BillingAddressForm";
import { useState } from "react";

const Checkout = () => {
  const { cart, cartItems } = useOutletContext();

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
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "billingAddressIsSame") {
      setCheckoutForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setCheckoutForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckout = () => {
    navigate("/order-confirmation");
  };

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

  return (
    <div className="flex flex-col h-full lg:px-[10%]">
      <h2 className="text-3xl font-semibold m-4">Your Details</h2>
      <div className="flex flex-col md:flex-row mx-auto items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-[70%]">
          <div className="md:w-[50%]">
            <AddressForm
              checkoutForm={checkoutForm}
              handleChange={handleChange}
              onSubmit={(data) => console.log("Submitted:", data)}
            />
            <div className="space-y-2 text-sm mt-4">
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
          </div>
          {checkoutForm.billingAddress === false && (
            <BillingAddressForm
              checkoutForm={checkoutForm}
              handleChange={handleChange}
              onSubmit={(data) => console.log("Submitted:", data)}
            />
          )}
          <div></div>
          <div className="md:w-[50%]">
            <PaymentForm
              checkoutForm={checkoutForm}
              handleChange={handleChange}
              onSubmit={(data) => console.log("Submitted:", data)}
            />
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

          <button onClick={handleCheckout} className="btn">
            Order and Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import ProductCardLong from "../components/card-components/ProductCardLong";
import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";
import { applyDiscount } from "../data/discounts";
import emptyCartImage from "../assets/empty_cart.png";

const Cart = () => {
  const {
    cart,
    addProduct,
    decreaseQuantity,
    removeProduct,
    cartItems,
    discountCode,
    discountAmount,
    setDiscountCode,
    setDiscountAmount,
    discountError,
    setDiscountError,
  } = useCart();

  const navigate = useNavigate();

  // Calculate subtotal, shipping, and total prices
  const subtotalPrice = cart.reduce((acc, product) => {
    const productPrice =
      product.discount > 0
        ? product.price - product.price * (product.discount / 100)
        : product.price;
    return acc + productPrice * product.quantity;
  }, 0);

  const applyDiscountCode = async () => {
    setDiscountError("");

    try {
      const discountData = await applyDiscount(discountCode);

      const discountValue =
        subtotalPrice * (discountData.discount.percentage / 100);

      //console.log(
        "Discount applied:",
        subtotalPrice,
        discountData.discount.percentage,
        discountAmount
      );

      setDiscountAmount(discountValue);
    } catch (error) {
      setDiscountError(error.message);
      console.error("Error applying discount code:", error);
      setDiscountAmount(0);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-full lg:py-[5%]">
        <div className="flex flex-col items-center">
          <div className="max-w-[300px] mx-auto m-4">
            <img
              src={emptyCartImage}
              alt="a stylized illustration of a confused cat in an empty cart"
            />
          </div>
          <h2 className="text-xl">Your cart is empty.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4 pb-0 lg:px-[10%]">
      <h2 className="text-3xl font-semibold mb-4">Your cart</h2>
      <div className="flex flex-col-reverse md:flex-row mx-auto">
        <div className="flex flex-col md:w-[70%] gap-4">
          {cart.map((product) => (
            <ProductCardLong
              key={product.id}
              product={product}
              cartItems={cartItems}
              addProduct={addProduct}
              decreaseQuantity={decreaseQuantity}
              removeProduct={removeProduct}
            />
          ))}
        </div>
        <div className="flex flex-col md:w-[30%] bg-base-200 rounded-lg shadow-md p-4 mb-4 md:mb-0 md:ml-4">
          <div className="flex flex-row justify-between mb-2">
            <p>Subtotal ({cartItems} Items):</p>
            <p className="text-xl">€ {subtotalPrice.toFixed(2)}</p>
          </div>
          {discountAmount > 0 && (
            <div className="flex flex-row justify-between mb-2">
              <p>Discounted:</p>
              <p className="text-xl">
                € {(subtotalPrice - discountAmount).toFixed(2)}
              </p>
            </div>
          )}
          <button onClick={handleCheckout} className="btn">
            Go to checkout
          </button>
          <div className="mx-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
              placeholder="Discount code"
              className="input input-bordered m-2 mx-auto w-full"
            />
          </div>
          <button
            className="btn btn-primary bg-gray-500"
            onClick={applyDiscountCode}
          >
            Apply Discount
          </button>
          {discountError && (
            <p className="text-error font-bold text-sm mb-2 text-center">
              {discountError}
            </p>
          )}
          {discountAmount > 0 && (
            <p className="text-success font-bold text-sm mb-2 text-center">
              Discount applied: €{discountAmount.toFixed(2)} off your order!
            </p>
          )}

          <div className="flex flex-col items-center justify-center text-sm text-error-content rounded-3xl bg-error p-4 m-2 mt-4">
            <p className="mb-2 text-center font-bold text-lg">
              This is a student project focused on testing eCommerce features.
              There are no real items for sale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

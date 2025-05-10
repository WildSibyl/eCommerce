import ProductCardLong from "../card-components/ProductCardLong";
import { useOutletContext, useNavigate } from "react-router";

const Cart = () => {
  const { cart, addProduct, decreaseQuantity, removeProduct, cartItems } =
    useOutletContext();

  const navigate = useNavigate();

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

          <button onClick={handleCheckout} className="btn">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

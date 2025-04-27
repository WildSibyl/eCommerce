import ProductCardLong from "../card-components/ProductCardLong";
import { useOutletContext } from "react-router";

const Cart = () => {
  const { cart, addProduct, decreaseQuantity, removeProduct, cartItems } =
    useOutletContext();

  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <h2 className="text-xl">Your cart is empty</h2>
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
      <h2 className="text-3xl font-semibold mb-4">Your cart</h2>
      <div className="flex flex-row mx-auto">
        <div className="flex flex-col">
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
        <div className="flex flex-col w-[30%] h-[50vh] bg-base-200 rounded-lg shadow-md p-4 ml-4">
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
          <button className="btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

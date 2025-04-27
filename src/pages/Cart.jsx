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
            /*
            <div key={product.id} className="longbox">
              <div className="flex flex-row">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[182px] h-[182px] object-contain bg-white m-2 rounded-lg"
                />

                <div className="flex flex-row py-2 justify-between w-full">
                  <div className="flex flex-col flex-grow">
                    <Link to={`/products/${product.id}`}>
                      <h2 className="font-semibold hover:underline mb-1">
                        {product.title}
                      </h2>
                    </Link>

                    {product.popular ? (
                      <p className="font-semibold bg-accent pl-2 rounded-tr-lg rounded-br-full w-[160px]">
                        POPULAR CHOICE
                      </p>
                    ) : null}

                  

                    <Counter
                      product={product}
                      cartItems={cartItems}
                      addProduct={addProduct}
                      decreaseQuantity={decreaseQuantity}
                      removeProduct={removeProduct}
                    />
                  </div>

                  <div className="flex flex-col flex-shrink-0 items-end text-right w-[160px]">
                    {product.discount > 0 ? (
                      <div>
                        <div className="flex flex-col mt-0 m-4">
                          <p className="text-xl font-semibold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                          <p className="relative font-semibold self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute right-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>
                        </div>
                        <p className="text-xl font-semibold bg-error text-center rounded-l-2xl">
                          {product.discount}% OFF!!
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col mt-0 m-4">
                        <p className="text-xl font-semibold">
                          € {product.price.toFixed(2)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              </div>
              */
          ))}
        </div>
        <div className="flex flex-col w-[30%] h-[50vh] bg-base-100 rounded-lg shadow-md p-4 ml-4">
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

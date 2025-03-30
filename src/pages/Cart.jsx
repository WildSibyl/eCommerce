import { useAddToCart } from "../hooks/useLocalStorage";
import { Link } from "react-router";

const Cart = () => {
  const { cart } = useAddToCart();

  // Check if cart is empty
  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl">Your cart is empty</h2>
      </div>
    );
  }
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  // Display cart products

  return (
    <div className="flex flex-col h-screen lg:px-[10%]">
      <h2 className="text-3xl font-semibold mb-4">Your cart</h2>
      <div className="flex flex-row mx-auto ">
        <div className="flex flex-col">
          {cart.map((product) => (
            <div key={product.id} className="longbox ">
              <Link to={`/products/${product.id}`}>
                <div className="flex flex-row">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-50 h-45.5 object-contain bg-white m-2 rounded-lg"
                  />

                  <div className="flex flex-row py-2 justify-between w-full">
                    <div className="flex flex-col flex-grow">
                      <h2 className="font-semibold">{product.title}</h2>
                      {product.popular ? (
                        <p className="font-semibold bg-accent pl-2 rounded-tr-lg rounded-br-full w-[160px]">
                          POPULAR CHOICE
                        </p>
                      ) : null}
                      <div className="self-end mb-4">
                        {product.quantity > 1 ? (
                          <button className="counterBtn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          </button>
                        ) : (
                          <button className="counterBtn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        )}
                        Quantity
                        <button className="counterBtn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                      </div>
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
                        <div className="flex m-4">
                          <p className="text-3xl font-semibold mr-4">
                            € {product.price.toFixed(2)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[30%] h-[50vh] bg-base-100 rounded-lg shadow-md p-4 ml-4">
          <p>Subtotal:</p>
          <p>Shipping:</p>
          <p>Total:</p>
          <button className="btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

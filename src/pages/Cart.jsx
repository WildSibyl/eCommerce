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
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cart.map((product) => (
          <div key={product.id} className="box">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <h2>{product.title}</h2>
              <p className="font-bold">€ {product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

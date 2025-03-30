import React, { useState } from "react";
import { Link } from "react-router";
import { useProducts } from "../hooks/useProductData";

const Deals = () => {
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(products);

  return (
    <div
      id="cart-container"
      className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
      {products
        .filter((product) => product.discount > 0) // Filter products with a discount
        .map((product) => (
          <div key={product.id} className="box">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain bg-white"
              />
              <h2>{product.title}</h2>
              <p className="font-bold">€ {product.price}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Deals;

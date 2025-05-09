import React, { useState } from "react";
import { Link } from "react-router";
import { useProducts } from "../hooks/useProductData";
import { useOutletContext } from "react-router";
import ProductCardMedium from "../card-components/ProductCardMedium";

const Deals = () => {
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  const { addProduct } = useOutletContext();

  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(products);

  return (
    <>
      <CategoryBar />
      <div
        id="cart-container"
        className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {products
          .filter((product) => product.discount > 0) // Filter products with a discount
          .map((product) => (
            <ProductCardMedium
              key={product.id}
              product={product}
              addProduct={addProduct}
            /> // Use ProductCardMedium for larger cards
          ))}
      </div>
    </>
  );
};

export default Deals;

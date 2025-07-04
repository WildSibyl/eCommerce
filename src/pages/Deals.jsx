import React, { useState } from "react";
import { Link } from "react-router";
import { useProducts } from "../hooks/useProductData";
import { useCart } from "../hooks/useCart";
import ProductCardMedium from "../card-components/ProductCardMedium";
import CategoryBar from "../components/CategoryBar";

const Deals = () => {
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  const { addProduct } = useCart();

  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(products);

  return (
    <>
      <CategoryBar />
      <div
        id="cart-container"
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4"
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

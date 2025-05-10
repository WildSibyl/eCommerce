import React, { useState } from "react";
import { useProducts } from "../hooks/useProductData";
import { useOutletContext } from "react-router";
import ProductCardMedium from "../card-components/ProductCardMedium";
import CategoryBar from "../components/CategoryBar";

const AllProducts = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

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
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4"
      >
        {products.map((product) => (
          <ProductCardMedium
            key={product.id}
            product={product}
            addProduct={addProduct}
          />
        ))}
      </div>
    </>
  );
};

export default AllProducts;

import React, { useState } from "react";
import { Link } from "react-router";
import { useCategory } from "../hooks/useProductData";
import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import ProductCardMedium from "../card-components/ProductCardMedium";

const Category = () => {
  const { productCategory } = useParams();
  console.log(` Category: ${productCategory}`);

  const { addProduct } = useOutletContext();

  const { category, loading, error } = useCategory(productCategory);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(category);

  return (
    <div
      id="cart-container "
      className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4"
    >
      {category.map((product) => (
        <ProductCardMedium
          key={product.id}
          product={product}
          addProduct={addProduct}
        /> // Use ProductCardMedium for larger cards
      ))}
    </div>
  );
};

export default Category;

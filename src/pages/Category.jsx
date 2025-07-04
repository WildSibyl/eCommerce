import React, { useState } from "react";
import { Link } from "react-router";
import { useCategory } from "../hooks/useProductData";
import { useParams } from "react-router";
import { useCart } from "../hooks/useCart";
import ProductCardMedium from "../card-components/ProductCardMedium";
import CategoryBar from "../components/CategoryBar";

const Category = () => {
  const { productCategory } = useParams();
  console.log(` Category: ${productCategory}`);

  const { addProduct } = useCart();

  const { category, loading, error } = useCategory(productCategory);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(category);

  return (
    <>
      <CategoryBar />
      <div
        id="cart-container "
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4"
      >
        {category.map((product) => (
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

export default Category;

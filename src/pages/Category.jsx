import React, { useState } from "react";
import { Link } from "react-router";
import { useCategory } from "../hooks/useProductData";
import { useParams } from "react-router";

const Category = () => {
  const { productCategory } = useParams();
  console.log(` Category: ${productCategory}`);

  const { category, loading, error } = useCategory(productCategory);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(category);

  return (
    <div
      id="cart-container"
      className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
      {category.map((product) => (
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

export default Category;

import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { useProduct } from "../hooks/useProductData";


const Product = () => {
  const { productId } = useParams();

  console.log(` Product ID: ${productId}`); 

  const { product, loading, error } = useProduct(productId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>; 
  
  console.log(product);

  return (
    <div
      id="product-container"
      className="flex items-center justify-between gap-4 px-[10%]"
    >
      <div className="flex flex-col">
      <h2 className="font-bold">{product.title}</h2>

        <div key={product.id} className="flex">
            <img
              src={product.image}
              alt={product.title}
              className="w-[30%] object-cover"
            />
            <p>{product.price}</p>
        </div>
      </div>
        <div className="w-[30%] font-bold">
          <button className="btn" >Add to cart</button>
        </div>
    </div>
  );
};

export default Product;


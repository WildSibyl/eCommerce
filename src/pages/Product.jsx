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
      className="flex items-center justify-between px-[10%]"
    >
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold m-4">{product.title}</h2>

        <div key={product.id} className="flex">
          <img
            src={product.image}
            alt={product.title}
            className="w-[40%] object-cover p-4 bg-white rounded-lg"
          />
          <div className="flex flex-col m-4">
            {product.popular ? (
              <p className="font-bold bg-accent p-1 rounded-br-full w-[160px]">
                POPULAR CHOICE
              </p>
            ) : null}
            {product.discount > 0 ? (
              <div>
                <div className="flex m-4">
                  <p className="relative font-bold mr-4 self-center">
                    € {product.price.toFixed(2)}
                    <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                  </p>

                  <p className="text-3xl font-bold">
                    €{" "}
                    {(
                      product.price -
                      product.price * (product.discount / 100)
                    ).toFixed(2)}
                  </p>
                </div>
                <p className="text-3xl font-bold bg-error p-1 text-center rounded-full w-[97px] mb-4 border-8 border-error">
                  <div className="-translate-y-1">
                    {product.discount}% OFF!!
                  </div>
                </p>
              </div>
            ) : (
              <div className="flex m-4">
                <p className="text-3xl font-bold mr-4">
                  € {product.price.toFixed(2)}
                </p>
              </div>
            )}
            <div className="flex flex-col mb-4">
              <div className="flex">
                <p className="font-bold w-[80px]">Brand:</p>
                <p>
                  {product.brand.charAt(0).toUpperCase() +
                    product.brand.slice(1)}
                </p>
              </div>
              <div className="flex">
                <p className="font-bold w-[80px]">Model:</p>
                <p>{product.model}</p>
              </div>
              <div className="flex">
                <p className="font-bold w-[80px]">Color:</p>
                <p>{product.color}</p>
              </div>
            </div>
            <div>
              <p className="font-bold">About this item:</p>
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[80%] border border-base-200 font-bold justify-center items-center rounded-lg h-[400px] m-4 bg-base-100 shadow-md gap-4">
        <p>In stock</p>
        <p>Quantity dropdown</p>
        <button className="btn">Add to cart</button>
        <button className="btn">Buy now</button>
      </div>
    </div>
  );
};

export default Product;

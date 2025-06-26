import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useProduct } from "../hooks/useProductData";
import { useOutletContext } from "react-router";
// import { Counter } from "../components/Counter.jsx";
import ProductImage from "../card-components/ProductImage.jsx";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  console.log(` Product ID: ${productId}`);

  const { product, loading, error } = useProduct(productId);
  const { addProduct } = useOutletContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  console.log(product);

  // const handleQuantityChange = (newQuantity) => {
  //   setQuantity(newQuantity);
  // };

  // const handleAddToCart = () => {
  //   // Add the product to the cart with the selected quantity
  //   console.log(`Added ${quantity} of ${product.title} to the cart.`);
  // };

  // const handleBuyNow = () => {
  //   // Handle the buy now action
  //   console.log(`Buying ${quantity} of ${product.title} now.`);
  // };

  return (
    <div
      id="product-container"
      className="flex flex-col md:flex-row items-center justify-between px-4"
    >
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold my-4 md:mx-4">{product.title}</h2>

        <div key={product.id} className="flex flex-col md:flex-row w-full">
          <div className="md:w-[250%] object-contain p-4 bg-white rounded-lg shadow-md">
            <ProductImage product={product} />
          </div>
          <div className="flex flex-col my-4 md:mx-4">
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
                  <span className="-translate-y-1">
                    {product.discount}% OFF!!
                  </span>
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
      <div className="flex flex-col w-full md:w-[1000px] border border-base-200 font-bold justify-center items-center rounded-lg md:h-[400px] m-4 bg-base-200 shadow-md gap-4">
        <p className="text-sm">In stock</p>
        <p className="text-sm">Quantity</p>
        {/* <Counter initialValue={1} maxValue={30} /> */}
        <button onClick={() => addProduct(product)} className="btn">
          Add to Cart
        </button>
        <button
          onClick={() => {
            addProduct(product);
            navigate("/cart");
          }}
          className="btn"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import { Link } from "react-router";

import ProductImage from "./ProductImage";

const ProductCardMedium = ({ product, addProduct }) => {
  return (
    <div key={product.id} className="box relative">
      <Link to={`/products/${product.id}`}>
        <div className="w-full h-48 object-contain bg-white">
          <ProductImage product={product} />
        </div>
        <h2>{product.title}</h2>
        <div className="flex ">
          {product.discount > 0 ? (
            <>
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
              <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2">
                <p className="translate-y-2.5">- {product.discount}%</p>
              </div>
            </>
          ) : (
            <p className="text-3xl font-bold">€ {product.price}</p>
          )}
        </div>
      </Link>
      <button
        onClick={() => addProduct(product)} // Call the addProduct function when the button is clicked
        className="btn btn-primary absolute bottom-0 left-0 m-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardMedium;

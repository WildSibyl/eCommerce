import React from "react";
import { Link } from "react-router";
import ProductImage from "./ProductImage";

const ProductCardSearch = ({ product, addProduct }) => {
  return (
    <div key={product.id} className="box md:longbox">
      <div className="flex flex-col md:flex-row">
        <div className="w-[182px] h-[182px] object-contain bg-white m-2 rounded-lg self-center">
          <ProductImage product={product} />
        </div>
        <div className="flex flex-col md:flex-row py-2 justify-between w-full">
          <div className="flex flex-col flex-grow">
            <Link to={`/products/${product.id}`}>
              <h2 className="font-semibold hover:underline mb-1 overflow-hidden text-ellipsis line-clamp-2 mx-4 md:mx-0">
                {product.title}
              </h2>
            </Link>

            {product.popular ? (
              <p className="font-semibold bg-accent pl-2 rounded-tr-lg rounded-br-full w-[160px]">
                POPULAR CHOICE
              </p>
            ) : null}
          </div>
          <div className="flex flex-col flex-shrink-0 items-end text-right w-full md:w-[160px] h-full justify-between">
            <div className="w-full flex flex-col">
              {product.discount > 0 ? (
                <div className="w-full md:w-[130px] md:mt-0 mt-4 flex flex-col md:self-end">
                  <div className="flex flex-col mt-0 m-4 self-center md:self-end">
                    <p className="text-3xl md:text-xl font-semibold">
                      €{" "}
                      {(
                        product.price -
                        product.price * (product.discount / 100)
                      ).toFixed(2)}
                    </p>
                    <p className="relative font-semibold self-center">
                      € {product.price.toFixed(2)}
                      <span className="absolute right-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                    </p>
                  </div>
                  <p className="text-xl font-semibold bg-error text-center rounded-l-2xl w-[130px] self-end">
                    {product.discount}% OFF!!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col mt-0 m-4">
                  <p className="text-xl font-semibold">
                    € {product.price.toFixed(2)}
                  </p>
                </div>
              )}
            </div>

            <div className="flex self-center md:justify-end md:self-end md:mr-2">
              <button
                onClick={() => addProduct(product)} // Call the addProduct function when the button is clicked
                className="btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSearch;

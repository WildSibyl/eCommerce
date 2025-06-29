import React from "react";
import { Link } from "react-router";
import ProductImage from "./ProductImage";
import { useAddToCart } from "../hooks/useCart";
import Counter from "./Counter";

const ProductCardLong = ({
  product,
  cart,
  addProduct,
  decreaseQuantity,
  removeProduct,
  cartItems,
}) => {
  return (
    <div key={product.id} className="box md:longbox">
      <div className="flex flex-col md:flex-row items-center justify-center h-full">
        <div className="w-[50px] md:w-[182px] md:h-[182px] object-contain bg-white m-2 rounded-lg ">
          <ProductImage product={product} />
        </div>
        <div className="flex flex-row py-2 justify-between md:h-[182px] w-full">
          <div className="flex flex-col flex-grow">
            <Link to={`/products/${product.id}`}>
              <h2 className="font-semibold hover:underline mb-1 overflow-hidden text-ellipsis line-clamp-2 md:ml-0 ml-4">
                {product.title}
              </h2>
            </Link>

            {product.popular ? (
              <p className="font-semibold bg-accent pl-2 rounded-tr-lg rounded-br-full w-[160px]">
                POPULAR CHOICE
              </p>
            ) : null}

            {/* QUANTITY COUNTER */}
            <Counter
              product={product}
              cartItems={cartItems}
              addProduct={addProduct}
              decreaseQuantity={decreaseQuantity}
              removeProduct={removeProduct}
            />
          </div>

          <div className="flex flex-col flex-shrink-0 items-end text-right w-[160px]">
            {product.discount > 0 ? (
              <div>
                <div className="flex flex-col mt-0 m-4">
                  <p className="text-xl font-semibold">
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
                <p className="text-xl font-semibold bg-error text-center rounded-l-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default ProductCardLong;

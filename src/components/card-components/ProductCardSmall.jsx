import React from "react";
import { Link } from "react-router";
import ProductImage from "./ProductImage";

const ProductCardSmall = ({ product }) => {
  return (
    <div
      key={product.id}
      className="rounded-lg shadow-sm bg-base-100 border border-base-200"
    >
      <Link to={`/products/${product.id}`} className="relative">
        <div className="bg-white rounded-tl-lg rounded-tr-lg">
          <div className="relative w-full h-48 object-contain rounded-lg p-2">
            <ProductImage product={product} />
            {product.popular ? (
              <p className="absolute bottom-0 left-0 font-semibold bg-accent pl-2 rounded-br-lg rounded-tr-full w-[100px]">
                POPULAR!
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-4 gap-2">
          {product.discount > 0 ? (
            <>
              <div className="flex items-center justify-center xl:flex-row flex-col">
                <p className="relative font-semibold mr-2 self-center">
                  € {product.price.toFixed(2)}
                  <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                </p>

                <p className="text-xl font-bold">
                  €{" "}
                  {(
                    product.price -
                    product.price * (product.discount / 100)
                  ).toFixed(2)}
                </p>
              </div>
              <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                <p className="translate-y-2.5">- {product.discount}%</p>
              </div>
            </>
          ) : (
            <p className="text-xl font-bold">€ {product.price.toFixed(2)}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCardSmall;

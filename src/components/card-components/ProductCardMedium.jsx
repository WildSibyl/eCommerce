import React from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../../hooks/useCart";
import ProductImage from "./ProductImage";

const ProductCardMedium = ({ product }) => {
  const { addProduct } = useCart();

  const navigate = useNavigate();

  return (
    <div key={product.id} className="box relative max-h-[397px]">
      <Link to={`/products/${product.id}`}>
        <div className="w-full h-48 object-contain bg-white rounded-lg">
          <ProductImage product={product} />
        </div>
        <div className="pt-4 px-4 flex flex-col justify-between">
          <h2 className="h-12 font-semibold overflow-hidden text-ellipsis line-clamp-2">
            {product.title}
          </h2>
          <div className="flex flex-col justify-between">
            {product.discount > 0 ? (
              <>
                <div className="flex my-2 mx-auto flex-col md:flex-row">
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
                <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                  <p className="translate-y-2.5">- {product.discount}%</p>
                </div>
              </>
            ) : (
              <div className="flex mx-auto my-2">
                <p className="text-3xl font-bold">
                  € {product.price.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
      <div className="flex flex-col justify-between mb-2">
        <div className="mx-auto">
          <button
            onClick={() => addProduct(product)} // Call the addProduct function when the button is clicked
            className="btn w-[110px]"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addProduct(product);
              navigate("/cart");
            }}
            className="btn w-[110px]"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardMedium;

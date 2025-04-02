import React, { useState } from "react";
import { Link } from "react-router";
import { useProducts } from "../hooks/useProductData";

const Products = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(products);

  return (
    <div
      id="cart-container"
      className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
      {products.map((product) => (
        <div key={product.id} className="box relative">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain bg-white"
            />
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
        </div>
      ))}
    </div>
  );
};

export default Products;

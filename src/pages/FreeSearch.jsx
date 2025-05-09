import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { useProducts } from "../hooks/useProductData"; // Custom hook to fetch products
import ProductCardSearch from "../card-components/ProductCardSearch";
import Product from "./Product";
import notFound from "../assets/not_found.png"; // Import the not found image

const FreeSearch = () => {
  const { searchQuery, addProduct } = useOutletContext(); // Get the searchQuery from the context
  const { products, loading, error } = useProducts(); // Fetch all products

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) => {
        const searchFields = [
          product.title,
          product.description,
          product.category,
          product.brand,
        ];
        return searchFields.some((field) =>
          field.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]); // Re-run filter when searchQuery or products change

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <CategoryBar />
      <div>
        {filteredProducts.length > 0 ? (
          <div className="flex flex-col px-[10%]">
            {filteredProducts.map((product) => (
              <ProductCardSearch
                key={product.id}
                product={product}
                addProduct={addProduct}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full lg:py-[5%]">
            <div className="flex flex-col items-center">
              <div className="max-w-[300px] mx-auto m-4">
                <img
                  src={notFound}
                  alt="a stylized illustration of a confused cat in an empty cart"
                />
              </div>
              <h2>No results found for "{searchQuery}". Try something else!</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FreeSearch;

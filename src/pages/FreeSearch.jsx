import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProductData";
import ProductCardSearch from "../components/card-components/ProductCardSearch";
import FilterBar from "../components/FilterBar";
import notFound from "../assets/not_found.png";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

const FreeSearch = () => {
  const { searchQuery } = useOutletContext(); // Get the searchQuery from
  const { addProduct } = useCart();
  const { products, loading, error } = useProducts(); // Fetch all products

  const [filteredSearchedProducts, setFilteredSearchedProducts] = useState([]);

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
      setFilteredSearchedProducts(filtered);
    } else {
      setFilteredSearchedProducts([]);
    }
  }, [searchQuery, products]); // Re-run filter when searchQuery or products change

  // Determine the base list to filter
  const baseProductsForFilter =
    searchQuery && filteredSearchedProducts.length > 0
      ? filteredSearchedProducts
      : products;

  // Run filters over the base list (filtered by search or not)
  const { filters, setFilters, availableOptions, filteredProducts } =
    useFilteredProducts(baseProductsForFilter);

  //console.log("Filtered Products:", baseProductsForFilter);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        availableOptions={availableOptions}
      />
      <div className="mt-4">
        {filteredProducts.length > 0 ? (
          <div className="flex flex-col gap-4 px-4 md:px-[10%]">
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
                  alt="a stylized illustration of a confused cat playing with a magnifying glass"
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

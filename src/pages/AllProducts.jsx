import React, { useState, useMemo, useEffect } from "react";
import { useProducts } from "../hooks/useProductData";
import { useCart } from "../hooks/useCart";
import ProductCardMedium from "../components/card-components/ProductCardMedium";
import FilterBar from "../components/FilterBar";
import notFound from "../assets/not_found.png";

const AllProducts = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { addProduct } = useCart();
  const { products, loading, error } = useProducts();

  const [filters, setFilters] = useState(null);

  useEffect(() => {
    if (products.length && !filters) {
      const prices = products.map((p) => p.price);
      setFilters({
        price: {
          min: Math.min(...prices),
          max: Math.max(...prices),
        },
        brands: [],
        colors: [],
        categories: [],
      });
    }
  }, [products, filters]);

  const availableOptions = useMemo(() => {
    const safeUnique = (arr) => [
      ...new Set(arr.filter((val) => typeof val === "string")),
    ];

    const brands = safeUnique(products.map((p) => p.brand?.toLowerCase()));
    const colors = safeUnique(products.map((p) => p.color?.toLowerCase()));
    const categories = safeUnique(
      products.map((p) => p.category?.toLowerCase())
    );
    const prices = products
      .map((p) => p.price)
      .filter((p) => typeof p === "number");

    return {
      brands,
      colors,
      categories,
      price: { min: Math.min(...prices), max: Math.max(...prices) },
    };
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!filters) return [];

    return products.filter((p) => {
      const withinPrice =
        p.price >= filters.price.min && p.price <= filters.price.max;

      const brandMatch =
        filters.brands.length === 0 ||
        filters.brands.some(
          (b) => b.toLowerCase() === (p.brand || "").toLowerCase()
        );

      const colorMatch =
        filters.colors.length === 0 ||
        filters.colors.some(
          (c) => c.toLowerCase() === (p.color || "").toLowerCase()
        );

      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.some(
          (d) => d.toLowerCase() === (p.category || "").toLowerCase()
        );

      return withinPrice && brandMatch && colorMatch && categoryMatch;
    });
  }, [products, filters]);

  if (loading || !filters) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(products);

  return (
    <>
      <div className="flex flex-col w-full">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          availableOptions={availableOptions}
        />
        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <div
              id="cart-container"
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4"
            >
              {filteredProducts.map((product) => (
                <ProductCardMedium
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full w-full lg:py-[5%]">
              <div className="flex flex-col items-center justify-center">
                <div className="max-w-[300px] mx-auto m-4">
                  <img
                    src={notFound}
                    alt="a stylized illustration of a confused cat playing with a magnifying glass"
                  />
                </div>
                <h2>No results match your filters. Try something else!</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;

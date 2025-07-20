import React, { useState, useMemo, useEffect } from "react";
import { useProducts } from "../hooks/useProductData";
import { useCart } from "../hooks/useCart";
import ProductCardMedium from "../components/card-components/ProductCardMedium";
import CategoryBar from "../components/CategoryBar";
import ProductFilter from "../components/ProductFilter";

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
        deals: [],
      });
    }
  }, [products, filters]);

  const availableOptions = useMemo(() => {
    const brands = [...new Set(products.map((p) => p.brand?.toLowerCase()))];
    const colors = [...new Set(products.map((p) => p.color?.toLowerCase()))];
    const deals = [...new Set(products.map((p) => p.deal?.toLowerCase()))];
    const prices = products.map((p) => p.price);
    return {
      brands,
      colors,
      deals,
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

      const dealMatch =
        filters.deals.length === 0 ||
        filters.deals.some(
          (d) => d.toLowerCase() === (p.deal || "").toLowerCase()
        );

      return withinPrice && brandMatch && colorMatch && dealMatch;
    });
  }, [products, filters]);

  if (loading || !filters) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(products);

  return (
    <>
      <CategoryBar />
      <div className="flex">
        <div className="w-64">
          <ProductFilter
            filters={filters}
            setFilters={setFilters}
            availableOptions={availableOptions}
          />
        </div>
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
      </div>
    </>
  );
};

export default AllProducts;

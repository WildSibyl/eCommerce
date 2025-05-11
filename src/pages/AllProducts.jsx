import React, { useState, useMemo } from "react";
import { useProducts } from "../hooks/useProductData";
import { useOutletContext } from "react-router";
import ProductCardMedium from "../card-components/ProductCardMedium";
import CategoryBar from "../components/CategoryBar";
import ProductFilter from "../components/ProductFilter";

const AllProducts = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { addProduct } = useOutletContext();
  const { products, loading, error } = useProducts();

  const [filters, setFilters] = useState({
    price: 1000,
    brands: [],
    colors: [],
    deals: [],
  });

  const availableOptions = useMemo(() => {
    const brands = [...new Set(products.map((p) => p.brand))];
    const colors = [...new Set(products.map((p) => p.color))];
    const deals = [...new Set(products.map((p) => p.deal))];
    const prices = products.map((p) => p.price);
    return {
      brands,
      colors,
      deals,
      price: { min: Math.min(...prices), max: Math.max(...prices) },
    };
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const withinPrice = p.price <= filters.price;
      const brandMatch =
        filters.brands.length === 0 || filters.brands.includes(p.brand);
      const colorMatch =
        filters.colors.length === 0 || filters.colors.includes(p.color);
      const dealMatch =
        filters.deals.length === 0 || filters.deals.includes(p.deal);

      return withinPrice && brandMatch && colorMatch && dealMatch;
    });
  }, [products, filters]);

  if (loading) return <div>Loading...</div>;
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

import React, { useState, useEffect, useMemo } from "react";
import { useCategory, useProducts } from "../hooks/useProductData";
import { useParams } from "react-router";
import { useCart } from "../hooks/useCart";
import ProductCardMedium from "../components/card-components/ProductCardMedium";
import FilterBar from "../components/FilterBar";

const Category = () => {
  const { productCategory } = useParams();
  console.log(` Category: ${productCategory}`);

  const { addProduct } = useCart();
  const { products, loading, error } = useProducts();
  const { category } = useCategory(productCategory);

  const [filters, setFilters] = useState(null);

  const categoryProducts = products.filter(
    (product) =>
      product.category?.toLowerCase() === productCategory.toLowerCase()
  );

  useEffect(() => {
    if (categoryProducts.length && !filters) {
      const prices = categoryProducts.map((p) => p.price);
      setFilters({
        price: {
          min: Math.min(...prices),
          max: Math.max(...prices),
        },
        brands: [],
        colors: [],
      });
    }
  }, [products, filters]);

  const availableOptions = useMemo(() => {
    const safeUnique = (arr) => [
      ...new Set(arr.filter((val) => typeof val === "string")),
    ];

    const brands = safeUnique(
      categoryProducts.map((p) => p.brand?.toLowerCase())
    );
    const colors = safeUnique(
      categoryProducts.map((p) => p.color?.toLowerCase())
    );

    const prices = products
      .map((p) => p.price)
      .filter((p) => typeof p === "number");

    return {
      brands,
      colors,
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
        p.category?.toLowerCase() === productCategory.toLowerCase();

      return withinPrice && brandMatch && colorMatch && categoryMatch;
    });
  }, [products, filters]);

  if (loading || !filters) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("category:", category);
  console.log("availableOptions:", availableOptions);

  return (
    <>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        availableOptions={availableOptions}
      />
      <div
        id="cart-container "
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4"
      >
        {filteredProducts.map((product) => (
          <ProductCardMedium
            key={product.id}
            product={product}
            addProduct={addProduct}
          /> // Use ProductCardMedium for larger cards
        ))}
      </div>
    </>
  );
};

export default Category;

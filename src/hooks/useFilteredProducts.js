// hooks/useFilteredProducts.js
import { useState, useEffect, useMemo } from "react";

export function useFilteredProducts(products, initialFilterOptions = {}) {
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
        ...initialFilterOptions,
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
      price: {
        min: Math.min(...prices),
        max: Math.max(...prices),
      },
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
        !filters.categories ||
        filters.categories.length === 0 ||
        filters.categories.some(
          (cat) => cat.toLowerCase() === (p.category || "").toLowerCase()
        );

      return withinPrice && brandMatch && colorMatch && categoryMatch;
    });
  }, [products, filters]);

  return { filters, setFilters, availableOptions, filteredProducts };
}

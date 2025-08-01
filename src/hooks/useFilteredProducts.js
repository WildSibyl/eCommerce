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
        popular: false,
        sortBy: "",
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
    const hasPopular = products.some(
      (p) => p.hasOwnProperty("popular") && p.popular === true
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
      popular: hasPopular,
    };
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!filters) return [];

    const result = products.filter((p) => {
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

      const popularMatch = !filters.popular || p.popular === true;

      return (
        withinPrice && brandMatch && colorMatch && categoryMatch && popularMatch
      );
    });

    if (filters.sortBy === "priceLowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "priceHighToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, filters]);

  return { filters, setFilters, availableOptions, filteredProducts };
}

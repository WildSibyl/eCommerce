import React, { useState } from "react";
import DoubleRangeSlider from "./DoubleRangeSlider";

const ProductFilter = ({ filters, setFilters, availableOptions }) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const isSelected = prev[category].includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      };
    });
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="p-4 space-y-4 bg-base-100 rounded-lg shadow w-50 h-[85dvh] overflow-y-auto absolute top-[50px] left-0 z-10">
      <DoubleRangeSlider
        priceRange={filters.price}
        setPriceRange={(range) =>
          setFilters((prev) => ({ ...prev, price: range }))
        }
        min={availableOptions.price.min}
        max={availableOptions.price.max}
      />

      <div>
        <h4 className="font-semibold capitalize">Sort by</h4>
        <select
          value={filters.sortBy}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
          }
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Relevance</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      {["categories", "brands", "colors"].map((category) => {
        const options = [...availableOptions[category]].sort((a, b) =>
          String(a).localeCompare(String(b))
        );

        if (category === "categories" && options.length <= 1) return null;

        const isExpanded = expandedCategories[category];
        const shownOptions = isExpanded ? options : options.slice(0, 6);

        return (
          <div key={category}>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold capitalize">{category}</h4>
              {options.length > 6 && (
                <button
                  className="text-blue-600 text-sm font-bold hover:underline cursor-pointer mt-1"
                  onClick={() => toggleCategory(category)}
                >
                  {isExpanded ? "Less" : "More"}
                </button>
              )}
            </div>
            <div className="max-h-70 overflow-y-auto">
              {shownOptions.map((option) => (
                <label
                  key={`${category}-${option}`}
                  className="flex items-center justify-start"
                >
                  <input
                    type="checkbox"
                    checked={filters[category].includes(option)}
                    onChange={() => handleCheckboxChange(category, option)}
                    className="h-4 w-4 ml-1 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                    style={{ accentColor: "#1F46E5" }}
                  />
                  <span className="ml-2 cursor-pointer">
                    {typeof option === "string"
                      ? option.charAt(0).toUpperCase() + option.slice(1)
                      : ""}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      })}

      {availableOptions.popular && (
        <div>
          <h4 className="font-semibold capitalize">Popularity</h4>
          <label className="flex items-center justify-start">
            <input
              type="checkbox"
              checked={filters.popular}
              onChange={() =>
                setFilters((prev) => ({ ...prev, popular: !prev.popular }))
              }
              className="h-4 w-4 ml-1 focus:ring-blue-500 focus:ring-2 cursor-pointer"
              style={{ accentColor: "#1F46E5" }}
            />
            <span className="ml-2 cursor-pointer">Only popular items</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;

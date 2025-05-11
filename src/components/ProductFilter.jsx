import React, { useState } from "react";

const ProductFilter = ({ filters, setFilters, availableOptions }) => {
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

  return (
    <div className="p-4 space-y-4 bg-base-100 rounded shadow">
      <div>
        <h3 className="font-semibold mb-2">Price: ${filters.price}</h3>
        <input
          type="range"
          min={availableOptions.price.min}
          max={availableOptions.price.max}
          value={filters.price}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, price: Number(e.target.value) }))
          }
        />
      </div>

      {["brands", "colors", "deals"].map((category) => (
        <div key={category}>
          <h4 className="font-semibold capitalize">{category}</h4>
          {availableOptions[category].map((option) => (
            <label key={option} className="block">
              <input
                type="checkbox"
                checked={filters[category].includes(option)}
                onChange={() => handleCheckboxChange(category, option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;

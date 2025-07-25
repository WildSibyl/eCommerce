import { useState, useEffect } from "react";
import ProductFilter from "../components/ProductFilter";

const FilterBar = ({ filters, setFilters, availableOptions }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const toggleFilter = () => {
    setFilterIsOpen((prev) => !prev);
  };

  return (
    <div className="flex relative bg-blue-600 h-[50px] w-full items-center mb-4 px-4 gap-4">
      <p className="text-xl font-bold text-white">Category name</p>
      <button onClick={toggleFilter} className="btn">
        <span>Filters</span>
      </button>
      {filterIsOpen && (
        <ProductFilter
          filters={filters}
          setFilters={setFilters}
          availableOptions={availableOptions}
        />
      )}
    </div>
  );
};

export default FilterBar;

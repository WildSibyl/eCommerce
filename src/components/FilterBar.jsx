import { useState } from "react";
import { useParams } from "react-router";
import ProductFilter from "../components/ProductFilter";
import ProductCategoryFilter from "./ProductCategoryFilter";

const FilterBar = ({ filters, setFilters, availableOptions }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [categoryFilterIsOpen, setCategoryFilterIsOpen] = useState(false);

  const { productCategory } = useParams();

  const pageName =
    productCategory.charAt(0).toUpperCase() +
    productCategory.slice(1).toLowerCase();

  const toggleFilter = () => {
    setFilterIsOpen((prev) => !prev);
  };

  const toggleCategoryFilter = () => {
    setCategoryFilterIsOpen((prev) => !prev);
  };

  return (
    <div className="flex relative bg-blue-600 h-[50px] w-full items-center mb-4 px-4 gap-4">
      <p className="text-xl font-bold text-white">{pageName}</p>
      {/* All products and deals pages have the categories property */}
      {availableOptions.categories && (
        <button onClick={toggleFilter} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
      )}
      {filterIsOpen && (
        <ProductFilter
          filters={filters}
          setFilters={setFilters}
          availableOptions={availableOptions}
        />
      )}
      {/* Category pages don't have the categories property */}
      {!availableOptions.categories && (
        <button onClick={toggleCategoryFilter} className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
      )}
      {categoryFilterIsOpen && (
        <ProductCategoryFilter
          filters={filters}
          setFilters={setFilters}
          availableOptions={availableOptions}
        />
      )}
    </div>
  );
};

export default FilterBar;

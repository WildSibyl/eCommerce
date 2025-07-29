import { useState } from "react";
import { useParams } from "react-router";
import ProductFilter from "./filter-components/ProductFilter";
import CategoryList from "./navbar-components/CategoryList";
import CategoryModal from "./navbar-components/CategoryModal";

const FilterBar = ({ filters, setFilters, availableOptions }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const { productCategory } = useParams();
  const locationPath = location.pathname;

  const categoryName =
    productCategory?.charAt(0).toUpperCase() +
    productCategory?.slice(1).toLowerCase();
  const pathName = "All " + locationPath?.slice(1).toLowerCase();

  const pageName = categoryName || pathName;

  const toggleFilter = () => {
    setFilterIsOpen((prev) => !prev);
  };

  const handleOpenModal = () => {
    setCategoryModalOpen(true);
  };

  const handleCloseModal = () => {
    setCategoryModalOpen(false);
  };

  //console.log("categoryFilterIsOpen:", categoryFilterIsOpen);
  //console.log("filterIsOpen:", filterIsOpen);

  return (
    <div className="flex relative bg-blue-600 h-[50px] w-full items-center justify-between mb-4 px-4">
      <p className="flex shrink-0 text-xl font-bold text-white md:hidden mx-4">
        {pageName}
      </p>
      {/* All products and deals pages have the categories property */}
      {availableOptions.categories && (
        <button onClick={toggleFilter} className="btn mr-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
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

      <div className="hidden md:flex flex-grow justify-center items-center">
        <CategoryList />
      </div>

      <div className="flex items-center justify-center px-2 md:hidden">
        <button onClick={handleOpenModal} className="btn m-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="size-7 cursor-pointer lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {categoryModalOpen && (
          <CategoryModal handleCloseModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default FilterBar;

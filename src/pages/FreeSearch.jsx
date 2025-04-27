import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { useProducts } from "../hooks/useProductData"; // Custom hook to fetch products

const FreeSearch = () => {
  const { searchQuery } = useOutletContext(); // Get the searchQuery from the context
  const { products, loading, error } = useProducts(); // Fetch all products

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]); // Re-run filter when searchQuery or products change

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              {/* Other product details */}
            </div>
          ))}
        </div>
      ) : (
        <div>No results found for "{searchQuery}"</div>
      )}
    </div>
  );
};

export default FreeSearch;

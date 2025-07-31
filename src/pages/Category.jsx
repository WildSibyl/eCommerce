import { useMemo } from "react";
import { useCategory, useProducts } from "../hooks/useProductData";
import { useParams } from "react-router";
import { useCart } from "../hooks/useCart";
import ProductCardMedium from "../components/card-components/ProductCardMedium";
import FilterBar from "../components/FilterBar";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

const Category = () => {
  const { productCategory } = useParams();
  //console.log(` Category: ${productCategory}`);

  const { addProduct } = useCart();
  const { products, loading, error } = useProducts();
  const { category } = useCategory(productCategory);

  const categoryProducts = useMemo(
    () =>
      products.filter(
        (p) => p.category?.toLowerCase() === productCategory.toLowerCase()
      ),
    [products, productCategory]
  );

  const { filters, setFilters, availableOptions, filteredProducts } =
    useFilteredProducts(categoryProducts);

  if (loading || !filters) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  //console.log("category:", category);
  //console.log("availableOptions:", availableOptions);

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

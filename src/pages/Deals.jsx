import { useProducts } from "../hooks/useProductData";
import { useCart } from "../hooks/useCart";
import ProductCardMedium from "../components/card-components/ProductCardMedium";
import FilterBar from "../components/FilterBar";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

const Deals = () => {
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  const { addProduct } = useCart();
  const { products, loading, error } = useProducts();

  const { filters, setFilters, availableOptions, filteredProducts } =
    useFilteredProducts(products);

  if (loading || !filters) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const discountedProducts = filteredProducts.filter((p) => p.discount > 0);

  return (
    <>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        availableOptions={availableOptions}
      />
      <div
        id="cart-container"
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4"
      >
        {discountedProducts.map((product) => (
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

export default Deals;

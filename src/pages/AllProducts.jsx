import { useProducts } from "../hooks/useProductData";
import { useCart } from "../hooks/useCart";
import ProductCardMedium from "../components/card-components/ProductCardMedium";
import FilterBar from "../components/FilterBar";
import notFound from "../assets/not_found.png";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

const AllProducts = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { addProduct } = useCart();
  const { products, loading, error } = useProducts();

  const { filters, setFilters, availableOptions, filteredProducts } =
    useFilteredProducts(products);

  if (loading || !filters) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex flex-col w-full">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          availableOptions={availableOptions}
        />
        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <div
              id="cart-container"
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4"
            >
              {filteredProducts.map((product) => (
                <ProductCardMedium
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full w-full lg:py-[5%]">
              <div className="flex flex-col items-center justify-center">
                <div className="max-w-[300px] mx-auto m-4">
                  <img
                    src={notFound}
                    alt="a stylized illustration of a confused cat playing with a magnifying glass"
                  />
                </div>
                <h2>No results match your filters. Try something else!</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;

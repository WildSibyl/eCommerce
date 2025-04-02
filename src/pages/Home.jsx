import React from "react";
import { Link } from "react-router";
import { useProducts } from "../hooks/useProductData";
import { useCategory } from "../hooks/useProductData";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const appliances = products
    .filter((product) => product.category === "appliances")
    .slice(0, 4);

  const tv = products
    .filter((product) => product.category === "tv")
    .slice(0, 4);

  const audio = products
    .filter((product) => product.category === "audio")
    .slice(0, 4);

  const mobile = products
    .filter((product) => product.category === "mobile")
    .slice(0, 4);

  const laptop = products
    .filter((product) => product.category === "laptop")
    .slice(0, 4);

  const gaming = products
    .filter((product) => product.category === "gaming")
    .slice(0, 4);

  const deals = products.filter((product) => product.discount > 24).slice(0, 4);

  return (
    <div id="home-container mx-[10%]">
      <hero className="hero box h-[300px] p-2 px-[10%] mb-4">
        <carousel>Hero carousel</carousel>
      </hero>
      <div
        id="category-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div className="box p-2">
          <p className="text-xl font-bold text-center mb-4">Chosen for you</p>
          <div
            id="cart-container"
            className="grid grid-cols-2 grid-rows-2 gap-2"
          >
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <Link to={`/products/${product.id}`} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg p-2"
                  />
                  <div className="flex flex-col items-center justify-center my-4 gap-2">
                    {product.discount > 0 ? (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="relative font-semibold mr-2 self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>

                          <p className="text-xl font-bold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                        <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                          <p className="translate-y-2.5">
                            - {product.discount}%
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-xl font-bold">€ {product.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="box p-2">
          <p className="text-xl font-bold text-center mb-4">Appliances</p>
          <div
            id="cart-container"
            className="grid grid-cols-2 grid-rows-2 gap-2"
          >
            {appliances.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <Link to={`/products/${product.id}`} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg p-2"
                  />
                  <div className="flex flex-col items-center justify-center my-4 gap-2">
                    {product.discount > 0 ? (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="relative font-semibold mr-2 self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>

                          <p className="text-xl font-bold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                        <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                          <p className="translate-y-2.5">
                            - {product.discount}%
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-xl font-bold">€ {product.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="box p-2">
          <p className="text-xl font-bold text-center mb-4">Tv</p>
          <div
            id="cart-container"
            className="grid grid-cols-2 grid-rows-2 gap-2"
          >
            {tv.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <Link to={`/products/${product.id}`} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg p-2"
                  />
                  <div className="flex flex-col items-center justify-center my-4 gap-2">
                    {product.discount > 0 ? (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="relative font-semibold mr-2 self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>

                          <p className="text-xl font-bold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                        <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                          <p className="translate-y-2.5">
                            - {product.discount}%
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-xl font-bold">€ {product.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="box p-2">
          <p className="text-xl font-bold text-center mb-4">Best Deals</p>
          <div
            id="cart-container"
            className="grid grid-cols-2 grid-rows-2 gap-2"
          >
            {deals.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <Link to={`/products/${product.id}`} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg p-2"
                  />
                  <div className="flex flex-col items-center justify-center my-4 gap-2">
                    {product.discount > 0 ? (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="relative font-semibold mr-2 self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>

                          <p className="text-xl font-bold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                        <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                          <p className="translate-y-2.5">
                            - {product.discount}%
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-xl font-bold">€ {product.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="box p-2">
          <p className="text-xl font-bold text-center mb-4">Audio</p>
          <div
            id="cart-container"
            className="grid grid-cols-2 grid-rows-2 gap-2"
          >
            {audio.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <Link to={`/products/${product.id}`} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg p-2"
                  />
                  <div className="flex flex-col items-center justify-center my-4 gap-2">
                    {product.discount > 0 ? (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="relative font-semibold mr-2 self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>

                          <p className="text-xl font-bold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                        <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                          <p className="translate-y-2.5">
                            - {product.discount}%
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-xl font-bold">€ {product.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="box p-2">
          <p className="text-xl font-bold text-center mb-4">Mobile</p>
          <div
            id="cart-container"
            className="grid grid-cols-2 grid-rows-2 gap-2"
          >
            {mobile.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <Link to={`/products/${product.id}`} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg p-2"
                  />
                  <div className="flex flex-col items-center justify-center my-4 gap-2">
                    {product.discount > 0 ? (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="relative font-semibold mr-2 self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>

                          <p className="text-xl font-bold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                        <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                          <p className="translate-y-2.5">
                            - {product.discount}%
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-xl font-bold">€ {product.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="box p-2">
          <p className="text-xl font-bold text-center mb-4">Laptop</p>
          <div
            id="cart-container"
            className="grid grid-cols-2 grid-rows-2 gap-2"
          >
            {laptop.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <Link to={`/products/${product.id}`} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg p-2"
                  />
                  <div className="flex flex-col items-center justify-center my-4 gap-2">
                    {product.discount > 0 ? (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="relative font-semibold mr-2 self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>

                          <p className="text-xl font-bold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                        <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                          <p className="translate-y-2.5">
                            - {product.discount}%
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-xl font-bold">€ {product.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="box p-2">
          <p className="text-xl font-bold text-center mb-4">Gaming</p>
          <div
            id="cart-container"
            className="grid grid-cols-2 grid-rows-2 gap-2"
          >
            {gaming.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <Link to={`/products/${product.id}`} className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-lg p-2"
                  />
                  <div className="flex flex-col items-center justify-center my-4 gap-2">
                    {product.discount > 0 ? (
                      <>
                        <div className="flex items-center justify-center">
                          <p className="relative font-semibold mr-2 self-center">
                            € {product.price.toFixed(2)}
                            <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-base-content rotate-[-10deg]"></span>
                          </p>

                          <p className="text-xl font-bold">
                            €{" "}
                            {(
                              product.price -
                              product.price * (product.discount / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                        <div className="h-[60px] w-[60px] font-bold bg-error text-center rounded-full border-8 border-error absolute top-0 right-0 m-2 shadow-md">
                          <p className="translate-y-2.5">
                            - {product.discount}%
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-xl font-bold">€ {product.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router";
import { useProducts } from "../hooks/useProductData";
import { useCategory } from "../hooks/useProductData";
import ProductCardSmall from "../card-components/ProductCardSmall";
import Product from "./Product";

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
              <ProductCardSmall key={product.id} product={product} />
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
              <ProductCardSmall key={product.id} product={product} />
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
              <ProductCardSmall key={product.id} product={product} />
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
              <ProductCardSmall key={product.id} product={product} />
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
              <ProductCardSmall key={product.id} product={product} />
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
              <ProductCardSmall key={product.id} product={product} />
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
              <ProductCardSmall key={product.id} product={product} />
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
              <ProductCardSmall key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;

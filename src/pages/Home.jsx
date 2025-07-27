import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useProducts } from "../hooks/useProductData";
import ProductCardSmall from "../components/card-components/ProductCardSmall";
import HeroCarousel from "../components/HeroCarousel";
import CategoryBar from "../components/CategoryBar";
import DisclaimerModal from "../components/DisclaimerModal";

const Home = () => {
  const [infoModalOpen, setInfoModalOpen] = useState(true);
  const [acceptedInfo, setAcceptedInfo] = useState(false);
  const { products, loading, error } = useProducts();

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

  useEffect(() => {
    const hasAccepted = localStorage.getItem("acceptTerms");
    if (hasAccepted === "true") {
      setInfoModalOpen(false);
    }
  }, []);

  const handleCloseModal = () => {
    setInfoModalOpen(false);
    localStorage.setItem("acceptTerms", "true");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <CategoryBar />
      <div className=" mx-[5%] ">
        <div className="h-[400px] mx-[5%] my-4 rounded-lg shadow-md">
          <HeroCarousel />
        </div>
        <div
          id="category-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [@media(min-width:1720px)]:grid-cols-4 gap-4"
        >
          <div className="flex flex-col p-2 bg-base-200 items-center rounded-lg">
            <Link to="/products">
              <button className="text-xl font-bold text-center mb-4 cursor-pointer hover:underline">
                Chosen for you
              </button>
            </Link>
            <div
              id="cart-container"
              className="grid grid-cols-2 grid-rows-2 gap-2"
            >
              {products.slice(0, 4).map((product) => (
                <ProductCardSmall key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-col p-2 bg-base-200 items-center rounded-lg">
            <Link to="/category/appliances">
              <button className="text-xl font-bold text-center mb-4 cursor-pointer hover:underline">
                Appliances
              </button>
            </Link>
            <div
              id="cart-container"
              className="grid grid-cols-2 grid-rows-2 gap-2"
            >
              {appliances.map((product) => (
                <ProductCardSmall key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-col p-2 bg-base-200 items-center rounded-lg">
            <Link to="/category/tv">
              <button className="text-xl font-bold text-center mb-4 cursor-pointer hover:underline">
                TV
              </button>
            </Link>
            <div
              id="cart-container"
              className="grid grid-cols-2 grid-rows-2 gap-2"
            >
              {tv.map((product) => (
                <ProductCardSmall key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-col p-2 bg-base-200 items-center rounded-lg">
            <Link to="/deals">
              <button className="text-xl font-bold text-center mb-4 cursor-pointer hover:underline">
                Best Deals
              </button>
            </Link>
            <div
              id="cart-container"
              className="grid grid-cols-2 grid-rows-2 gap-2"
            >
              {deals.map((product) => (
                <ProductCardSmall key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-col p-2 bg-base-200 items-center rounded-lg">
            <Link to="/category/audio">
              <button className="text-xl font-bold text-center mb-4 cursor-pointer hover:underline">
                Audio
              </button>
            </Link>
            <div
              id="cart-container"
              className="grid grid-cols-2 grid-rows-2 gap-2"
            >
              {audio.map((product) => (
                <ProductCardSmall key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-col p-2 bg-base-200 items-center rounded-lg">
            <Link to="/category/mobile">
              <button className="text-xl font-bold text-center mb-4 cursor-pointer hover:underline">
                Mobile
              </button>
            </Link>
            <div
              id="cart-container"
              className="grid grid-cols-2 grid-rows-2 gap-2"
            >
              {mobile.map((product) => (
                <ProductCardSmall key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-col p-2 bg-base-200 items-center rounded-lg">
            <Link to="/category/laptop">
              <button className="text-xl font-bold text-center mb-4 cursor-pointer hover:underline">
                Laptop
              </button>
            </Link>
            <div
              id="cart-container"
              className="grid grid-cols-2 grid-rows-2 gap-2"
            >
              {laptop.map((product) => (
                <ProductCardSmall key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-col p-2 bg-base-200 items-center rounded-lg">
            <Link to="/category/gaming">
              <button className="text-xl font-bold text-center mb-4 cursor-pointer hover:underline">
                Gaming
              </button>
            </Link>
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
        {infoModalOpen && (
          <DisclaimerModal
            handleCloseModal={handleCloseModal}
            acceptedInfo={acceptedInfo}
            setAcceptedInfo={setAcceptedInfo}
          />
        )}
      </div>
    </>
  );
};

export default Home;

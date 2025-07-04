import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProductData";
import ProductCardSmall from "../card-components/ProductCardSmall";
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
        <div className="h-[400px] mx-[5%] mb-4 rounded-lg shadow-md">
          <HeroCarousel />
        </div>
        <div
          id="category-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [@media(min-width:1720px)]:grid-cols-4 gap-4"
        >
          <div className="box p-2 bg-base-200">
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
          <div className="box p-2 bg-base-200">
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
          <div className="box p-2 bg-base-200">
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
          <div className="box p-2 bg-base-200">
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
          <div className="box p-2 bg-base-200">
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
          <div className="box p-2 bg-base-200">
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
          <div className="box p-2 bg-base-200">
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
          <div className="box p-2 bg-base-200">
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

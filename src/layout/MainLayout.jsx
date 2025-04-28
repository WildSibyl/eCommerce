import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router";
import { useState } from "react";
import { useAddToCart } from "../hooks/useLocalStorage.js";

// This is a Layout component, using React's composable nature
const MainLayout = () => {
  const [signedIn, setSignedIn] = useState(false);
  const { cart, addProduct, decreaseQuantity, removeProduct, cartItems } =
    useAddToCart();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query in the state
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        signedIn={signedIn}
        setSignedIn={setSignedIn}
        cartItems={cartItems}
        onSearch={handleSearch}
      />
      <div className="flex-grow">
        {/* The Outlet component is a placeholder for children components under this route */}
        <Outlet
          context={{
            signedIn,
            setSignedIn,
            cart,
            addProduct,
            decreaseQuantity,
            removeProduct,
            cartItems,
            searchQuery,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

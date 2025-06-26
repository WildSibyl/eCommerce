import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import { useAddToCart } from "../hooks/useLocalStorage";
import {
  AuthContextProvider,
  AuthContext,
} from "../context/AuthContextProvider";
import { ToastContainer } from "react-toastify";
import WelcomeModal from "../components/reg-comp/WelcomeModal";
import { WelcomeModalContextProvider } from "../context/WelcomeModalContextProvider";

// This is a Layout component, using React's composable nature
const MainLayout = () => {
  const { cart, addProduct, decreaseQuantity, removeProduct, cartItems } =
    useAddToCart();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query in the state
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-300">
      <AuthContextProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <WelcomeModalContextProvider>
          <WelcomeModal />
          <Navbar cartItems={cartItems} onSearch={handleSearch} />

          <div className="flex-grow">
            {/* The Outlet component is a placeholder for children components under this route */}
            <Outlet
              context={{
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
        </WelcomeModalContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default MainLayout;

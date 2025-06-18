import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import { useAddToCart } from "../hooks/useLocalStorage";
import { AuthContextProvider } from "../context/AuthContextProvider";
import { ToastContainer } from "react-toastify";
import WelcomeModal from "../components/reg-comp/WelcomeModal";
import { WelcomeModalContextProvider } from "../context/WelcomeModalContextProvider";

// This is a Layout component, using React's composable nature
const MainLayout = () => {
  const [signedIn, setSignedIn] = useState(false);
  const { cart, addProduct, decreaseQuantity, removeProduct, cartItems } =
    useAddToCart();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query in the state
  };

  const [addressFormData, setAddressFormData] = useState({
    fullName: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  return (
    <div className="flex flex-col min-h-screen bg-base-300">
      <AuthContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <WelcomeModalContextProvider>
          <WelcomeModal />
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
                addressFormData,
                setAddressFormData,
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

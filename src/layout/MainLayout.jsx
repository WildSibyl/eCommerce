import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WelcomeModal from "../components/reg-components/WelcomeModal";
import { Outlet } from "react-router";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  AuthContextProvider,
  AuthContext,
} from "../context/AuthContextProvider";
import { WelcomeModalContextProvider } from "../context/WelcomeModalContextProvider";
import { CartContextProvider } from "../context/CartContextProvider";

// This is a Layout component, using React's composable nature
const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query in the state
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-300">
      <AuthContextProvider>
        <CartContextProvider>
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
            <Navbar onSearch={handleSearch} />
            <WelcomeModal />
            <div className="flex-grow">
              {/* The Outlet component is a placeholder for children components under this route */}
              <Outlet
                context={{
                  searchQuery,
                }}
              />
            </div>
            <Footer />
          </WelcomeModalContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default MainLayout;

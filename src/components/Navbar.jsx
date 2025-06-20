import React from "react";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import websiteLogo from "../assets/shopping-bag-icon.png";
import cartIcon from "../assets/shopping-cart-icon.png";
import Searchbar from "./Searchbar";
import ProfileDropdown from "./ProfileDropdown";
//import { useOutletContext } from "react-router";

// This component simply renders a navigation bar
const Navbar = ({ user, setUser, cartItems, onSearch }) => {
  //const { cartItems } = useOutletContext();

  const handleAuthClick = () => {
    setUser((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-blue-900 p-2 flex flex-wrap shadow-md justify-around">
        <Link to="/">
          <div className="pt-0.5 mx-3 flex flex-row">
            <img
              src={websiteLogo}
              alt="Website logo"
              className="h-[30px] md:mr-2 "
            />
            <div className=" self-center text-white font-bold hidden md:block">
              eCommerce
            </div>
          </div>
        </Link>

        <div className="flex md:flex-grow md:w-auto px-2">
          <Searchbar onSearch={onSearch} />
        </div>

        <ThemeToggle />
        {user ? (
          <div className="flex flex-row">
            <ProfileDropdown handleAuthClick={handleAuthClick} user={user} />
          </div>
        ) : (
          <Link to="/login">
            <div className="pt-1 mx-4 flex flex-row">
              <button
                onClick={handleAuthClick}
                className=" self-center text-white font-bold "
              >
                {user ? "Log out" : "Login"}
              </button>
            </div>
          </Link>
        )}
        <Link to="/cart">
          <div className="pt-0.5 mx-4 flex flex-row">
            <div className=" self-center text-white font-bold hidden md:block">
              Cart
            </div>
            <div className="relative flex items-center justify-center">
              <img src={cartIcon} alt="Cart icon" className="h-[30px] ml-2" />
              <span className="absolute -top-1 -right-2 text-white text-center rounded-full w-10.5 h-6 flex items-center justify-center">
                {cartItems > 99 ? (
                  <div className="text-[10px]">99+</div>
                ) : (
                  <span className="font-semibold text-xs">{cartItems}</span>
                )}
              </span>
            </div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

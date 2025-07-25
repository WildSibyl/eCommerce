import React from "react";
import { Link } from "react-router";
import ThemeToggle from "./navbar-components/ThemeToggle";
import websiteLogo from "../assets/logo-icon.png";
import cartIcon from "../assets/shopping-cart-icon.png";
import Searchbar from "./navbar-components/Searchbar";
import ProfileDropdown from "./navbar-components/ProfileDropdown";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

// This component simply renders a navigation bar
const Navbar = ({ onSearch }) => {
  const { user, setUser, logOut } = useAuth();
  const { cartItems } = useCart();

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
              MIAOutlet
            </div>
          </div>
        </Link>

        <div className="flex md:flex-grow md:w-auto px-2">
          <Searchbar onSearch={onSearch} />
        </div>

        <ThemeToggle />
        {user ? (
          <div className="flex flex-row justify-center items-center">
            <ProfileDropdown user={user} logOut={logOut} />
          </div>
        ) : (
          <Link to="/login">
            <div className="pt-1 mx-4 flex flex-row justify-center items-center">
              <button className="self-center text-white font-bold">
                Login
              </button>
            </div>
          </Link>
        )}
        <Link to="/cart">
          <div className=" mx-4 flex flex-row">
            <div className="self-center text-white font-bold hidden md:block">
              Cart
            </div>
            <div className="relative flex items-center justify-center pt-0.5">
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

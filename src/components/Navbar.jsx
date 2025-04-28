import React from "react";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import websiteLogo from "../assets/shopping-bag-icon.png";
import cartIcon from "../assets/shopping-cart-icon.png";
import Searchbar from "./Searchbar";
//import { useOutletContext } from "react-router";

// This component simply renders a navigation bar
const Navbar = ({ signedIn, setSignedIn, cartItems, onSearch }) => {
  //const { cartItems } = useOutletContext();

  const handleAuthClick = () => {
    setSignedIn((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-blue-900 p-2 flex flex-wrap sticky top-0 z-20 shadow-md justify-around">
        <Link to="/">
          <div className="pt-0.5 mx-3 flex flex-row">
            <img
              src={websiteLogo}
              alt="Website logo"
              className="h-[30px] mr-2 "
            />
            <div className=" self-center text-white font-bold ">eCommerce</div>
          </div>
        </Link>

        <div className="flex flex-grow px-2">
          <Searchbar onSearch={onSearch} />
        </div>

        <ThemeToggle />
        {signedIn ? (
          <div className="flex flex-row">
            <Link to="/profile">
              <div className="pt-1 mx-4 flex flex-row">
                <div className=" self-center text-white font-bold ">
                  Profile
                </div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="Profile icon"
                  className="h-[30px] ml-2"
                />
              </div>
            </Link>
            <div className="pt-1 mx-4 flex flex-row">
              <button
                onClick={handleAuthClick}
                className=" self-center text-white font-bold "
              >
                {signedIn ? "Log out" : "Login"}
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className="pt-1 mx-4 flex flex-row">
              <button
                onClick={handleAuthClick}
                className=" self-center text-white font-bold "
              >
                {signedIn ? "Log out" : "Login"}
              </button>
            </div>
          </Link>
        )}
        <Link to="/cart">
          <div className="pt-0.5 mx-4 flex flex-row">
            <div className=" self-center text-white font-bold ">Cart</div>
            <img src={cartIcon} alt="Cart icon" className="h-[30px] ml-2" />
            <span className="absolute top-1.5 right-4 text-white text-center rounded-full w-10.5 h-6 flex items-center justify-center">
              {cartItems > 99 ? (
                <div className="text-[10px]">99+</div>
              ) : (
                <span className="font-semibold text-xs">{cartItems}</span>
              )}
            </span>
          </div>
        </Link>
      </nav>
      <nav className="bg-blue-600 mb-4 flex flex-wrap z-20 shadow-md w-full md:justify-around">
        <Link to="/category/appliances">
          <button className="btn">Appliances</button>
        </Link>
        <Link to="/category/tv">
          <button className="btn">TV</button>
        </Link>
        <Link to="/category/audio">
          <button className="btn">Audio</button>
        </Link>
        <Link to="/category/mobile">
          <button className="btn">Mobile</button>
        </Link>
        <Link to="/category/laptop">
          <button className="btn">Laptop</button>
        </Link>
        <Link to="/category/gaming">
          <button className="btn">Gaming</button>
        </Link>
        <Link to="/deals">
          <button className="btn">Our deals</button>
        </Link>
        <Link to="/products">
          <button className="btn">All products</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

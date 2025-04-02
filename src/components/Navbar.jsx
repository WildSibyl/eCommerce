import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import websiteLogo from "../assets/shopping-bag-icon.png";
import cartIcon from "../assets/shopping-cart-icon.png";
// import { useAddToCart } from "../hooks/useAddToCart";

// This component simply renders a navigation bar
const Navbar = ({ signedIn, setSignedIn }) => {
  // const { cartItems } = useAddToCart();

  const handleAuthClick = () => {
    setSignedIn((prev) => !prev);
  };

  // const handleSearch = () => {
  //   const searchInput = document.getElementById("searchInput").value;
  //   const searchButton = document.getElementById("searchButton");
  //   searchButton.addEventListener("click", () => {
  //     console.log(searchInput);
  //     // Implement search functionality here
  //   });
  // };

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
          <div className="flex flex-grow border-2 border-gray-500 rounded-full focus-within:border-gray-400">
            <input
              id="searchInput"
              className="pl-4 bg-base-100 border-none focus:outline-none focus:ring-0 focus:border-transparent h-[30px] rounded-bl-full rounded-tl-full self-center text-base-content flex-grow"
              type="text"
              placeholder="Find your next great tech deal!"
            />
            <button
              id="searchButton"
              type="submit"
              className="bg-gray-600 rounded-br-full rounded-tr-full text-white  hover:border-gray-600 hover:border-l-gray-500 hover:bg-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M7 19a8 8 9 100-18 9 9 0 000 18zm8-1l10 10"
                ></path>
              </svg>
            </button>
          </div>
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
            {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems}
            </span> */}
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

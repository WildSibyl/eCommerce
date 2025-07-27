import { Link, useLocation } from "react-router";

const CategoryModal = ({ handleCloseModal }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bg-clip-padding  top-0 left-0 h-full flex text-center items-center w-full justify-center z-[99] backdrop-blur-sm bg-[rgba(8,11,31,0.80)] ease-in-out duration-200 opacity-100 visible">
      <div className="flex flex-col relative items-center text-start w-full bg-base-100 p-4 rounded-2xl m-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-between items-center gap-4">
            <Link to="/category/appliances">
              <button
                onClick={handleCloseModal}
                className={`btn m-0 px-0 w-[150px] h-[70px] text-lg ${
                  isActive("/category/appliances") ? "bg-blue-400" : ""
                }`}
              >
                Appliances
              </button>
            </Link>
            <Link to="/category/tv">
              <button
                onClick={handleCloseModal}
                className={`btn m-0 px-0 w-[150px] h-[70px] text-lg ${
                  isActive("/category/tv") ? "bg-blue-400" : ""
                }`}
              >
                TV
              </button>
            </Link>
            <Link to="/category/audio">
              <button
                onClick={handleCloseModal}
                className={`btn m-0 px-0 w-[150px] h-[70px] text-lg ${
                  isActive("/category/audio") ? "bg-blue-400" : ""
                }`}
              >
                Audio
              </button>
            </Link>
            <Link to="/category/mobile">
              <button
                onClick={handleCloseModal}
                className={`btn m-0 px-0 w-[150px] h-[70px] text-lg ${
                  isActive("/category/mobile") ? "bg-blue-400" : ""
                }`}
              >
                Mobile
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center gap-4">
            <Link to="/category/laptop">
              <button
                onClick={handleCloseModal}
                className={`btn m-0 px-0 w-[150px] h-[70px] text-lg ${
                  isActive("/category/laptop") ? "bg-blue-400" : ""
                }`}
              >
                Laptop
              </button>
            </Link>
            <Link to="/category/gaming">
              <button
                onClick={handleCloseModal}
                className={`btn m-0 px-0 w-[150px] h-[70px] text-lg ${
                  isActive("/category/gaming") ? "bg-blue-400" : ""
                }`}
              >
                Gaming
              </button>
            </Link>
            <Link to="/deals">
              <button
                onClick={handleCloseModal}
                className={`btn m-0 px-0 w-[150px] h-[70px] text-lg ${
                  isActive("/deals") ? "bg-blue-400" : ""
                }`}
              >
                Our deals
              </button>
            </Link>
            <Link to="/products">
              <button
                onClick={handleCloseModal}
                className={`btn m-0 px-0 w-[150px] h-[70px] text-lg ${
                  isActive("/products") ? "bg-blue-400" : ""
                }`}
              >
                All products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;

import { Link } from "react-router";

const CategoryBar = () => {
  return (
    <>
      {/* lower navbar */}
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
    </>
  );
};

export default CategoryBar;

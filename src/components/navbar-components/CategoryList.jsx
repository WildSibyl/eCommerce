import { Link } from "react-router";

const CategoryList = () => {
  return (
    <>
      <div className="flex flex-wrap w-full md:justify-evenly items-center">
        <Link to="/category/appliances">
          <button className="btn m-0 w-[120px]">Appliances</button>
        </Link>
        <Link to="/category/tv">
          <button className="btn m-0 w-[120px]">TV</button>
        </Link>
        <Link to="/category/audio">
          <button className="btn m-0 w-[120px]">Audio</button>
        </Link>
        <Link to="/category/mobile">
          <button className="btn m-0 w-[120px]">Mobile</button>
        </Link>
        <Link to="/category/laptop">
          <button className="btn m-0 w-[120px]">Laptop</button>
        </Link>
        <Link to="/category/gaming">
          <button className="btn m-0 w-[120px]">Gaming</button>
        </Link>
        <Link to="/deals">
          <button className="btn m-0 w-[120px]">Our deals</button>
        </Link>
        <Link to="/products">
          <button className="btn m-0 w-[120px]">All products</button>
        </Link>
      </div>
    </>
  );
};

export default CategoryList;

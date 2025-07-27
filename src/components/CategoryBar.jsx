import CategoryList from "./navbar-components/CategoryList";

const CategoryBar = () => {
  return (
    <>
      {/* lower navbar */}
      <nav className="hidden md:flex bg-blue-600 z-20 shadow-md h-[50px] w-full justify-center md:justify-around items-center">
        <CategoryList />
      </nav>
    </>
  );
};

export default CategoryBar;

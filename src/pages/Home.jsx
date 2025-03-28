import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div id="home-container">
      <nav className="bg-blue-600 p-2 mb-4 flex flex-row z-20 shadow-md w-full">
        <button className="btn">Appliances</button> 
        <button className="btn">TV</button>
        <button className="btn">Audio</button>
        <button className="btn">Mobile</button>
        <button className="btn">Laptop</button>
        <button className="btn">Gaming</button>
      </nav>
      <hero>
        <div></div>
      </hero>
      <div
        id="category-container"
        className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4"
      ></div>
    </div>
  );
};

export default Home;

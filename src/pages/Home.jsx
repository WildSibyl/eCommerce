import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div id="home-container">
      <hero className="hero box px-[10%] mb-4">
        <carousel>Hero carousel</carousel>
      </hero>
      <div
        id="category-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="box">Chosen for you</div>
          <div className="box">Category 1</div>
          <div className="box">Category 2</div>
          <div className="box">Our Deals</div>
          <div className="box">Category 3</div>
          <div className="box">Category 4</div>
          <div className="box">Category 5</div>
          <div className="box">Category 6</div>
        </div>
        <div></div>
    </div>
  );
};

export default Home;

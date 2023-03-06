import React from "react";
import Box from "./Box";
import "./Home.css";

const Home = ({ setFilterPopupactive }) => {
  return (
    <div className="home-content">
      <h1>Welcome back,</h1>
      <p>Reports of your transactions can be found here</p>
      <div className="trans-search">
        <div className="cta">
          <input
            type={Text}
            placeholder="Search for transactions e,g faith aderonke ltd"
          />
        </div>
        <Box text="Search" setFilterPopupactive={setFilterPopupactive} />
      </div>
    </div>
  );
};

export default Home;

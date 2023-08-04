import React from "react";
import "./home.css";
import Landing from "../landing/Landing";
import Products from "./Products/Products";
import Details from "./Detalis/Details";
import SubStory from "./SucStory/SubStory";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <div style={{ position: "relative", zIndex: "2" }}>
        <Products />
        <SubStory />
      </div>
    </div>
  );
};

export default Home;

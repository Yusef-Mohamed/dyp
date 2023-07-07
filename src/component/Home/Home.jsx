import React from "react";
import "./home.css";
import Landing from "../landing/Landing";
import Education from "./Education/Education";
import Products from "./Products/Products";
import EventsSec from "./Events/EventsSec";
import Details from "./Detalis/Details";
import SubStory from "./SucStory/SubStory";
import Opportunity from "./Opportunity/Opportunity";
import Cares from "../Cares/Cares";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Education />

      <Products />
      <EventsSec />
      <Details />
      <SubStory />
      <Opportunity />
      <Cares />
    </div>
  );
};

export default Home;

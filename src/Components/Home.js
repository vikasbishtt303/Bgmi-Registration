import React from "react";
import { NavLink } from "react-router-dom";
import bg1 from "../Image/bg1.jpg";
import Common from "./Resuable File/Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Skill"
        imgsrc={bg1}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;

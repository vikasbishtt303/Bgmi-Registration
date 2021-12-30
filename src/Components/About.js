import React from "react";
import Common from "./Resuable File/Common";
import web from "../Image/bg1.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome TO About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;

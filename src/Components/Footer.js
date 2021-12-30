import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>      
      <footer className="bg-light text-center footer">
        <div className="text-center  p-3">
          © 2021 Copyright:BGMI World &nbsp; 
           <NavLink className="text-dark" to="/"> 
            India Ka Game
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import Home from "../src/Components/Home";
import Navbar from "../src/Components/Navbar";
import About from "../src/Components/About";
import Service from "../src/Components/Service";
import Register from "../src/Components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Footer from "../src/Components/Footer";
import Country from "../src/Components/Register/Country";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />

        <Route exact path="/register" element={<Register />} />

        <Route exact path="/country" element={<Country />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

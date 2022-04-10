import React from "react";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../../StaticComponents/Navbar";
const Router = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/homepage" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/homepage" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

import React from "react";
import Home from "../Pages/Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../../StaticComponents/Navbar";
import Authentication from "../Pages/Authentication/Authentication";
import Register from "../Pages/Register/Register";

const Router = () => {
  const page = window.location.pathname.split("/")[1];

  console.log(page);
  return (
    <div className="page">
      <BrowserRouter>
        {page === "auth" || page === "reg" || <Navbar />}

        <Routes>
          <Route path="/bus-route" element={<Home />} />
          <Route path="/payment" element={<Home />} />
          <Route path="/tickets" element={<Home />} />
          <Route path="/contact" element={<Home />} />

          <Route path="/recommendations" element={<Home />} />
          <Route path="/lead" element={<Home />} />
          <Route path="/gallery" element={<Home />} />
          <Route path="/sanctions" element={<Home />} />

          <Route path="/auth" element={<Authentication />} />
          <Route path="/reg" element={<Register />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

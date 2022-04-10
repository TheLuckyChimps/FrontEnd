import React from "react";
import Home from "../Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../../StaticComponents/Navbar";
import Authentication from "../Authentication/Authentication";
import Register from "../Register/Register";
const Router = () => {
  const page = window.location.pathname.split("/")[1];

  return (
    <div className="page">
      <BrowserRouter>
        {page === "auth" || page === "reg" || <Navbar />}

        <Routes>
          <Route path="/homepage" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/reg" element={<Register />} />
          <Route path="*" element={<Navigate to="/homepage" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

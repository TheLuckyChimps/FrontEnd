import React from "react";
import Home from "../Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../../StaticComponents/Navbar";
import Authentication from "../Authentication/Authentication";
const Router = () => {
  const page = window.location.pathname.split("/")[1];
  console.log(page);
  return (
    <div className="page">
      <BrowserRouter>
        {page !== "auth" && <Navbar />}

        <Routes>
          <Route path="/homepage" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="*" element={<Navigate to="/homepage" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

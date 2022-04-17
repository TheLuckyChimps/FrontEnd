import React from "react";
import BusRoute from "../Pages/BusRoute/BusRoute";
import Payment from "../Pages/Payment/Payment";
import Tickets from "../Pages/Tickets/Tickets";
import Contact from "../Pages/Contact/Contact";
import Reccommendations from "../Pages/Reccommendations/Reccommendations";
import Lead from "../Pages/Lead/Lead";
import Gallery from "../Pages/Gallery/Gallery";
import Sanctions from "../Pages/Sanctions/Sanctions";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Authentication from "../Pages/Authentication/Authentication";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";

const Router = () => {
  const page = window.location.pathname.split("/")[1];

  console.log(page);
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/bus-route" element={<BusRoute />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/recommendations" element={<Reccommendations />} />
          <Route path="/lead" element={<Lead />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sanctions" element={<Sanctions />} />

          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reg" element={<Register />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

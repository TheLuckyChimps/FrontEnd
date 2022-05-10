import { useEffect } from "react";
import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./busRoute.scss";

const BusRoute = () => {

  useEffect(() => {
    let token = localStorage.getItem("idtoken");
    console.log(token);
  });

  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="bus-route">Bus route</div>
    </div>
  );
};

export default BusRoute;

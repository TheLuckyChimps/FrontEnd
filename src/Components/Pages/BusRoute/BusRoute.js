import { useEffect } from "react";
import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./busRoute.scss";
import TRAILS from "../../../constants/trails_dummy_data.json";

const BusRoute = () => {
  useEffect(() => {
    let token = localStorage.getItem("idtoken");
    console.log(token);
  });

  console.log("TRAILS :>> ", TRAILS);

  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="bus-route">
        {TRAILS.trails.map((elem, index) => (
          <div key={index} className="bus--route--container">
            <div>{elem.title}</div>
            <div>{elem.operatingHours}</div>
            <div>{elem.stations}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusRoute;

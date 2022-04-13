import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./busRoute.scss";

const BusRoute = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="bus-route">Bus route</div>
    </div>
  );
};

export default BusRoute;

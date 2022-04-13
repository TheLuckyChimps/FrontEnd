import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./reccommendations.scss";

const Reccommendations = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="reccommendations">Reccommendations</div>
    </div>
  );
};

export default Reccommendations;

import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./lead.scss";

const Lead = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="lead">Lead</div>
    </div>
  );
};

export default Lead;

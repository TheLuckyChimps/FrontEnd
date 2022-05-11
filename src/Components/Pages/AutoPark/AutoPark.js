import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./autoPark.scss";
import Image1 from "../../../Assets/Image/img1.png";
import Image2 from "../../../Assets/Image/img2.jpeg";
import Image4 from "../../../Assets/Image/img4.jpeg";

const AutoPark = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="autopark">
        <img style={{ width: "500px" }} src={Image1} alt="tpl" />
        <img style={{ width: "500px" }} src={Image2} alt="tpl" />
        <img style={{ width: "500px" }} src={Image4} alt="tpl" />
      </div>
    </div>
  );
};

export default AutoPark;

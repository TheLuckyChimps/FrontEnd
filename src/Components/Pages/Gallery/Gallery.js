import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./gallery.scss";
import Image1 from "../../../Assets/Image/img1.png";
import Image2 from "../../../Assets/Image/img2.jpeg";
import Image4 from "../../../Assets/Image/img4.jpeg";

const Gallery = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="gallery">
        <img style={{ width: "500px", marginBottom:"20px", marginTop: "15px"}} src={Image1} alt="tpl" />
        <img style={{ width: "500px", marginBottom:"20px" }} src={Image2} alt="tpl" />
        <img style={{ width: "500px", marginBottom:"20px" }} src={Image4} alt="tpl" />
      </div>
    </div>
  );
};

export default Gallery;

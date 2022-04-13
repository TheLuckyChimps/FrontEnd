import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="gallery">Gallery</div>
    </div>
  );
};

export default Gallery;

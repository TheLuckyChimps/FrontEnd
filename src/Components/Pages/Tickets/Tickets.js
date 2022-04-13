import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./tickets.scss";

const Tickets = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="tickets">Tickets</div>
    </div>
  );
};

export default Tickets;

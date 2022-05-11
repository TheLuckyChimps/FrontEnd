import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";

import "./tickets.scss";
import TICKETS from "../../../constants/ticket_dummy_data.json";
const Tickets = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="tickets">
        {TICKETS.tickets.map((elem, index) => (
          <div key={index} className="ticket-container">
            <div>{elem.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;

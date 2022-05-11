import React from "react";
import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./tickets.scss";
import TICKETS from "../../../constants/ticket_dummy_data.json";

const Tickets = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="tickets--container">
        {TICKETS.tickets.map((elem) => (
          <div className="tickets--tickets" key={elem.id}>
            <h1>{elem.title}
            </h1>
            <p>{elem.description_full}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;

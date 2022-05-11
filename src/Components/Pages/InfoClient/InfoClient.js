import React from "react";
import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./infoClient.scss";
import INFO from "../../../constants/info-dummy-data.json";

const InfoClient = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="infoclient--container">
        {INFO.info.map((elem) => (
          <div className="info--info" key={elem.id}>
            <h1>{elem.title}</h1>
            <p>{elem.description_full}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoClient;

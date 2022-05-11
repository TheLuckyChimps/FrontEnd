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
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>
              {elem.title}
            </div>
            <div
              style={{
                marginTop: "1rem",
                textAlign: "justify",
                textIndent: "2rem",
              }}
            >
              {elem.description_full}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoClient;

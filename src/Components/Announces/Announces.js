import React from "react";
import Navbar from "../../StaticComponents/Navbar";
import Home from "../Pages/Home/Home";
import "./announces.scss";
import ANNOUNCES from "../../constants/announces-dummy-data.json";

const Announces = () => {
  console.log("ANNOUNCES :>> ", ANNOUNCES);
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="announces--container">
        {ANNOUNCES.announces.map((elem) => (
          <div className="announces--announce" key={elem.id}>
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

export default Announces;

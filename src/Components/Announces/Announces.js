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

export default Announces;

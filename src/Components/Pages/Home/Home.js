import React from "react";
import "./home.scss";
import bg from "../../../Assets/Image/page-background.svg";
import logo from "../../../Assets/Image/logo.png";
import PrimarySearchAppBar from "../../SearchBar/SearchBar";
import AuthorisationBar from "../../AuthorisationBar/AuthorisationBar";

const Home = () => {
  return (
    <div className="wrapper--home">
      <div className="content">
        <header>
          <img src={logo} alt="logo" className="image--logo" />
          <AuthorisationBar />
        </header>
        <PrimarySearchAppBar />
      </div>
    </div>
  );
};

export default Home;

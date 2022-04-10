import React from "react";
import "./navbar.scss";
import { useNavigate } from "react-router";

const Navbar = () => {
  const history = useNavigate();
  const URL = window.location.pathname.split("/")[1];
  return (
    <div className="NavBar--container">
      <ul className="NavBar--btns">
        <div className="NavBar--btns--left">
          <li
            className={URL === "trasee" && "active-link"}
            onClick={() => history("/trasee")}
          >
            Trasee
          </li>
          <li
            className={URL === "plata" && "active-link"}
            onClick={() => history("/plata")}
          >
            Plata
          </li>
          <li
            className={URL === "bilete" && "active-link"}
            onClick={() => history("/bilete")}
          >
            Bilete si abonamente
          </li>
          <li
            className={URL === "Contact" && "active-link"}
            onClick={() => history("/contact")}
          >
            Contact
          </li>
        </div>
        
        <div className="NavBar--btns--right" style={{ textAlign: "right" }}>
          <li
            className={URL === "recomandari" && "active-link"}
            onClick={() => history("/recomandari")}
          >
            Recomandari
          </li>
          <li
            className={URL === "conducere" && "active-link"}
            onClick={() => history("/conducere")}
          >
            Conducere TPL
          </li>
          <li
            className={URL === "galerie" && "active-link"}
            onClick={() => history("/galerie")}
          >
            Galerie
          </li>
          <li
            className={URL === "sanctiuni" && "active-link"}
            onClick={() => history("/sanctiuni")}
          >
            Norme si sanctiuni
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

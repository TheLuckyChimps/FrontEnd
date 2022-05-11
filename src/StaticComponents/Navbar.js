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
            className={URL === "bus-route" && "active-link"}
            onClick={() => history("/bus-route")}
          >
            Trasee
          </li>
          <li
            className={URL === "announces" && "active-link"}
            onClick={() => history("/announces")}
          >
            Anunturi
          </li>
          <li
            className={URL === "infoclient" && "active-link"}
            onClick={() => history("/infoclient")}
          >
            Informatii calatori
          </li>
          <li
            className={URL === "tickets" && "active-link"}
            onClick={() => history("/tickets")}
          >
            Bilete si abonamente
          </li>
          <li
            className={URL === "contact" && "active-link"}
            onClick={() => history("/contact")}
          >
            Contact
          </li>
        </div>

        <div className="NavBar--btns--right" style={{ textAlign: "right" }}>
          <li
            className={URL === "aboutus" && "active-link"}
            onClick={() => history("/aboutus")}
          >
            Despre noi
          </li>
          <li
            className={URL === "lead" && "active-link"}
            onClick={() => history("/lead")}
          >
            Conducere TPL
          </li>
          <li
            className={URL === "gallery" && "active-link"}
            onClick={() => history("/gallery")}
          >
            Galerie
          </li>
          <li
            className={URL === "autopark" && "active-link"}
            onClick={() => history("/autopark")}
          >
            Prezentare parc auto
          </li>
          <li
            className={URL === "sanctions" && "active-link"}
            onClick={() => history("/sanctions")}
          >
            Norme si sanctiuni
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

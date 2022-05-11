import { Button, TextareaAutosize, TextField } from "@mui/material";
import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./contact.scss";
import React from "react";
const Contact = () => {

  let values = {
    nameField: '',
    emailField: '',
    phoneField: '',
    messageField: ''
  };
  const [thankYou, setThankYou] = React.useState("");
  const clearFields = (ev) => {
    values.nameField = "";
    values.emailField = "";
    values.phoneField = "";
    values.messageField = "";
    setThankYou('Multumim pentru sugestii');
  };
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="contact">
        <div className="info">
          <h1>Contact TPL Suceava</h1>
          <br />
          <br />
          <p>Pentru sugestii sau alte ne puteti contacta la:</p>
          <p>contact@tpl-sv.ro</p>
          <p>sau</p>
          <p>Tel/Fax(secretariat): 0330 401 442</p>
          <br />
          <p>SC TRANSPORT PUBLIC LOCAL SA Str.</p>
          <p>Traian Vuia nr. 5 A, Suceava, 720 021,</p>
          <p>ROMANIA</p>
        </div>
        <div className="contact--form">
          <TextField
            id="input-with-icon-textfield"
            label="Nume si prenume"
            onChange={(event) => (values.nameField = event.target.value)}
            className="nameInput"
            variant="standard"
          />
          <br />
          <br />
          <TextField
            id="input-with-icon-textfield"
            label="Adresa de email"
            onChange={(event) => (values.emailField = event.target.value)}
            className="emailInput"
            variant="standard"
          />
          <br />
          <br />
          <TextField
            id="input-with-icon-textfield"
            label="Telefonul"
            onChange={(event) => (values.phoneField = event.target.value)}
            className="phoneInput"
            variant="standard"
          />
          <br />
          <br />
          <p>Mesajul dumneavoastra</p>
          <TextareaAutosize
            onChange={(event) => (values.messageField = event.target.value)}
            id="input-with-icon-textfield"
            label="Mesajul dumneavoastra"
            className="messageInput"
            style={{opacity: 0.3}}
          />
          <br />
          <br />
          <Button onClick={clearFields} className="trimite" variant="contained">
            Trimite
          </Button>
          {thankYou && <p>{thankYou}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;

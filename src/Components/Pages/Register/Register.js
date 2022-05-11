import React from "react";
import { Button } from "@mui/material";
import "./register.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import emailImg from "../../../Assets/Image/ci_mail.svg";
import passwdImg from "../../../Assets/Image/carbon_password.svg";
import homeImg from "../../../Assets/Image/bx_home.svg";
import personImg from "../../../Assets/Image/icon.svg";
import { useNavigate } from "react-router";
import { registerCall } from "../../../Services/ApiCalls";
import IconButton from "@mui/material/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Register = () => {
  let navigate = useNavigate();
  let values = {
    name: "",
    surname: "",
    address: "",
    email: "",
    password: "",
  };
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const toAuth = () => {
    registerCall(values, successHandler);
  };

  function successHandler(response) {
    console.log(response);
    if (response.errors === undefined) {
      let path = `/auth`;
      navigate(path);
    } else {
      setErrorMessage(
        "Eroare la inregistrare, verifica datele personale sa fie corecte"
      );
      console.log(errorMessage);
    }
  }

  return (
    <div className="page--register--container">
      <div className="page--register">
        <h1>Inregistreaza-te</h1>
        <TextField
          id="input-with-icon-textfield"
          label="Nume"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={personImg} alt="name" />
              </InputAdornment>
            ),
          }}
          className="nameInput"
          variant="standard"
          onChange={(event) => (values.name = event.target.value)}
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Prenume"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={personImg} alt="first-name" />
              </InputAdornment>
            ),
          }}
          className="surnameInput"
          variant="standard"
          onChange={(event) => (values.surname = event.target.value)}
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Adresa de domiciliu"
          className="homeInput"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={homeImg} alt="address" />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={(event) => (values.address = event.target.value)}
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Adresa de email"
          className="emailInput"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={emailImg} alt="email" />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={(event) => (values.email = event.target.value)}
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Parola"
          className="passwordInput"
          type={showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={passwdImg} alt="password" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={(event) => (values.password = event.target.value)}
        />
        <br />

        <Button onClick={toAuth} className="register" variant="contained">
          Inregistreaza
        </Button>
        {errorMessage && <p className="auth--error">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Register;

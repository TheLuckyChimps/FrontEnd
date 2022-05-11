import React from "react";
import { Button } from "@mui/material";
import "./authentication.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import emailImg from "../../../Assets/Image/ci_mail.svg";
import passwdImg from "../../../Assets/Image/carbon_password.svg";
import { useNavigate } from "react-router";
import { loginCall } from "../../../Services/ApiCalls";
import IconButton from "@mui/material/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Authentication = () => {
  let navigate = useNavigate();
  let values = {
    email: "",
    password: "",
  };

  const [errorMessage, setErrorMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const toBusRoutes = () => {
    loginCall(values, successHandler);
  };
  function successHandler(response) {
    console.log(response);
    if (response.errors === undefined) {
      localStorage.setItem("idtoken", response.Token);
      let path = `/bus-route`;
      navigate(path);
    } else {
      setErrorMessage("Eroare la autentificare, verifica parola si adresa de email");
      console.log(errorMessage);
    }
  }

  const toReg = () => {
    let path = `/reg`;
    navigate(path);
  };

  return (
    <div className="page--authentication--container">
      <div className="page--authentication">
        <h1>Autentificare</h1>
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
          type={showPassword ? "text" : "password"}
          className="passwordInput"
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
        <p className="forgot--password">
          <span className="redirect">Ai uitat parola?</span>
        </p>
        <Button onClick={toBusRoutes} className="login" variant="contained">
          Intra in cont
        </Button>
        <p className="register--redirect">
          {" "}
          <span onClick={toReg} className="redirect">
            nu ai cont? inregistreaza-te aici...
          </span>
        </p>
        {errorMessage && <p className="auth--error">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Authentication;

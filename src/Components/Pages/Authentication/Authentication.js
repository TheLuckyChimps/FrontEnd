import { Button } from "@mui/material";
import "./authentication.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import emailImg from "../../../Assets/Image/ci_mail.svg";
import passwdImg from "../../../Assets/Image/carbon_password.svg";
import { useNavigate } from "react-router";

const Authentication = () => {
  let navigate = useNavigate();
  const toBusRoutes = () => {
    let path = `/bus-route`;
    navigate(path);
  };
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
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Parola"
          className="passwordInput"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={passwdImg} alt="password" />
              </InputAdornment>
            ),
          }}
          variant="standard"
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
      </div>
    </div>
  );
};

export default Authentication;
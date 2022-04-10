import { Button } from "@mui/material";
import "./register.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import emailImg from "../../Assets/Image/ci_mail.svg";
import passwdImg from "../../Assets/Image/carbon_password.svg";
import homeImg from "../../Assets/Image/bx_home.svg"
import personImg from "../../Assets/Image/icon.svg"
const Register = () => {
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
                <img src={personImg} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Prenume"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={personImg} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Adresa de domiciliu"
          className="homeInput"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={homeImg} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Adresa de email"
          className="emailInput"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={emailImg} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <br />
        <TextField
          id="input-with-icon-textfield"
          label="Parola"
          className="emailInput"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={passwdImg} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <br />
       
 
        <Button className="register" variant="contained">
          Inregistreaza
        </Button>
      </div>
    </div>
  );
};

export default Register;

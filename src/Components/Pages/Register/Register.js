import { Button } from "@mui/material";
import "./register.scss";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import emailImg from "../../../Assets/Image/ci_mail.svg";
import passwdImg from "../../../Assets/Image/carbon_password.svg";
import homeImg from "../../../Assets/Image/bx_home.svg";
import personImg from "../../../Assets/Image/icon.svg";
import { useNavigate } from "react-router";
import { registerCall } from "../../../Services/ApiCalls"

const Register = () => {
  let navigate = useNavigate();
  let values = {
    name: "",
    surname: "",
    address: "",
    email: "",
    password: ""
  }
  const toAuth = () => {
     registerCall(values, successHandler);
  };

    function successHandler(response) {
      console.log(response);
      if (response.errors === undefined) {
        let path = `/auth`;
        navigate(path);
      } else {
        console.log("error");
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
          className="emailInput"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={passwdImg} alt="password" />
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
      </div>
    </div>
  );
};

export default Register;

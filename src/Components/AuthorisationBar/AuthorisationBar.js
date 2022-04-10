import { Button } from "@mui/material";
import "./authorisationBar.scss";
import { useNavigate } from "react-router-dom";

const AuthorisationBar = () => {
  let navigate = useNavigate();
  const toAuth = () => {
    let path = `/auth`;
    navigate(path);
  };
  const toReg = () => {
    let path = `/reg`;
    navigate(path);
  };

  return (
    <div className="authorisation--bar">
      <Button onClick={toAuth} className="auth" variant="outlined">
        Autentificare
      </Button>
      <Button onClick={toReg} className="reg" variant="contained">
        Inregistrare
      </Button>
    </div>
  );
};

export default AuthorisationBar;

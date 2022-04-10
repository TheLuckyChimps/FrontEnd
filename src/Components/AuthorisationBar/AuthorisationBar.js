import { Button } from "@mui/material";
import "./authorisationBar.scss";

const AuthorisationBar = () => {
  return (
    <div className="authorisation--bar">
      <Button className="auth" variant="outlined">
        Autentificare
      </Button>
      <Button className="reg" variant="contained">
        Inregistrare
      </Button>
    </div>
  );
};

export default AuthorisationBar;

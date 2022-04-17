import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./tickets.scss";
import PlusMinusButton from "../../PlusMinusButton/PlusMinusButton";

const Tickets = () => {
  let route = "No route";
  const toCheckOut = () => {
    
  }
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="tickets">
        <h1>Achizitie Bilete Online</h1>
        <br />
        <br />
        <br />
        <FormControl className="dropdown--route" fullWidth>
          <InputLabel>Ruta</InputLabel>
          <Select label="ruta" value={route} onCharge={(m) => (route = m)}>
            <MenuItem>Route 1</MenuItem>
            <MenuItem>Route 2</MenuItem>
            <MenuItem>Route 3</MenuItem>
            <MenuItem>Route 4</MenuItem>
          </Select>
        </FormControl>
        <h3>0.00 RON /Bilet</h3>
        <h4>(afisare pret in functie de ruta)</h4>
        <br />
        <p>Numar de bilete:</p>
        <PlusMinusButton />
        <Button onClick={toCheckOut} className="button--finish-payment" variant="outlined">
          Finalizare achizitie
        </Button>
      </div>
    </div>
  );
};

export default Tickets;

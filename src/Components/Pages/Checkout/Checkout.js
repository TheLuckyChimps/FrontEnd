import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./checkout.scss";
import TextField from "@mui/material/TextField";
import visaImg from "../../../Assets/Image/visaImage.png";

const Checkout = () => {
  let month = "01";
  let year = "2022";

  return (
    <div className="page--checkout--container">
      <div className="page--checkout">
        <h1>Checkout</h1>
        <TextField
          id="input-with-icon-textfield"
          label="Numarul cardului"
          className="card--number--input"
          variant="standard"
        />
        <br />
        <p>Data de expirare:</p>
        <FormControl className="dropdown--month" margin="normal">
          <InputLabel>Month</InputLabel>
          <Select label="month" value={month} onCharge={(m) => (month = m)}>
            <MenuItem>01</MenuItem>
            <MenuItem>02</MenuItem>
            <MenuItem>03</MenuItem>
            <MenuItem>04</MenuItem>
            <MenuItem>05</MenuItem>
            <MenuItem>06</MenuItem>
            <MenuItem>07</MenuItem>
            <MenuItem>08</MenuItem>
            <MenuItem>09</MenuItem>
            <MenuItem>10</MenuItem>
            <MenuItem>11</MenuItem>
            <MenuItem>12</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="dropdown--year" margin="normal">
          <InputLabel>Year</InputLabel>
          <Select label="year" value={year} onChange={(y) => (year = y)}>
            <MenuItem>2022</MenuItem>
            <MenuItem>2023</MenuItem>
            <MenuItem>2024</MenuItem>
            <MenuItem>2025</MenuItem>
            <MenuItem>2026</MenuItem>
            <MenuItem>2027</MenuItem>
          </Select>
        </FormControl>
        <br />
        <img src={visaImg} alt="visa" />
        <TextField
          id="input-with-icon-textfield"
          label="CCV"
          className="card--ccv--input"
          variant="standard"
        />
        <br />
        <Button className="checkout" variant="contained">
          Plateste ...
        </Button>
      </div>
    </div>
  );
};

export default Checkout;

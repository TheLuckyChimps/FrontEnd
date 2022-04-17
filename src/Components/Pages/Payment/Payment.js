import { useNavigate } from "react-router";
import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./payment.scss";

const Payment = () => {
  let navigate = useNavigate();
  const toCheckout = () => {
    let path = `/checkout`;
    navigate(path);
  };
  toCheckout();
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="payment">Payment</div>
    </div>
  );
};

export default Payment;

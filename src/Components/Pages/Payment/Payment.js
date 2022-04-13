import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./payment.scss";

const Payment = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="payment">Payment</div>
    </div>
  );
};

export default Payment;

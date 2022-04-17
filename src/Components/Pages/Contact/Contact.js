import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="contact">
        <h1>Contact TPL Suceava</h1>
        <br/><br/><br/><br/>
        <p>Pentru sugestii sau alte ne puteti contacta la:</p>
        <p>contact@tpl-sv.ro</p>
        <p>sau</p>
        <p>Tel/Fax(secretariat): 0330 401 442</p>
        <br/>
        <p>SC TRANSPORT PUBLIC LOCAL SA Str.</p>
        <p>Traian Vuia nr. 5 A, Suceava, 720 021,</p>
        <p>ROMANIA</p>
      </div>
    </div>
  );
};

export default Contact;

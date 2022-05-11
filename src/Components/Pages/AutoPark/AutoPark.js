import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./autoPark.scss";
import Image1 from "../../../Assets/Image/autoparc1.jpg";
import Image2 from "../../../Assets/Image/autoparc2.jpg";


const AutoPark = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="autopark">
        <h1>Parcul auto al TPL Suceava s-a îmbogățit cu 25 de autobuze electrice noi.</h1>
        <img style={{ width: "500px", marginBottom:"20px", marginTop: "15px"}} src={Image2} alt="tpl" />
        <p>Cele 25 de autobuze electrice de capacitate mare au ajuns la Suceava, iar după ce vor fi înmatriculate, acestea vor fi puse în circut, iar sucevenii le vor putea utiliza. Anunțul a fost făcut de către primarul Ion Lungu care, alături de președintele Gheorghe Flutur, deputatul Ioan Balan, viceprimarul Lucian Harșovschi și de directorul ADR Nord-Est, Vasile Asandei, precum și de reprezentanții companiei chineze care au furnizat autobuzele, au inaugurat noile achiziții ale municipalității sucevene.</p>
        <img style={{ width: "500px" }} src={Image1} alt="tpl" />
        <p>Astfel, edilul a subliniat că autobuzele electrice Granton au 12 metri lungime și sunt cu propulsie integral electrică cu alimentare din baterie de acumulatori electrici. Trebuie precizat că autobuzele au o capacitate de transport de 72 de pasageri, din care minim 30 de locuri pe scaune și un spațiu pentru scaunul cu rotile.</p>
      </div>
    </div>
  );
};

export default AutoPark;

import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./lead.scss";

const Lead = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="lead">
        <div className ="title">Adunarea GeneralÄƒ a AcÈ›ionarilor</div>
        <br></br>
        <div className = "name">ArÄƒmescu Adrian</div>
        <div className = "name">HriÈ›cu Ovidiu</div>
        <br></br>
        <div className ="title">Consiliul de administraÈ›ie</div>
        <br ></br>
        <table>
          <tr>
            <th>Nume si prenume</th>
            <th>CV in format PDF</th>
        </tr>
        <tr>
          <td>Hanceriuc Mihai</td>
          <td>CV Hanceriuc Mihai</td>
        </tr>
        <tr>
          <td>Juravle Emil-Vasile</td>
          <td></td>
        </tr>
        <tr>
          <td>Munteanu Ovidiu</td>
          <td></td>
        </tr>
        <tr>
    <td>Petruc Gabriel - PreÈ™edinte</td>
    <td>CV Petruc Gabriel</td>
  </tr>
  <tr>
    <td>Romaniuc Darie</td>
    <td>CV Romaniuc Darie</td>
  </tr>
  <tr>
    <td>SÃ¢rghie Teodor-Sebastian</td>
    <td></td>
  </tr>
  <tr>
    <td>Tataranu Costel</td>
    <td>CV Tataranu Costel</td>
  </tr>
</table>
<br></br>
    <div className="title">Director General</div>
    <br></br>
    <div className="name">Ing. DÄƒnuÈ› Matei</div>
    <br></br>
      </div>
    </div>
  );
};

export default Lead;

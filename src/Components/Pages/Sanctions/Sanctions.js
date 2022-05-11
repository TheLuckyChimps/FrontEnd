import Navbar from "../../../StaticComponents/Navbar";
import Home from "../Home/Home";
import "./sanctions.scss";
const data = [
  { pct: "1", fapta: "Prejudicierea bunurilor infrastructurii tehnico-edilitare de transport (dotările din staţiile de călători, afişajul, panourile indicatoare etc)", Amenda: "250 – 1000" },
  { pct: "2", fapta: "Agresarea fizică sau verbală a conducătorului mijlocului de transport, a organelor de control ori a călătorilor", Amenda: "250 – 1000" },
  { pct: "3", fapta: "Solicitarea nejustificată, adresată conducătorului autovehiculului, pentru oprirea între staţii, pentru urcare/coborâre", Amenda: "50 – 300" },
  { pct: "4", fapta: "Introducerea în salonul mijlocului de transport în comun de obiecte sau substanţe urât mirositoare ori periculoase pentru securitatea pasagerilor", Amenda: "100 – 500" },
  { pct: "5", fapta: "Introducerea în salonul mijlocului de transport în comun a animalelor de companie", Amenda: "100 – 500" },
  { pct: "6", fapta: "Urcarea în salonul mijlocului de transport în stare vizibilă de ebrietate şi refuzul de a coborî la solicitarea personalului deservent ca urmare a disconfortului produs celorlalţi călători", Amenda: "50 – 500" },
  { pct: "7", fapta: "Producerea de zgomote, larmă ori folosirea de către călători, în salonul mijlocului de transport, a aparaturii audio la un nivel care produce disconfortul celorlaţi participanţi la călătorie", Amenda: "50 – 500" },
  { pct: "8", fapta: "Fumatul, scuipatul, consumul de alcool, de seminţe şi îngheţată, aruncarea de hârtii sau a resturilor de orice fel în salonul mijlocului de transport.", Amenda: "50 – 500" },
  { pct: "9", fapta: "Refuzul de a se legitima la solicitarea expresă a personalului cu atribuţii de taxare şi control, identificat prin ecuson sau legitimaţie de serviciu", Amenda: "100 – 500" },
]
const Sanctions = () => {
  return (
    <div className="page">
      <Navbar />
      <Home />
      <div className="sanctions">
        <div className ="title">Sanctiuni</div>
        <div className="sanctions-body" ><br></br><br></br>Pentru a evita situaţiile neplăcute vă rugăm ca la urcarea în mijlocul de transport să solicitaţi biletul de călătorie de la taxator sau să verificaţi că dețineți abonament valabil!<br></br>
          <br></br>Călătorii care nu prezintă la control biletul sau abonamentul valabil vor fi sancţionaţi pe loc cu bilet de suprataxă în valoare de 30 lei sau prin proces verbal cu amendă în valoare de 100-500 lei.<br></br>
          <br></br>EXTRAS din HCL Suceava nr. 98/2011 cuprinzând NORME PRIVIND BUNA CONVIEŢUIRE, ORDINEA Şl LINIŞTEA PUBLICĂ, TRANSPORTUL PUBLIC DE CĂLĂTORI, GOSPODĂRIREA ORAŞULUI ŞI PROTECŢIA  MEDIULUI  ÎN  MUNICIPIUL  SUCEAVA:<br></br>
          <br></br>Art.23. Călătorii care utilizează serviciile de transport public local au, în principal, următoarele obligaţii:<br></br>
          <br></br>a) să deţină asupra lor, pe timpul transportului, legitimaţii de călătorie valabile (bilete, abonamente etc) sau alte documente de transport, stabilite prin acte normative, care le conferă dreptul de a călători cu mijloacele de transport public local<br></br>
          <br></br>b) să achite costul legitimaţiilor de călătorie valabile pentru călătoriile pe care le efectuează, conform tarifelor menţionate lizibil pe acestea<br></br>
          <br></br>c) să nu aducă prejudicii mijloacelor de transport sau a bunurilor ce aparţin de infrastructura tehnico-edilitară de transport<br></br>
          <br></br>d) să aibă un comportament civilizat faţă de personalul deservent şi faţă de ceilalţi călători<br></br>
          <br></br>e) să se legitimeze la solicitarea expresă a personalului cu atribuţii de taxare şi control, identificat prin ecuson sau legitimaţie de serviciu<br></br>
          <br></br>Art.24. Constituie contravenţie la normele privind transportul public de călători în municipiul Suceava săvârşirea de către persoanele fizice a oricăreia din următoarele fapte:<br></br>
          <br></br>
        <table>
          <tr>
            <th>Pct.</th>
            <th>Descrierea faptei</th>
            <th>Amenda (lei)</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.pct}</td>
                <td>{val.fapta}</td>
                <td>{val.Amenda}</td>
              </tr>
            )
          })}
        </table>
        <br></br>
 


</div>
    </div></div>
  );
};

export default Sanctions;

import "../css/Footer.scss";
import Logo from "../img/AllDay_Logo 2.png";

function Footer() {
  return (
    <div className="footer">
      <div className="content-container">
        <div className="content">
          <img src={Logo} alt="" />
          <div className="boxText">
            <ul className="list">
              <li>HOME</li>
              <li>CONTACT</li>
              <li>US</li>
              <li>SUPPORT</li>
              <li>PARTNERSHIP</li>
            </ul>
            <ul className="list">
              <li>HOME</li>
              <li>CONTACT</li>
              <li>US</li>
              <li>SUPPORT</li>
              <li>PARTNERSHIP</li>
            </ul>
            <ul className="list">
              <li>HOME</li>
              <li>CONTACT</li>
              <li>US</li>
              <li>SUPPORT</li>
              <li>PARTNERSHIP</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

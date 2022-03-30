import Border from "../img/apple-iphone13pro-graphite-landscape 1.png";
import Content from "../img/nhieumat.png";
import GGP from "../img/gg.png";
import AS from "../img/xdg.png";
import FooterImg from "../img/footerImg.png";
import "../css/Section2.scss";
import "../css/index.scss";

function Section2() {
  return (
    <div className="section2" id="news">
      <ul className="list">
        <li className="item">
          <img className="border" src={Border} alt="" />
          <img className="content" src={Content} alt="" />
        </li>
        <li className="boxText">
          <p className="title">Multiplayer Social-Network game</p>
          <p className="subText">
            All Day is a social game in which players can have a complete gaming
            experience with many mini games, social platform features, and
            blockchain technology.
          </p>
          <div className="boxIcon">
            <img src={AS} alt="App Store" />
            <img src={GGP} alt="Google Play" />
          </div>
        </li>
      </ul>
      <img className="footerImg" src={FooterImg} alt="" />
    </div>
  );
}

export default Section2;

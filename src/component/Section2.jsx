import Border from "../img/section2/apple-iphone13pro-graphite-landscape 1.png";
import Content from "../img/section2/nhieumat.png";
import GGP from "../img/section2/gg.png";
import AS from "../img/section2/xdg.png";
import "../css/Section2.scss";

function Section2() {
  return (
    <section className="section2" id="news">
      <div className="content-container">
        <ul className="section2-box">
          <li className="banner-img">
            <div className="banner-image">
              <img className="border" src={Border} alt="" />
              <img className="content" src={Content} alt="" />
            </div>
          </li>

          <li className="section2-boxText">
            <div className="text-content">
              <p className="title">Multiplayer Social-Network game</p>

              <p className="subText">
                All Day is a social game in which players can have a complete
                gaming experience with many mini games, social platform
                features, and blockchain technology.
              </p>
            </div>
            <div className="boxIcon">
              <img src={AS} alt="App Store" />
              <img src={GGP} alt="Google Play" />
            </div>
          </li>
        </ul>
      </div>
      <div className="section-line"></div>
    </section>
  );
}

export default Section2;

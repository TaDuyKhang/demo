import "../css/Section4.scss";
import Icon from "../img/elan.png";
import Img1 from "../img/section4.1.png";
import Img2 from "../img/section4.2.png";
import Img3 from "../img/section4.3.png";
import FooterImg from "../img/footerImg.png";

function Section4() {
  return (
    <div className="section4">
      <div className="box">
        <div className="boxLeft">
          <img className="icon" src={Icon} alt="" />
          <div className="bottomBox bottomLeft">
            <div className="imgBox">
              <img className="img" src={Img1} alt="" />
              <img className="img3" src={Img3} alt="" />
            </div>
            <p className="bottomBox-title">Fishing</p>
            <p className="bottomBox-subText">How founding items look?</p>
            <button className="btn">Button</button>
          </div>
        </div>

        <div className="boxRight">
          <div className="textBox">
            <p className="textBox-title">
              10+ Multiplayer games under Battle Royale mode
            </p>
            <p className="textBox-subText">
              All Day is a social game in which players can have a complete
              gaming experience with many mini games, social platform features,
              and blockchain technology.
            </p>
          </div>
          <div className="bottomBox">
            <div className="imgBox">
              <img className="img" src={Img2} alt="" />
              <img className="img3" src={Img3} alt="" />
            </div>
            <p className="bottomBox-title">Battle Royale</p>
            <p className="bottomBox-subText">How founding items look?</p>
            <button className="btn">Button</button>
          </div>
        </div>
      </div>
      <img className="footerImg" src={FooterImg} alt="" />
    </div>
  );
}

export default Section4;

import "../css/Section4.scss";
import Icon from "../img/elan.png";
import Img1 from "../img/section4.1.png";
import Img2 from "../img/section4.2.png";
import Img3 from "../img/section4.3.png";
import FooterImg from "../img/footerImg.png";

function Section4() {
  return (
    <div className="section4">
      <div className="section4-box">
        <div className="item-box child-1">
          <img className="icon " src={Icon} alt="" />
        </div>

        <div className="bottom-box-text item-box child-2">
          <div className="img-box">
            <img className="img" src={Img1} alt="" />
            <img className="img3" src={Img3} alt="" />
          </div>
          <p className="bottom-box-title">Fishing</p>
          <p className="bottom-box-subText">How founding items look?</p>
          <button className="btn">Button</button>
        </div>

        <div className="text-box item-box child-3">
          <p className="text-box-title">
            10+ Multiplayer games under Battle Royale mode
          </p>
          <p className="text-box-subText">
            All Day is a social game in which players can have a complete gaming
            experience with many mini games, social platform features, and
            blockchain technology.
          </p>
        </div>

        <div className="bottom-box-text item-box child-4">
          <div className="img-box">
            <img className="img" src={Img2} alt="" />
            <img className="img3" src={Img3} alt="" />
          </div>
          <p className="bottom-box-title">Battle Royale</p>
          <p className="bottom-box-subText">How founding items look?</p>
          <button className="btn">Button</button>
        </div>
      </div>
      <img className="footerImg" src={FooterImg} alt="" />
    </div>
  );
}

export default Section4;

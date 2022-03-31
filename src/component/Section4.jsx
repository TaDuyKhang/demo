import "../css/Section4.scss";
import Icon from "../img/elan.png";
import Img1 from "../img/section4.1.png";
import Img2 from "../img/section4.2.png";
import Img3 from "../img/section4.3.png";
import FooterImg from "../img/footerImg.png";

function Section4() {
  return (
    <div className="section4">
      <div className="content-container">
        <div className="content">
          <div className="single-mode mode-item">
            <div className=" img-box ">
              <img className="icon " src={Icon} alt="" />
            </div>

            <div className="bottom-box-text  ">
              <div className="img-box">
                <img className="img" src={Img1} alt="" />
                <img className="img3" src={Img3} alt="" />
              </div>
              <p className="bottom-box-title">Fishing</p>
              <p className="bottom-box-subText">How founding items look?</p>
              <button className="btn">Button</button>
            </div>
          </div>

          <div className="battle-royale-mode mode-item">
            <div className="text-box ">
              <p className="text-box-title">
                10+ Multiplayer games under Battle Royale mode
              </p>
              <p className="text-box-subText">
                All Day is a social game in which players can have a complete
                gaming experience with many mini games, social platform
                features, and blockchain technology.
              </p>
            </div>

            <div className="bottom-box-text">
              <div className="img-box">
                <img className="img" src={Img2} alt="" />
                <img className="img3" src={Img3} alt="" />
              </div>
              <p className="bottom-box-title">Battle Royale</p>
              <p className="bottom-box-subText">How founding items look?</p>
              <button className="btn">Button</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-line"></div>
    </div>
  );
}

export default Section4;

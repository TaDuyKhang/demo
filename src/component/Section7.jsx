import "../css/Section7.scss";
import Line from "../img/straightLine.png";
import JD from "../img/images/JD_loop.webm";
import Section7TopItem from "./Section7TopItem";
import Section7BottomItem from "./Section7BottomItem";
import FooterImg from "../img/footerImg.png";

function Section7() {
  return (
    <div className="section7">
      <p className="title">Multiplayer Social-Network game</p>
      <p className="subText">
        All Day is a social game in which players can have a complete gaming
        experience with many mini games, social platform features, and
        blockchain technology.{" "}
      </p>
      <div className="process">
        <div className="topBox">
          <Section7TopItem />
          <Section7TopItem />
          <Section7TopItem />
          <Section7TopItem />
        </div>
        <img className="line" src={Line} alt="" />
        <div className="bottomBox">
          <Section7BottomItem />
          <Section7BottomItem />
          <Section7BottomItem />
        </div>
      </div>
      <video className="JD" playsInline autoPlay muted loop>
        <source src={JD} type="video/mp4" />
      </video>

      <img className="footerImg" src={FooterImg} alt="" />
    </div>
  );
}

export default Section7;

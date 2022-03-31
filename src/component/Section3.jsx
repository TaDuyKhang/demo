import "../css/Section3.scss";
import Img1 from "../img/section3.1.png";
import Img2 from "../img/section3.2.png";
import Img3 from "../img/section3.3.png";
import FooterImg from "../img/footerImg.png";

function Section3() {
  return (
    <div className="section3">
      <p className="title">IN GAME ACTIVITIES AND COMMUNITY EVENTS</p>
      <div className="event-box">
        <div className="item-event">
          <img src={Img1} alt="" className="picture" />
          <p className="itemTitle">How founding items look?</p>
          <p className="itemSubtext">How founding items look?</p>
        </div>
        <div className="item-event">
          <img src={Img2} alt="" className="picture" />
          <p className="itemTitle">How founding items look?</p>
          <p className="itemSubtext">How founding items look?</p>
        </div>
        <div className="item-event">
          <img src={Img3} alt="" className="picture" />
          <p className="itemTitle">How founding items look?</p>
          <p className="itemSubtext">How founding items look?</p>
        </div>
      </div>
      <div className="button">
        <button>MORE EVENTS</button>
      </div>
      <img className="footerImg" src={FooterImg} alt="" />
    </div>
  );
}

export default Section3;

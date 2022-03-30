import "../css/Section5.scss";
import Item from "./Item";
import FooterImg from "../img/footerImg.png";

function Section5() {
  return (
    <div className="section5">
      <div className="setWidth">
        <p className="title">Diversified NFT Items...</p>
        <div className="box">
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
        </div>
        <div className="a">
          <button className="btn">SHOP NOW!</button>
        </div>
      </div>
      <img className="footerImg" src={FooterImg} alt="" />
    </div>
  );
}

export default Section5;

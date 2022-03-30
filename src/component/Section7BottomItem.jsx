import "../css/Section7BottomIcon.scss";
import Smile from "../img/smile.png";
import Xbox from "../img/xbox.png";
import Ellipse from "../img/Ellipse 9.png";

function Section7BottomItem() {
  return (
    <div className="section7-bottom">
      <div className="questBox">
        <img className="ellipse" src={Ellipse} alt="" />
        <div className="quest">
          <p className="q">Q4</p>
          <p className="number">2021</p>
        </div>
      </div>
      <div className="box-iconBox">
        <div className="iconBox-item">
          <img src={Smile} alt="" />
          <span>World Concept</span>
        </div>
        <div className="iconBox-item">
          <img src={Xbox} alt="" />
          <span>Internal MVP</span>
        </div>
      </div>
    </div>
  );
}

export default Section7BottomItem;

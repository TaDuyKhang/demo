import "../css/Section4.scss";
import Icon from "../img/section4/elan.png";
import Img1 from "../img/section4/section4.1.png";
import Img2 from "../img/section4/section4.2.png";
import Img3 from "../img/section4/section4.3.png";

function Section4() {
  console.log("re-render");
  return (
    <div className="section4">
      <div className="content-container">
        <div className="content">
          <div className="single-mode mode-item">
            <div className=" img-box elan-box">
              <img className="icon " src={Icon} alt="" />
            </div>

            <div className="bottom-box-text  ">
              <div className="img-box mode-description">
                <img className="img" src={Img1} alt="" />
                <img className="img3" src={Img3} alt="" />
              </div>
              <p className="bottom-box-title">Fishing</p>
              <p className="bottom-box-subText">
                When life is getting tough, you don't want to compete with
                others. <b>Fishing</b> is the best choice for you, spend your
                time with your lovely rod. That doesn’t mean you can not enjoy
                that moment alone, invite your friends to hang out,{" "}
                <b>sell fish, collect garbage</b> to clean up our All-Day world
              </p>
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
              <div className="img-box mode-description">
                <img className="img" src={Img2} alt="" />
                <img className="img3" src={Img3} alt="" />
              </div>
              <p className="bottom-box-title">Battle Royale</p>
              <p className="bottom-box-subText">
                <b>Battle Royale Contest</b> is a series of party games that
                massive multiplayer compete together,{" "}
                <b>only one victor remains</b>. The longer you survive, the more
                points you get. All the points will be accumulated until the top
                highest score players of the
                <b>weekly leaderboard</b> are awarded
              </p>
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

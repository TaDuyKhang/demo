import Border from "../img/section2/apple-iphone13pro-graphite-landscape 1.png";
import Content from "../img/section2/nhieumat.png";
import GGP from "../img/section2/gg.png";
import AS from "../img/section2/xdg.png";
import Collage from "../img/section2/ghep anh.png";
import "../css/Section2.scss";
import { useEffect, useState } from "react";

function Section2() {
  const { height, width } = useWindowDimensions();

  return (
    <section className="section2" id="news">
      <div className="content-container">
        <ul className="section2-box">
          <li className="banner-img">
            <div className="banner-image">
              {width >= 768 && width <= 1439 ? (
                <img className="collage" src={Collage} alt="" />
              ) : (
                <div>
                  <img className="border" src={Border} alt="" />
                  <img className="content" src={Content} alt="" />
                </div>
              )}
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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  /*
  Side by side comparison, to show equivalence 
    Hook                Function
  windowDimensions      this.state = { width: 0, height: 0 };
  setWindowDimensions   updateWindowDimensions
  */

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  /*
    1. When useEffect is passed an empty array as its second argument, that means to run once onMount (similarly to componentDidMount)
    2. return statements inside useEffects second argument are ran when the component will unMount
*/

  return windowDimensions;
}

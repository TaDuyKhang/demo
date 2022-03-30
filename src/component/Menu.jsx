import Logo from "../img/image 14.png";
import "../css/Menu.scss";
import {NavLink} from "react-router-dom";
import "../css/index.scss";
import MenuIcon from "../img/menu.png";
import CloseIcon from "../img/close.png";
import {useState} from "react";

function Menu() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className="header">
      <div className="header__content">
        {/* logo */}
        <div className="logo">
          <img className="img" src={Logo} alt="Logo" />
        </div>
        <div className={`menu-wrapper ${isShowMenu ? "active" : ""}`}>
          <ul className="menu">
            <div className="menu__left-box">
              <li className="link">
                <NavLink activeclassname="active" to="#Download">
                  Download
                </NavLink>
              </li>
              <li className="link">
                <NavLink activeclassname="active" to="#news">
                  News
                </NavLink>
              </li>
              <li className="link">
                <NavLink activeclassname="active" to="/Gameplay">
                  Gameplay
                </NavLink>
              </li>
              <li className="link">
                <NavLink activeclassname="isAactivective" to="/NFT">
                  NFT
                </NavLink>
              </li>
              <li className="link">
                <NavLink activeclassname="active" to="/Team">
                  Team
                </NavLink>
              </li>
              <li className="link">
                <NavLink activeclassname="active" to="/RoadMap">
                  Road map
                </NavLink>
              </li>
            </div>

            <li className="link market-place">
              <NavLink
                className="right"
                activeclassname="active"
                to="/MarketPlace"
              >
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 3.33872H6.42188L6.28125 2.75807C6.125 2.01614 5.77344 1.4113 5.22656 0.943556C4.67969 0.475814 4.03125 0.241943 3.28125 0.241943H0.984375C0.703125 0.241943 0.46875 0.338718 0.28125 0.532266C0.09375 0.725814 0 0.983879 0 1.30646C0 1.59678 0.09375 1.83872 0.28125 2.03227C0.46875 2.22581 0.703125 2.32259 0.984375 2.32259H3.28125C3.875 2.32259 4.21875 2.59678 4.3125 3.14517L6.60938 15.5323C6.79688 16.2097 7.16406 16.7581 7.71094 17.1774C8.25781 17.5968 8.85938 17.8065 9.51562 17.8065H18.9844C19.2969 17.8065 19.5469 17.7097 19.7344 17.5161C19.9219 17.3226 20.0156 17.0807 20.0156 16.7903C20.0156 16.0807 19.6719 15.7258 18.9844 15.7258H9.51562C9.07812 15.7258 8.76562 15.5323 8.57812 15.1452L8.48438 14.7097H18.5156C19.1406 14.7097 19.7109 14.5161 20.2266 14.129C20.7422 13.7419 21.0938 13.2419 21.2812 12.629L24 6.67743V6.43549C24 5.56452 23.7109 4.83065 23.1328 4.23388C22.5547 3.6371 21.8438 3.33872 21 3.33872ZM9 12.629H8.10938L6.79688 5.41936H9V12.629ZM12.9844 12.629H11.0156V5.41936H12.9844V12.629ZM17.0156 12.629H15V5.41936H17.0156V12.629ZM19.5 11.8065V11.9032C19.4062 12.2258 19.2344 12.4355 18.9844 12.5323V5.41936H21C21.5625 5.41936 21.8906 5.69356 21.9844 6.24194L19.5 11.8065ZM12 20.9032C12 21.4839 11.8047 21.9758 11.4141 22.379C11.0234 22.7823 10.5469 22.9839 9.98438 22.9839C9.45312 22.9839 8.99219 22.7823 8.60156 22.379C8.21094 21.9758 8.01562 21.4839 8.01562 20.9032C8.01562 20.3226 8.21094 19.8307 8.60156 19.4274C8.99219 19.0242 9.45312 18.8226 9.98438 18.8226C10.5469 18.8226 11.0234 19.0242 11.4141 19.4274C11.8047 19.8307 12 20.3226 12 20.9032ZM20.0156 20.9032C20.0156 21.4839 19.8203 21.9758 19.4297 22.379C19.0391 22.7823 18.5625 22.9839 18 22.9839C17.4375 22.9839 16.9609 22.7823 16.5703 22.379C16.1797 21.9758 15.9844 21.4839 15.9844 20.9032C15.9844 20.3226 16.1797 19.8307 16.5703 19.4274C16.9609 19.0242 17.4375 18.8226 18 18.8226C18.5625 18.8226 19.0391 19.0242 19.4297 19.4274C19.8203 19.8307 20.0156 20.3226 20.0156 20.9032Z" />
                </svg>
                <span>Market Place</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* menu trigger */}
        <button className="button--toggle" onClick={toggleMenu}>
          <img
            className={`icon ${!isShowMenu ? "active" : ""}`}
            src={MenuIcon}
            alt="open"
          />
          <img
            className={`icon icon--close ${isShowMenu ? "active" : ""}`}
            src={CloseIcon}
            alt="close"
          />
        </button>

        {/* overlay to close mobile menu when click outside */}
        <div
          className={`overlay ${isShowMenu ? "active" : ""}`}
          onClick={() => setIsShowMenu(false)}
        ></div>
      </div>
    </div>
  );
}

export default Menu;

/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/Footer.scss";
import Logo from "../img/footer/AllDay_Logo 2.png";

function Footer() {
  return (
    <div className="footer">
      <div className="content-container">
        <div className="content">
          <img src={Logo} alt="" />
          <div className="boxText">
            <ul className="list">
              <li>
                <a href="" title="HOME">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" title="CONTACT">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="#" title="US">
                  SUPPORT
                </a>
              </li>
              <li>
                <a href="#" title="SUPPORT">
                  PARTNERSHIP
                </a>
              </li>
            </ul>

            <ul className="list">
              <li>
                <a href="" title="HOME">
                  MARKETPLACE
                </a>
              </li>
              <li>
                <a href="#" title="CONTACT">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" title="US">
                  FQA
                </a>
              </li>
            </ul>

            <ul className="list">
              <li>
                <a href="" title="HOME">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" title="CONTACT">
                  POLICY
                </a>
              </li>
              <li>
                <a href="#" title="US">
                  WHITEPAPER
                </a>
              </li>
              <li>
                <a href="#" title="SUPPORT">
                  AUDIT REPORT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

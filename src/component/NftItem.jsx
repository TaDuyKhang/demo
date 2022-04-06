import starIcon from "../img/section5/star.svg";
import reloadIcon from "../img/section5/reload.svg";
import hatIcon from "../img/section5/hat.svg";
import "../css/NftItem.scss";

function NftItem({ imageSrc, bgcSrc, balance, usdtValue, starValue, name }) {
  return (
    <div className="textbox-01">
      <div
        style={{
          backgroundImage: `url(${bgcSrc})`,
        }}
        className="banner-wrapper"
      >
        <img className="banner" src={imageSrc} alt={name} />
      </div>

      <img className="hat" src={hatIcon} alt="hat" />

      <div className="star-wrapper">
        <img className="star" src={starIcon} alt="star" />
        <span className="number">{starValue}</span>
      </div>

      <div className="text-box__info">
        <p className="text-box__title">{name}</p>

        <div className="textBox__group">
          <div className="rare">Rare</div>

          <div className="right-group">
            <div className="reload">
              <img src={reloadIcon} alt="reload" />
            </div>

            <div className="value">
              <p className="bnb">{balance ?? "???"} BNB</p>
              <p className="usdt">{usdtValue} USDT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftItem;

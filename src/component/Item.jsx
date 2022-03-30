import Img from "../img/section5.1.png";
import Icon from "../img/section5icon.png";
// import Star from "../img/section5star.png";
import Circle from "../img/hinhtron.png";
import "../css/Item.scss";

function Item() {
  return (
    <div className="item">
      <img className="img" src={Img} alt="" />
      <div className="iconBox">
        <img className="icon" src={Icon} alt="" />
        <svg
          className="star"
          width="80"
          height="85"
          viewBox="0 0 75 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_541_278)">
            <path
              d="M53.7072 30.0851L41.7159 28.2602L36.3555 16.8803C36.2091 16.5688 35.9683 16.3165 35.6707 16.1632C34.9245 15.7775 34.0177 16.0989 33.6446 16.8803L28.2843 28.2602L16.293 30.0851C15.9624 30.1346 15.6602 30.2978 15.4288 30.5451C15.149 30.8462 14.9948 31.2513 15.0001 31.6714C15.0054 32.0915 15.1698 32.4922 15.4571 32.7854L24.1329 41.643L22.0832 54.1505C22.0351 54.4415 22.0659 54.7407 22.172 55.0143C22.278 55.2879 22.4552 55.5249 22.6833 55.6984C22.9115 55.8719 23.1815 55.975 23.4627 55.996C23.744 56.017 24.0252 55.9551 24.2746 55.8172L35.0001 49.9121L45.7256 55.8172C46.0184 55.9804 46.3585 56.0348 46.6843 55.9754C47.5061 55.8271 48.0587 55.0111 47.917 54.1505L45.8673 41.643L54.5431 32.7854C54.7792 32.5431 54.9351 32.2266 54.9823 31.8804C55.1098 31.0149 54.5336 30.2137 53.7072 30.0851Z"
              fill="#FFCD36"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_541_278"
              x="-5"
              y="0"
              width="80"
              height="80"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_541_278"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_541_278"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span className="number">50</span>
      </div>
      <div className="textBox">
        <p className="boxTitle">T-Queen Beanie</p>
        <div className="smallBox">
          <div className="level">Rare</div>

          <div className="circle">
            <img src={Circle} alt="" />
            <svg
              className="a"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.58594 10.3338C2.66954 13.0806 5.14194 15 8.01894 15C11.6589 15 14.6493 11.9298 15.0021 7.99995M11.4937 4.81075H14.1621C14.2724 4.81075 14.3817 4.78902 14.4836 4.74681C14.5855 4.7046 14.6781 4.64272 14.7561 4.56472C14.8341 4.48672 14.896 4.39412 14.9382 4.29221C14.9804 4.19029 15.0021 4.08106 15.0021 3.97075V1.69995L11.4937 4.81075Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              className="b"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5084 1.271H1.84C1.61722 1.271 1.40356 1.3595 1.24603 1.51703C1.0885 1.67456 1 1.88821 1 2.111V5.1602"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              className="c"
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4162 4.7338C13.334 2.5358 10.8602 1 7.9832 1C4.3432 1 1.35 3.4556 1 6.6"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="money">
            <p className="BNB">??? BNB</p>
            <p className="USDT">-100 USDT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

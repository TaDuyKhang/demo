import NftItem from "./NftItem";
import FooterImg from "../img/footerImg.png";
import Img from "../img/section5/item-avatar.png";
import "../css/Section5.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NFT_ITEMS = [
  {
    imageSrc: Img,
    balance: undefined,
    usdtValue: -100,
    starValue: 50,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: Img,
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: Img,
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: Img,
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: Img,
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
];

function Section5() {
  return (
    <div className="section5">
      <div className="content-container">
        <p className="title">Diversified NFT Items...</p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1.25}
          breakpoints={{
            375: {
              slidesPerView: 1.35,
            },
            480: {
              slidesPerView: 2.35,
            },
            768: {
              slidesPerView: 2.5,
            },
            992: {
              slidesPerView: 3.5,
            },
            1300: {
              spaceBetween: 42,
              slidesPerView: 5,
            },
          }}
        >
          {NFT_ITEMS.map((item, index) => (
            <SwiperSlide key={index}>
              <NftItem className="item" {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="button-wrapper">
          <button className="btn">SHOP NOW!</button>
        </div>
      </div>

      <div className="section-line"></div>
    </div>
  );
}

export default Section5;

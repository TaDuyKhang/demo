import NftItem from "./NftItem";
import "../css/Section5.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper";

const NFT_ITEMS = [
  {
    imageSrc: "img/section5/face01.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/face02.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/face03.0001.png",
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/face04.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair00.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair01.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair02.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair03.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair04.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair05.0001.png",
    bgcSrc: "img/section5/bgc2.png",
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
          modules={[Grid]}
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
              grid: {
                fill: "row",
                rows: 2,
              },
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

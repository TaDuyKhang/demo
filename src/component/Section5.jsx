import NftItem from "./NftItem";
import "../css/Section5.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const NFT_ITEMS = [
  {
    imageSrc: "img/section5/face01.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/face02.0001.png",
    bgcSrc: "img/section5/bgc2.png",
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
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair00.0001.png",
    bgcSrc: "img/section5/bgc5.png",
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
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair04.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair05.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair06.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair07.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair08.0001.png",
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hair09.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hat01.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/hat07.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/pant00.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/pant01.0001.png",
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/pant02.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/pant03.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/pant04.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/pant07.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/pant08.0001.png",
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/pant08.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt01.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt02.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt03.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt04.0001.png",
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt05.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt06.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt07.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt08.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shirt09.0001.png",
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes00.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes01.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes02.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes03.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes04.0001.png",
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes05.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes06.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes07.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes08.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/shoes09.0001.png",
    bgcSrc: "img/section5/bgc3.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/skin01.0001.png",
    bgcSrc: "img/section5/bgc4.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/skin02.0001.png",
    bgcSrc: "img/section5/bgc5.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/skin03.0001.png",
    bgcSrc: "img/section5/bgc1.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
  {
    imageSrc: "img/section5/skin04.0001.png",
    bgcSrc: "img/section5/bgc2.png",
    balance: undefined,
    usdtValue: -120,
    starValue: 75,
    name: "T-Queen Beanie ",
  },
];

function Section5() {
  const [randomItem, setRandomItem] = useState(getRandomItem(NFT_ITEMS));
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
          {randomItem.map((item, index) => (
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

function getRandomItem(arr) {
  const Array = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    let item = arr[randomIndex];
    Array.push(item);
  }
  return Array;
}

export default Section5;

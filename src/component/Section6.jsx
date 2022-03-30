import TeamItem from "./TeamItem";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import "../css/Section6.scss";
import "swiper/css";
import "swiper/css/navigation";

const TEAM = [
  {
    imageSrc: "http://unsplash.it/300/200",
    name: "Thao",
    role: "CEO",
    desc: `CEO of FaraStarter.
    CMO of VCC Exchange.
    Owner & Co-Founder of several
    Crypto Trading & Investing channels.`,
  },
  {
    imageSrc: "http://unsplash.it/300/201",
    name: "Thao",
    role: "CEO",
    desc: `CEO of FaraStarter.`,
  },
  {
    imageSrc: "http://unsplash.it/300/202",
    name: "Thao",
    role: "CEO",
    desc: `CEO of FaraStarter.
    CMO of VCC Exchange.
    Owner & Co-Founder of several
    Crypto Trading & Investing channels.`,
  },
  {
    imageSrc: "http://unsplash.it/300/204",
    name: "Thao",
    role: "CEO",
    desc: `CEO of FaraStarter.
    CMO of VCC Exchange.
    Owner & Co-Founder of several
    Crypto Trading & Investing channels.`,
  },
  {
    imageSrc: "http://unsplash.it/300/206",
    name: "Thao",
    role: "CEO",
    desc: `CEO of FaraStarter.
    CMO of VCC Exchange.`,
  },
  {
    imageSrc: "http://unsplash.it/300/207",
    name: "Thao",
    role: "CEO",
    desc: `CEO of FaraStarter.
    CMO of VCC Exchange.
    Owner & Co-Founder of several
    Crypto Trading & Investing channels.`,
  },
];

function Section6() {
  return (
    <div className="section6">
      <div className="content-container">
        <p className="title">Team</p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1.25}
          navigation={true}
          modules={[Navigation]}
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
              spaceBetween: 36,
              slidesPerView: 4,
            },
          }}
        >
          {TEAM.map((item) => (
            <SwiperSlide>
              <TeamItem className="item" {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="section-line"></div>
    </div>
  );
}

export default Section6;

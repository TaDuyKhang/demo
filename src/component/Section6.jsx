import TeamItem from "./TeamItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "../css/Section6.scss";
import "swiper/css";
import "swiper/css/navigation";

const TEAM = [
  {
    imageSrc: "img/section6/khoi-do.png",
    name: "Khoi Do",
    role: "CEO",
    desc: ` Co-Founder Miracle Games
    “He Always Smiles”
    - 2013 Youtube Phenomenon
    Serial Entrepreneur`,
  },
  {
    imageSrc: "img/section6/Albert Tran.png",
    name: "Albert Tran",
    role: "CPO",
    desc: ` Co-Founder Miracle Games Group
    Founder of Tofu Games
    Founder of Day137 - Indie game
    12 years experience in Game industry`,
  },
  {
    imageSrc: "img/section6/Hai Pham.png",
    name: "Hai Pham",
    role: "CTO",
    desc: ` Former CTO & Co-Founder of MOG Vietnam
    Former CTO & Co-Founder of Mwork
    15 years experience in
    Security and Game industry`,
  },
  {
    imageSrc: "img/section6/Son Nguyen.png",
    name: "Son Nguyen",
    role: "CMO",
    desc: `  Former CMO of Golden Gate Group
    Manage 22 Brands with 430 Retail locations
    12 years experience in high-level of marketing`,
  },
  {
    imageSrc: "img/section6/Son Ho.png",
    name: "Son Ho",
    role: "Community Advisor",
    desc: ` CEO of FaraStarter
    CMO of VCC Exchange
    Owner & Co-Founder of several
    Crypto Trading & Investing channels`,
  },
  {
    imageSrc: "img/section6/Hieu Tran.png",
    name: "Hieu Tran",
    role: "Blockchain Advisor",
    desc: ` 6+ years blockchain and security system
    10+ years in software industry`,
  },
  {
    imageSrc: "img/section6/Nhat Do.png",
    name: "Nhat Do",
    role: "Art Advisor",
    desc: ` Co-Founding Art Director for Zitga Studios`,
  },
  {
    imageSrc: "img/section6/Anh Le.png",
    name: "Anh Le",
    role: "Game Producer",
    desc: `  6 years experience in designing game
    5 years experience in Game Development
    Former Game Design Lead at Day137`,
  },
  {
    imageSrc: "img/section6/Dong Do.png",
    name: "Dong Do",
    role: "Head of Performance",
    desc: `  10 years in Game Development
    TeamOne Global CTO
    Former Client Lead at Tofu Studio`,
  },
  {
    imageSrc: "img/section6/Chau Cao.png",
    name: "Chau Cao",
    role: "Head of Animation",
    desc: `  Former 3D Animation at Thunder Cloud
    Former 3D Artist at iKame
    Former 3D Artist at OneSoft`,
  },
  {
    imageSrc: "img/section6/Tung Luong.png",
    name: "Tung Luong",
    role: "Game Backend Lead",
    desc: `  8 years in online game development
    Former Game Backend at Tofu Games
    Former Architecture at TechcomBank`,
  },
  {
    imageSrc: "img/section6/Tung Chaien.png",
    name: "Tung Chaien",
    role: "Head of Performance",
    desc: `  Former Founder of Welax
    Owner of Phe Game Channel
    8 years experience in
    social media & community`,
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
          {TEAM.map((item, index) => (
            <SwiperSlide key={index}>
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

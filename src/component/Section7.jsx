import "../css/Section7.scss";
import JD from "../img/images/JD_loop.webm";
import Smile from "../img/section7/smile.png";
import Xbox from "../img/section7/xbox.svg";
import TShirt from "../img/section7/t-shirt.png";
import Island from "../img/section7/island.png";
import TimeLineItem from "./TimeLineItem";
import { useMobileDetect } from "../hooks/mobile-detect.hook";
import { useEffect, useState } from "react";

const TIME_LINE_TOTAL_POINT = 14;
const TIME_LINE_TOTAL_POINT_DESKTOP = 19;
const TIME_LINE = [
  {
    timeTitle: "Q4",
    year: "2022",
    topPoint: 0,
    group: [
      {
        icon: Smile,
        text: "World Concept",
      },
      {
        icon: Xbox,
        text: "Internal MVP",
      },
    ],
  },
  {
    timeTitle: "Q1",
    year: "2022",
    topPoint: 2,
    group: [
      {
        icon: Smile,
        text: "Treasure Box Initial Sale",
      },
      {
        icon: Xbox,
        text: "Market Place",
      },
      {
        icon: TShirt,
        text: "Fishing Game",
      },
      {
        icon: Island,
        text: "Testnet Release",
      },
    ],
  },
  {
    timeTitle: "Q2",
    year: "2022",
    topPoint: 4,
    group: [
      {
        icon: Smile,
        text: "Testnet Release",
      },
      {
        icon: Xbox,
        text: "Battle Royale Games",
      },
      {
        icon: TShirt,
        text: "Ingame Social Activities",
      },
      {
        icon: Island,
        text: "NFT Creator Event",
      },
      {
        icon: Smile,
        text: "Mainet Release",
      },
    ],
  },
  {
    timeTitle: "Q3",
    year: "2022",
    topPoint: 6,
    group: [
      {
        icon: Smile,
        text: "Co-Op Escape Game",
      },
      {
        icon: Xbox,
        text: "NFT Creator Workshop",
      },
      {
        icon: TShirt,
        text: "More Party Games",
      },
    ],
  },
  {
    timeTitle: "Q4",
    year: "2022",
    topPoint: 8,
    group: [
      {
        icon: Smile,
        text: "Land Initial Sale",
      },
      {
        icon: Xbox,
        text: "Restaurant",
      },
      {
        icon: TShirt,
        text: "Engagement Event",
      },
    ],
  },
  {
    timeTitle: "Q1",
    year: "2022",
    topPoint: 10,
    group: [
      {
        icon: Smile,
        text: "RPG World",
      },
      {
        icon: Xbox,
        text: "House Building",
      },
      {
        icon: TShirt,
        text: "Co-Op RPG Arena",
      },
    ],
  },
  {
    timeTitle: "Q2",
    year: "2022",
    topPoint: 12,
    group: [
      {
        icon: Smile,
        text: "VR Implement",
      },
      {
        icon: Xbox,
        text: "More Party Game",
      },
      {
        icon: TShirt,
        text: "Decentralize The Game",
      },
    ],
  },
];

function Section7() {
  const isMobile = useMobileDetect();
  const [totalPoint, setTotalPoint] = useState(TIME_LINE_TOTAL_POINT);

  useEffect(() => {
    setTotalPoint(
      isMobile ? TIME_LINE_TOTAL_POINT : TIME_LINE_TOTAL_POINT_DESKTOP
    );
  }, [isMobile]);

  return (
    <div className="section7">
      <div className="content-container">
        <div className="textbox">
          <p className="title">Multiplayer Social-Network game</p>
          <p className="sub-text">
            All Day is a social game in which players can have a complete gaming
            experience with many mini games, social platform features, and
            blockchain technology.{" "}
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="line"></div>

            {TIME_LINE.map((item, index) => (
              <div
                key={index}
                className={`item ${index % 2 === 0 ? "odd" : "even"}`}
                style={{
                  "--position":
                    Number((item.topPoint / totalPoint) * 100) + "%",
                }}
              >
                <TimeLineItem {...item} key={index}></TimeLineItem>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <video className="JD" playsInline autoPlay muted loop>
            <source src={JD} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

export default Section7;

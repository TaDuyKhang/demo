import "../css/Section7.scss";
import JD from "../img/images/JD_loop.webm";
import Smile from "../img/smile.png";
import Xbox from "../img/xbox.svg";
import TimeLineItem from "./TimeLineItem";
import {useMobileDetect} from "../hooks/mobile-detect.hook";
import {useEffect, useState} from "react";

const TIME_LINE_TOTAL_POINT = 14;
const TIME_LINE_TOTAL_POINT_DESKTOP = 19;
const TIME_LINE = [
  {
    timeTitle: "Q1",
    year: "2021",
    topPoint: 0,
    group: [
      {
        icon: Smile,
        text: "World Concept hello World",
      },
      {
        icon: Xbox,
        text: "Internal MVP",
      },
    ],
  },
  {
    timeTitle: "Q2",
    year: "2021",
    topPoint: 2,
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
    timeTitle: "Q3",
    year: "2021",
    topPoint: 4,
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
    timeTitle: "Q4",
    year: "2021",
    topPoint: 6,
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
    timeTitle: "Q5",
    year: "2021",
    topPoint: 8,
    group: [
      {
        icon: Smile,
        text: "World Concept",
      },
    ],
  },
  {
    timeTitle: "Q6",
    year: "2021",
    topPoint: 10,
    group: [
      {
        icon: Smile,
        text: "World Concept",
      },
    ],
  },
  {
    timeTitle: "Q7",
    year: "2021",
    topPoint: 12,
    group: [
      {
        icon: Smile,
        text: "World Concept",
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

      <div className="section-line"></div>
    </div>
  );
}

export default Section7;

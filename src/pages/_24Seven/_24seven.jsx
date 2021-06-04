import React, { useState } from "react";
import Swipe from "react-easy-swipe";
import frame_1 from "../../assets/img/_24seven/frame_1.jpg";
import frame_2 from "../../assets/img/_24seven/frame_2.jpg";
import frame_3 from "../../assets/img/_24seven/frame_3.jpg";
import frame_5 from "../../assets/img/_24seven/frame_5.jpg";
import frame_6 from "../../assets/img/_24seven/frame_6.jpg";
import frame_7 from "../../assets/img/_24seven/frame_7.jpg";
import frame_8 from "../../assets/img/_24seven/frame_8.jpg";
import "./style.scss";
import TouchAppRoundedIcon from "@material-ui/icons/TouchAppRounded";

const _24seven = () => {
  const [frames, setFrames] = useState(1);

  const handleClick = () => setFrames(frames + 1);
  const onSwipeUp = (e) => setFrames(frames + 1);
  const handleFirst = () => setFrames(frames + 1);
  const handleSecond = () => setFrames(frames + 2);
  const handleThird = () => setFrames(frames + 3);
  const handleFourth = () => setFrames(frames + 4);

  switch (frames) {
    case 1: {
      return (
        <div className="_360x640 frame_1">
          <img src={frame_1} alt="frame_1" onClick={handleClick} />
          <p onClick={handleClick}>TAP TO ENGAGE</p>
        </div>
      );
    }
    case 2: {
      return (
        <div className="_360x640 frame_2">
          <Swipe onSwipeUp={(e) => onSwipeUp(e)}>
            <div className="transparent"></div>
          </Swipe>
          <img style={{ width: 360 }} src={frame_2} alt="frame_2" />
          <div className="message-1">
            YOUR <span>SAFETY</span>
            <br /> IS OUR <span>PRIORITY</span>
          </div>
          <div className="message">
            <TouchAppRoundedIcon className="swipe" />
            <p>SWIPE UP</p>
          </div>
        </div>
      );
    }
    case 3: {
      return (
        <div className="_360x640 frame_3">
          <img src={frame_3} alt="frame_3" />
          <div className="first box" onClick={handleFirst}></div>
          <div className="sec box" onClick={handleSecond}></div>
          <div className="third box" onClick={handleThird}></div>
          <div className="four box" onClick={handleFourth}></div>
        </div>
      );
    }
    case 4: {
      return (
        <div className="_360x640 last-frame">
          <img src={frame_5} alt="frame_4" />
          <a
            href="https://www.24-seven.in/"
            target="_blank"
            rel="noreferrer"
            className="know-more"
          >
            .
          </a>
        </div>
      );
    }
    case 5: {
      return (
        <div className="_360x640 last-frame">
          <img src={frame_6} alt="frame_5" />
          <a
            href="https://www.24-seven.in/"
            target="_blank"
            rel="noreferrer"
            className="know-more"
          >
            .
          </a>
        </div>
      );
    }
    case 6: {
      return (
        <div className="_360x640 last-frame">
          <img src={frame_7} alt="frame_6" />
          <a
            href="https://www.24-seven.in/"
            target="_blank"
            rel="noreferrer"
            className="know-more"
          >
            .
          </a>
        </div>
      );
    }
    case 7: {
      return (
        <div className="_360x640 last-frame">
          <img src={frame_8} alt="frame_7" />
          <a
            href="https://www.24-seven.in/"
            target="_blank"
            rel="noreferrer"
            className="know-more"
          >
            .
          </a>
        </div>
      );
    }
    default:
      <p>Error Loading the page</p>;
  }
};

export default _24seven;

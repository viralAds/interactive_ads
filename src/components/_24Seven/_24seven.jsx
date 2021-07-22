import React, { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import Shake from "shake.js";
import frame_1 from "../../assets/img/_24seven/frame_1.jpg";
import frame_2 from "../../assets/img/_24seven/frame_2.jpg";
import frame_3 from "../../assets/img/_24seven/frame_3.jpg";
import frame_4 from "../../assets/img/_24seven/frame_4.jpg";
import frame_5 from "../../assets/img/_24seven/frame_5.jpg";
import frame_6 from "../../assets/img/_24seven/frame_6.jpg";
import frame_7 from "../../assets/img/_24seven/frame_7.jpg";
import frame_8 from "../../assets/img/_24seven/frame_8.jpg";
import "./style.scss";
import ScreenRotationIcon from "@material-ui/icons/ScreenRotation";
import TouchAppRoundedIcon from "@material-ui/icons/TouchAppRounded";

const _24seven = () => {
  const [frames, setFrames] = useState(1);
  const [finalFrame, setFinalFrame] = useState(4);

  useEffect(() => {
    window.addEventListener("shake", shakeEventDidOccur, false);
  });

  const myShakeEvent = new Shake({
    threshold: 7, // optional shake strength threshold
    timeout: 1000, // optional, determines the frequency of event generation
  });

  const handleClick = () => setFrames(frames + 1);
  const onSwipeUp = (e) => setFrames(frames + 1);

  const handleChooseCard = (cardNumber) => {
    setFrames(frames + 1);
    if (cardNumber === 1) {
      setFinalFrame(8);
    } else if (cardNumber === 2) {
      setFinalFrame(9);
    } else if (cardNumber === 3) {
      setFinalFrame(10);
    } else if (cardNumber === 4) {
      setFinalFrame(11);
    }
    myShakeEvent.start();
  };

  const shakeEventDidOccur = () => {
    setFrames(finalFrame);
  };

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
          <div className="message24">
            <TouchAppRoundedIcon className="swipe" />
            <span>SWIPE UP</span>
          </div>
        </div>
      );
    }
    case 3: {
      return (
        <div className="_360x640 frame_3">
          <img src={frame_3} alt="frame_3" />
          <div className="first box" onClick={() => handleChooseCard(1)}></div>
          <div className="sec box" onClick={() => handleChooseCard(2)}></div>
          <div className="third box" onClick={() => handleChooseCard(3)}></div>
          <div className="four box" onClick={() => handleChooseCard(4)}></div>
        </div>
      );
    }

    case 4: {
      return (
        <div className="_360x640 frame_4">
          <img src={frame_4} alt="frame_4" />
          <ScreenRotationIcon className="shake-icon24" />
        </div>
      );
    }
    case 8: {
      return (
        <div className="_360x640 last-frame">
          <img src={frame_5} alt="frame_5" />
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
    case 9: {
      return (
        <div className="_360x640 last-frame">
          <img src={frame_6} alt="frame_6" />
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
    case 10: {
      return (
        <div className="_360x640 last-frame">
          <img src={frame_7} alt="frame_7" />
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
    case 11: {
      return (
        <div className="_360x640 last-frame">
          <img src={frame_8} alt="frame_8" />
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

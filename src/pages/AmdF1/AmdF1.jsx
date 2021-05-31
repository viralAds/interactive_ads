import React, { useState, useRef } from "react";
import { Waypoint } from "react-waypoint";
import amdVideo from "../../assets/videos/amd1.mp4";
import image from "../../assets/img/amd/amdf1.jpg";
import firstLogo from "../../assets/img/amd/first.jpg";
import amdLogo from "../../assets/img/amd/amdLogo.png";
import forward from '../../assets/img/amd/bb-back.png';
import "./style.scss";

const AmdF1 = () => {
  const videoPlayer = useRef(null);
  const [isfirstFrameActive, setIsfirstFrameActive] = useState(true);
  const [isSecondFrameActive, setIsSecondFrameActive] = useState(false);
  const [isThirdFrameActive, setIsThirdFrameActive] = useState(false);

  const handleFirstFrame = () => {
    setIsfirstFrameActive(false);
    setIsSecondFrameActive(true);
  };

  const handleSecondFrame = () => {
    setIsSecondFrameActive(false);
    setIsThirdFrameActive(true);
  };

  const handleEnterViewport = () => {
    videoPlayer.current.play();
  };

  const handleExitViewport = () => {
    videoPlayer.current.pause();
  };

  return (
    <div>
      <div style={{ position: "relative", width: 300, height: 250 }}>
        {isfirstFrameActive && (
          <div onClick={handleFirstFrame}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={firstLogo}
              alt="amdF1"
            />
            <p
              className="message"
              style={{
                position: "absolute",
                height: "min-content",
                width: 300,
                bottom: 2,
                textAlign: "center",
                color: "#fff",
                fontFamily: "Montserrat-Medium",
                cursor: "pointer",
              }}
            >
              Tap to Explore
            </p>
          </div>
        )}
        {isSecondFrameActive && (
          <div onClick={handleSecondFrame}>
            <Waypoint
              onEnter={handleEnterViewport}
              onLeave={handleExitViewport}
            >
              <video ref={videoPlayer} width="300" height="250">
                <source src={amdVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Waypoint>
            <img
              style={{ position: "absolute", top: 5, right: 5, width: 120 }}
              src={amdLogo}
              alt="amdLogo"
            />
            <img
              src={forward}
              alt="forward"
              style={{
                width: 25,
                height: 25,
                position: "absolute",
                bottom: 10,
                right: 10,
                transform: "rotate(180deg)"   
              }}
            />
          </div>
        )}
        {isThirdFrameActive && (
          <div style={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={image}
              alt="amdF1"
            />
            <a
              href="https://www.ekaleido.tech/"
              target="_blank"
              rel="noreferrer"
              style={{
                position: "absolute",
                width: 87,
                height: 17,
                bottom: 14,
                right: 38,
              }}
            >.</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmdF1;

import React, { useState, useRef } from "react";
import { Waypoint } from "react-waypoint";
import amdVideo from "../../assets/videos/amd1.mp4";
import image from "../../assets/img/amd/amdf1.jpg";
import "./style.scss";

const AmdF1 = () => {
  const videoPlayer = useRef(null);
  const [isfirstFrameActive, setIsfirstFrameActive] = useState(true);

  const handleFrame = () => {
    setIsfirstFrameActive(false);
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
          <div onClick={handleFrame}>
            <Waypoint
              onEnter={handleEnterViewport}
              onLeave={handleExitViewport}
            >
              <video ref={videoPlayer} width="300" height="250">
                <source src={amdVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Waypoint>
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
              }}
            >
              Tap to Explore
            </p>
          </div>
        )}
        {!isfirstFrameActive && (
          <img
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt="amdF1"
          />
        )}
      </div>
    </div>
  );
};

export default AmdF1;

import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import amdVideo from "../../assets/videos/amd1.mp4";
import image from "../../assets/img/amd/amdf1.jpg";
import "./style.scss";

const AmdF1 = () => {
  const [isfirstFrameActive, setIsfirstFrameActive] = useState(true);
  const [isMutedActive, setIsMutedActive] = useState(false);
  const handleFrame = () => {
    setIsfirstFrameActive(false);
  };

  const handleEnterViewport = () => {
    setIsMutedActive(false);
  };

  const handleExitViewport = () => {
    setIsMutedActive(true);
  };
  return (
    <div style={{ position: "relative", width: 300, height: 250 }}>
      {isfirstFrameActive && (
        <div
          style={{ position: "relative", width: 300, height: 250 }}
          onClick={handleFrame}
        >
          <Waypoint onEnter={handleEnterViewport} onLeave={handleExitViewport}>
            <video width="300" height="250" autoPlay muted={isMutedActive}>
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
              bottom: 50,
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
  );
};

export default AmdF1;

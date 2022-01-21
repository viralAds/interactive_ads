import { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import "../Omega/Omega.scss";
import "../Common/ad.scss";

import video from "../../assets/videos/omega.mp4";
import astroImg from "../../assets/img/astroImg.jpeg";
import chronograph from "../../assets/img/chronograph.jpeg";
import watch from "../../assets/img/watch.jpeg";
import astro from "../../assets/icons/astronaut.png";
import clock from "../../assets/icons/clock.png";
import swipe from "../../assets/icons/know_more.png";

function Omega() {
  if (typeof window !== `undefined`) {
    AOS.init({
      once: false,
      mirror: false,
    });
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [toggleFirstAnimationBox, setToggleFirstAnimationBox] = useState(false);
  const [toggleSecondAnimationBox, setToggleSecondAnimationBox] =
    useState(false);
  const [toggleThirdAnimationBox, setToggleThirdAnimationBox] = useState(false);

  const closeAnimation = () => {
    setToggleFirstAnimationBox(false);
    setToggleSecondAnimationBox(false);
    setToggleThirdAnimationBox(false);
    setIsPlaying(true);
  };

  const firstAnim = () => {
    setToggleFirstAnimationBox(true);
    setToggleSecondAnimationBox(false);
    setToggleThirdAnimationBox(false);
    setIsPlaying(false);
  };

  const secondAnim = () => {
    setToggleSecondAnimationBox(true);
    setToggleFirstAnimationBox(false);
    setToggleThirdAnimationBox(false);
    setIsPlaying(false);
  };

  const thirdAnim = () => {
    setToggleFirstAnimationBox(false);
    setToggleSecondAnimationBox(false);
    setToggleThirdAnimationBox(true);
    setIsPlaying(false);
  };

  const startVideo = () => {
    setIsPlaying(true);
    document
      .getElementsByClassName("first-screen")[0]
      .style.setProperty("display", "none");
  };

  return (
    <div>
      <div className="app-in">
        <div className="visible-area">
          {toggleFirstAnimationBox && (
            <div
              className="first poster"
              data-aos={"slide-left"}
              data-aos-delay="100"
              data-aos-mirror="false"
              data-aos-duration="900"
              data-aos-easing="ease-out"
            >
              <img src={astroImg} alt="astroImg" />
              <DoubleArrowIcon
                className="back-arrow"
                onClick={closeAnimation}
              />
            </div>
          )}

          {toggleSecondAnimationBox && (
            <div
              className="first poster"
              data-aos={"slide-up"}
              data-aos-delay="100"
              data-aos-mirror="false"
              data-aos-duration="900"
              data-aos-easing="ease-out"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.omegawatches.com/watches/speedmaster/moonwatch-professional/product"
                target="_blank"
                rel="noreferrer"
                style={{ position: "absolute" }}
                className="btn-knowmore"
                data-aos={"slide-up"}
                data-aos-delay="600"
                data-aos-mirror="false"
                data-aos-duration="900"
                data-aos-easing="ease-out"
              >
                KNOW MORE
              </a>
              <img src={watch} alt="watch" />
              <DoubleArrowIcon
                className="back-arrow"
                onClick={closeAnimation}
              />
            </div>
          )}

          {toggleThirdAnimationBox && (
            <div
              className="first poster"
              data-aos={"slide-right"}
              data-aos-delay="100"
              data-aos-mirror="false"
              data-aos-duration="900"
              data-aos-easing="ease-out"
            >
              <img src={chronograph} alt="chronograph" />
              <DoubleArrowIcon
                className="back-arrow"
                onClick={closeAnimation}
              />
            </div>
          )}
          <div className="first-screen">
            <Button onClick={startVideo}>Tap to Start</Button>
          </div>
          <ReactPlayer
            className="video-screen"
            url={video}
            loop={true}
            muted={false}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={false}
          ></ReactPlayer>
          <div className="icons">
            <img onClick={firstAnim} src={astro} alt="astro" />
            <img onClick={secondAnim} src={swipe} alt="swipe" />
            <img onClick={thirdAnim} src={clock} alt="clock" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Omega;

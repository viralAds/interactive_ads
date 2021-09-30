import React, { useState } from "react";
import "./vega.scss";
import { Carousel } from "react-responsive-carousel";
import frame_1 from "../../assets/img/vega/frame_1.jpg";
import frame_2 from "../../assets/img/vega/frame_2.jpg";
import frame_2_1 from "../../assets/img/vega/frame_2_1.jpg";
import frame_2_2 from "../../assets/img/vega/frame_2_2.jpg";
import frame_2_3 from "../../assets/img/vega/frame_2_3.jpg";
import slider_1 from "../../assets/img/vega/slider_1.jpg";
import slider_1_2 from "../../assets/img/vega/slider_1_2.jpg";
import slider_2 from "../../assets/img/vega/slider_2.jpg";
import slider_2_2 from "../../assets/img/vega/slider_2_2.jpg";
import slider_3 from "../../assets/img/vega/slider_3.jpg";
import slider_3_2 from "../../assets/img/vega/slider_3_2.jpg";

const Men = () => {
  const [carouselStatus, setCarouselStatus] = useState(true);
  const [productZero, setProductZero] = useState(false);
  const [productOne, setProductOne] = useState(false);
  const [productTwo, setProductTwo] = useState(false);

  const handleChange = (index, item) => {
    setCarouselStatus(false);
    switch (index) {
      case 0:
        setProductZero(true);
        break;
      case 1:
        setProductOne(true);
        break;
      case 2:
        setProductTwo(true);
        break;
      default:
        return;
    }
  };

  const handleBack = () => {
    setCarouselStatus(true);
    setProductZero(false);
    setProductOne(false);
    setProductTwo(false);
  };

  return (
    <div className="men-component" style={{ width: 320, height: 480 }}>
      {carouselStatus && (
        <Carousel
          swipeable={true}
          showArrows={true}
          infiniteLoop={true}
          axis={"horizontal"}
          showThumbs={false}
          showIndicators={false}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={100}
          onClickItem={handleChange}
          autoPlay={true}
          interval={5000}
        >
          <img src={slider_1} alt="slider_1" />
          <img src={slider_2} alt="slider_2" />
          <img src={slider_3} alt="slider_3" />
        </Carousel>
      )}
      {productZero && (
        <div className="vega-cta">
          <img src={slider_1_2} alt="slider_1_2" />
          <div className="vega-back" onClick={handleBack}></div>
          <a
            href="https://www.vega.co.in/x2-beard-trimmer.html"
            target="_blank"
            rel="noreferrer"
            className="men-cta-btn"
          >
            BUY NOW
          </a>
        </div>
      )}
      {productOne && (
        <div className="vega-cta">
          <img src={slider_2_2} alt="slider_1_2" />
          <div className="vega-back" onClick={handleBack}></div>
          <a
            href="https://www.vega.co.in/t3-beard-trimmer.html"
            target="_blank"
            rel="noreferrer"
            className="men-cta-btn"
          >
            BUY NOW
          </a>
        </div>
      )}
      {productTwo && (
        <div className="vega-cta">
          <img src={slider_3_2} alt="slider_1_2" />
          <div className="vega-back" onClick={handleBack}></div>
          <a
            href="https://www.vega.co.in/t1-beard-trimmer.html"
            target="_blank"
            rel="noreferrer"
            className="men-cta-btn"
          >
            BUY NOW
          </a>
        </div>
      )}
    </div>
  );
};

const Women = () => {
  const [firstStatus, setFirstStatus] = useState(true);
  const [productZero, setProductZero] = useState(false);
  const [productOne, setProductOne] = useState(false);
  const [productTwo, setProductTwo] = useState(false);

  const handleWomenCta = (prod) => {
    setFirstStatus(false);
    switch (prod) {
      case 0:
        setProductZero(true);
        break;
      case 1:
        setProductOne(true);
        break;
      case 2:
        setProductTwo(true);
        break;
      default:
        return;
    }
  };

  const handleBack = () => {
    setFirstStatus(true);
    setProductZero(false);
    setProductOne(false);
    setProductTwo(false);
  };

  return (
    <div className="women-component" style={{ width: 320, height: 480 }}>
      {firstStatus && (
        <>
          <img src={frame_2} alt="frame_2" />
          <div className="w-prod1" onClick={() => handleWomenCta(0)}></div>
          <div className="w-prod2" onClick={() => handleWomenCta(1)}></div>
          <div className="w-prod3" onClick={() => handleWomenCta(2)}></div>
        </>
      )}
      {productZero && (
        <div className="vega-cta">
          <img src={frame_2_1} alt="frame_2_1" />
          <div className="vega-back" onClick={handleBack}></div>
          <a
            href="https://www.vega.co.in/pro-touch-1800-2000-hair-dryer.html"
            target="_blank"
            rel="noreferrer"
            className="women-cta-btn"
          >
            BUY NOW
          </a>
        </div>
      )}
      {productOne && (
        <div className="vega-cta">
          <img src={frame_2_2} alt="frame_2_2" />
          <div className="vega-back" onClick={handleBack}></div>
          <a
            href="https://www.vega.co.in/ultra-shine-hair-straightener-vhsh-25.html"
            target="_blank"
            rel="noreferrer"
            className="women-cta-btn"
          >
            BUY NOW
          </a>
        </div>
      )}
      {productTwo && (
        <div className="vega-cta">
          <img src={frame_2_3} alt="frame_2_3" />
          <div className="vega-back" onClick={handleBack}></div>
          <a
            href="https://www.vega.co.in/facial-cleanser.html"
            target="_blank"
            rel="noreferrer"
            className="women-cta-btn"
          >
            BUY NOW
          </a>
        </div>
      )}
    </div>
  );
};

const Vega = () => {
  const [frameOne, setFrameOne] = useState(true);
  const [isMen, setIsMen] = useState(false);
  const [isWomen, setIsWomen] = useState(false);

  const chooseGender = (gender) => {
    setFrameOne(false);
    if (gender === "men") {
      setIsMen(true);
    } else if (gender === "women") {
      setIsWomen(true);
    }
  };

  return (
    <div className="_320x480frame vega" style={{ overflow: "hidden" }}>
      {frameOne && (
        <div className="frame-1">
          <img src={frame_1} alt="frame_1" />
          <div className="men" onClick={() => chooseGender("men")}></div>
          <div className="women" onClick={() => chooseGender("women")}></div>
        </div>
      )}

      {isMen && <Men />}
      {isWomen && <Women />}
    </div>
  );
};

export default Vega;

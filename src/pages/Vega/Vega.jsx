import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./vega.scss";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
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

const Men = (props) => {
  const { history } = props
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
    }
  };

  const handleBack = () => {
    setCarouselStatus(true);
    setProductZero(false);
    setProductOne(false);
    setProductTwo(false);
  };

  const handleClickBuy = (path) => {
    history.push(path);
  }

  return (
    <div className="men-component" style={{ width: 320, height: 480 }}>
      {carouselStatus && (
        <Carousel
          swipeable={true}
          showArrows={true}
          infiniteLoop={true}
          centerMode={true}
          axis={"horizontal"}
          showThumbs={false}
          showIndicators={false}
          emulateTouch={true}
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
          <button
            className="men-cta-btn"
            onClick={() => handleClickBuy("https://www.vega.co.in/x2-beard-trimmer.html")}
          >
            BUY NOW
          </button>
        </div>
      )}
      {productOne && (
        <div className="vega-cta">
          <img src={slider_2_2} alt="slider_1_2" />
          <div className="vega-back" onClick={handleBack}></div>
          <button
            className="men-cta-btn"
            onClick={() => handleClickBuy("https://www.vega.co.in/t3-beard-trimmer.html")}
          >
            BUY NOW
          </button>
        </div>
      )}
      {productTwo && (
        <div className="vega-cta">
          <img src={slider_3_2} alt="slider_1_2" />
          <div className="vega-back" onClick={handleBack}></div>
          <button
            className="men-cta-btn"
            onClick={() => handleClickBuy("https://www.vega.co.in/t1-beard-trimmer.html")}
          >
            BUY NOW
          </button>
        </div>
      )}
    </div>
  );
};

const Women = (props) => {
  const { history } = props
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
          <Link to="https://www.vega.co.in/x2-beard-trimmer.html">
            <button className="women-cta-btn">BUY NOW</button>
          </Link>
        </div>
      )}
      {productOne && (
        <div className="vega-cta">
          <img src={frame_2_2} alt="frame_2_2" />
          <div className="vega-back" onClick={handleBack}></div>
          <Link to="https://www.vega.co.in/t3-beard-trimmer.html">
            <button className="women-cta-btn">BUY NOW</button>
          </Link>
        </div>
      )}
      {productTwo && (
        <div className="vega-cta">
          <img src={frame_2_3} alt="frame_2_3" />
          <div className="vega-back" onClick={handleBack}></div>
          <Link to="https://www.vega.co.in/t1-beard-trimmer.html">
            <button className="women-cta-btn">BUY NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
};

const Vega = () => {
  const history = useHistory();
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
          <div className="men">
            <button className="gender" onClick={() => chooseGender("men")}>
              Men
            </button>
          </div>
          <div className="women">
            <button className="gender" onClick={() => chooseGender("women")}>
              Women
            </button>
          </div>
        </div>
      )}

      {isMen && <Men history={history} />}
      {isWomen && <Women history={history}/>}
    </div>
  );
};

export default Vega;

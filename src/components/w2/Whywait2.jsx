import React, { useState } from "react";
import Swipe from "react-easy-swipe";
import two from "../../assets/img/whywait/2.jpeg";
import three from "../../assets/img/whywait/3.jpeg";
import four from "../../assets/img/whywait/4.jpeg";
import five from "../../assets/img/whywait/5.jpeg";
import { Carousel } from "react-responsive-carousel";
import "./carous.scss";

const items = [
  {
    img: two,
    name: "Item 3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "https://www.w2whywait.com/product/w2-orange-face-spa/",
  },
  {
    img: three,
    name: "Item 3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "https://www.w2whywait.com/product/w2-strawberry-body-wash/",
  },
  {
    img: four,
    name: "Item 3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "https://www.w2whywait.com/product/w2-apple-conditioner/",
  },
  {
    img: five,
    name: "Item 3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "https://www.w2whywait.com/product/w2-ivory-peach-moisturizer/",
  },
];

const Whywait2 = () => {
  const [showDesc, setShowDesc] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSwipeUp = (e) => {
    setShowDesc(true);
    console.log("swiped");
  };

  const closeDesc = () => {
    setShowDesc(false);
  };

  const handleSlideChange = (index, item) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="w2-bg"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(45deg, #1e1e1e, #363636)",
        padding: "1rem 0",
        height: "100vh",
      }}
    >
      <div
        style={{
          borderRadius: 10,
          aspectRatio: "16 / 9",
          position: "relative",
          width: 360,
        }}
      >
        <div className="myprogress">
          {items.map((item, i) => {
            return (
              <div key={i} className="prog-child">
                {i < currentIndex && (
                  <div className="child-fill" style={{ width: "100%" }} />
                )}
                {i === currentIndex && (
                  <div className="child-fill active"></div>
                )}
              </div>
            );
          })}
        </div>
        <Carousel
          centerMode={true}
          centerSlidePercentage={100}
          interval={5000}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          onChange={handleSlideChange}
        >
          {items.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.img} alt="one" />
                {showDesc && (
                  <div className="legend">
                    <div className="close-desc" onClick={closeDesc}></div>
                    <div className="desc-text">
                      <span>{item.desc}</span>
                      <a href={item.cta} target="_blank" rel="noreferrer">
                        <span>BUY NOW</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </Carousel>
        {!showDesc && (
          <Swipe
            className="swipe"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "30%",
              width: "100%",
              background: "transparent",
              zIndex: 10,
            }}
            onSwipeRight={(e) => onSwipeUp(e)}
          ></Swipe>
        )}
      </div>
    </div>
  );
};

export default Whywait2;

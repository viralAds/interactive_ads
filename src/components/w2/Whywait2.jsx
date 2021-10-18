import React, { useState } from "react";
import Swipe from "react-easy-swipe";
import two from "../../assets/img/whywait/2.jpeg";
import three from "../../assets/img/whywait/3.jpeg";
import four from "../../assets/img/whywait/4.jpeg";
import five from "../../assets/img/whywait/5.jpeg";
import { Carousel } from "react-responsive-carousel";
import "./carous.scss";
import { BsFillCaretDownFill } from "react-icons/bs";

const items = [
  {
    img: two,
    name: "Item 3",
    desc: "W2 Orange Face Spa With Tricholoma Matsutake, a rare and valuable species of mushroom.",
    cta: "https://www.w2whywait.com/product/w2-orange-face-spa/",
  },
  {
    img: three,
    name: "Item 3",
    desc: "The body needs care and nourishment in the same way as your face and this body spa combined.",
    cta: "https://www.w2whywait.com/product/w2-strawberry-body-wash/",
  },
  {
    img: four,
    name: "Item 3",
    desc: "A natural conditioner, apple gives hair a natural shine. It smoothens and controls split ends, restores PH of hair and removes build up on your hair shaft. ",
    cta: "https://www.w2whywait.com/product/w2-apple-conditioner/",
  },
  {
    img: five,
    name: "Item 3",
    desc: "W2 Ivory Peach Moisturizer a natural source of Vitamins A, C, K, Mg,Beta Carotene, Peach removes dark spots and dark circles naturally.",
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
                      <BsFillCaretDownFill
                        style={{ marginBottom: 10, width: "100%" }}
                        onClick={closeDesc}
                      />
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
              zIndex: 999,
            }}
            onSwipeRight={(e) => onSwipeUp(e)}
          ></Swipe>
        )}
      </div>
    </div>
  );
};

export default Whywait2;

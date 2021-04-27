import React, { useState } from 'react'
import Swipe from 'react-easy-swipe';
import './OnSwipe.scss';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';

import welcome from '../../assets/img/jnto/welcome.jpg';
import frame3 from '../../assets/img/jnto/frame3.jpg';
import frame4 from '../../assets/img/jnto/frame4.jpg';
import frame5 from '../../assets/img/jnto/frame5.jpg';
import frame6 from '../../assets/img/jnto/frame6.jpg';
import frame7 from '../../assets/img/jnto/frame7.jpg';
import frame8 from '../../assets/img/jnto/frame8.jpg';
import last from '../../assets/img/jnto/last.jpg';

import firstFrame from '../../assets/img/jnto/first-frame-bg.jpg';
import plane from '../../assets/img/jnto/plane.png';
import TouchAppRoundedIcon from '@material-ui/icons/TouchAppRounded';


const items = [
  { img: welcome },
  { img: frame3 },
  { img: frame4 },
  { img: frame5 },
  { img: frame6 },
  { img: frame7 },
  { img: frame8 }
];

const OnSwipe = () => {

      const [instruction, setInstruction] = useState("SWIPE RIGHT TO EXPLORE")
      const [isIconActive, setisIconActive] = useState(true)
      const [isFirstScreenActive, setisFirstScreenActive] = useState(true)
      const [isSecondScreenActive, setisSecondScreenActive] = useState(false)
      const [isThirdScreenActive, setisThirdScreenActive] = useState(false)

      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
    
      const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.img}
          >
            <img src={item.img} alt={"frames"} />
          </CarouselItem>
        );
      });

      const onSwipeRight = (event) => {
        console.log(event)
        document.getElementsByClassName("plane")[0].className += " fromIndia";

        setInstruction("TAP TO EXPLORE")
        setisIconActive(false)
      }

      const activateSlider = () => {
        setisFirstScreenActive(false)
        setisSecondScreenActive(true)
      }

      const activateCTA = () => {
        setisSecondScreenActive(false)
        setisThirdScreenActive(true)
      }

    return (
        <div className="jnto-component">
            <div className="ad-wrapper">
              { isFirstScreenActive &&
                <Swipe onSwipeRight={(e) => onSwipeRight(e)}>
                  <img src={firstFrame} alt="map" />
                  <img className="plane" src={plane} alt="png" />
                  <div className="jnto-instruc">
                    {isIconActive && <TouchAppRoundedIcon className="swipe"/>}
                    { (instruction === "SWIPE RIGHT TO EXPLORE") ? <span>{instruction}</span> 
                      : <span onClick={() => activateSlider()}>{instruction}</span> }
                  </div>
                </Swipe>
              }
              { isSecondScreenActive &&
                <div className="slider-wrapper">
                  <Carousel
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                      >
                      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                      {slides}
                      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                  </Carousel> 
                  <ReplyRoundedIcon className="back-icon" 
                      onClick={activateCTA} />
                </div>
                }
                {
                  isThirdScreenActive && 
                  <div className="jnto-cta">
                    <img src={last} alt="cta" />
                    <a className="jnto-cta-btn" href="https://www.japan.travel/en/in/goodnessofjapan/?utm_source=google&utm_medium=cpc&utm_campaign=goodness_of_japan_sumo&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgOWQN0rUcRLtAhZqqgFSnNVdIxR3WPlWChG6GdJ6gjfLwl5_Jf8_ikaAp3yEALw_wcB"
                        target="_blank" rel="noreferrer">Click to PLAY</a>
                  </div>
                  
                }
            </div>
        </div>
    )
}

export default OnSwipe

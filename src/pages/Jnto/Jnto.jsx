import React, { useState, useEffect } from 'react'
import Swipe from 'react-easy-swipe';
import './OnSwipe.scss';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import good from '../../assets/img/jnto/goodness.png';
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
  { status: false,
    img: welcome },
  { status: false,
    img: frame3 },
  { status: false,
    img: frame4 },
  { status: false,
    img: frame5 },
  { status: false,
    img: frame6 },
  { status: false,
    img: frame7 },
  { status: false,
    img: frame8 },
  { status: true,
    img: last }
];

const OnSwipe = () => {
      if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
      }
      const [isGoodnessActive, setisGoodnessActive] = useState(false)
      const [isIconActive, setisIconActive] = useState(true)
      const [isFirstScreenActive, setisFirstScreenActive] = useState(true)
      const [isSecondScreenActive, setisSecondScreenActive] = useState(false) 
      const [intervalStatus, setIntervalStatus] = useState(2500)
      const [activeIndex, setActiveIndex] = useState(0); 
      const [animating, setAnimating] = useState(false);

      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.img}
          >
            <img src={item.img} alt={"frames"} />
            { item.status && <a className="jnto-cta-btn" href="https://www.japan.travel/en/in/goodnessofjapan/?utm_source=google&utm_medium=cpc&utm_campaign=goodness_of_japan_sumo&gclid=Cj0KCQjwgtWDBhDZARIsADEKwgOWQN0rUcRLtAhZqqgFSnNVdIxR3WPlWChG6GdJ6gjfLwl5_Jf8_ikaAp3yEALw_wcB"
                        target="_blank" rel="noreferrer">Click to PLAY</a>}
          </CarouselItem>
        );
      });

      useEffect(() => {
          if(document.getElementsByClassName("carousel-item").length === 8) {
            if(document.getElementsByClassName("carousel-item")[5].className === "carousel-item active")
            {
              setIntervalStatus(false)
              return(0);
            }
          } 
      }, [isSecondScreenActive, slides])

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
  
      const onSwipeRight = (event) => {
        document.getElementsByClassName("plane")[0].className += " fromIndia";

        setisIconActive(false)
        setisGoodnessActive(true)

        setTimeout(function(){ 
          setisFirstScreenActive(false)
          setisSecondScreenActive(true) }
          , 3000);
        }

    return (
        <div className="jnto-component">
            <div className="ad-wrapper">
              { isFirstScreenActive &&
                <Swipe onSwipeRight={(e) => onSwipeRight(e)}>
                  { isGoodnessActive && <img className="good" src={good} alt="good"
                    data-aos={"slide-left"} data-aos-delay="100"
                    data-aos-mirror='false' data-aos-duration="2000"
                    data-aos-easing="ease-out" />}
                  <img src={firstFrame} alt="map" />
                  <img className="plane" src={plane} alt="png" />
                  <div className="jnto-instruc">
                    {isIconActive && <TouchAppRoundedIcon className="swipe"/>}
                    <span>SWIPE RIGHT TO EXPLORE</span>
                  </div>
                </Swipe>
              }
              { isSecondScreenActive &&
                <div className="slider-wrapper">
                  <Carousel
                      interval={intervalStatus}
                      ride={"carousel"}
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                      >
                      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                      {slides}
                      
                      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                  </Carousel>  
                </div>
                }
            </div>
        </div>
    )
}

export default OnSwipe

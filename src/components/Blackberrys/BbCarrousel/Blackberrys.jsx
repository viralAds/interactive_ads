import { useState, useEffect } from 'react';
import '../Blackberrys.scss';
import ReactPlayer from 'react-player';
import Popup from '../../Common/Popup/Popup';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Row, Col, Button
  } from 'reactstrap';
import first from '../../../assets/videos/bb1.mp4';
import second from '../../../assets/videos/bb2.mp4';
import third from '../../../assets/videos/bb3.mp4';

const items = [
    {
      id: 1,
      video: first,
      title: "Blackberrys Navy Slim Filt Blazer",
      cost: "INR 5,598"
    },
    {
      id: 2,
      video: second,
      title: "Blackberrys Brown Blazer",
      cost: "INR 4,999"
    },
    {
      id: 3,
      video: third,
      title: "Blackberrys Black Blazer",
      cost: "INR 5,499"
    }
];

function Blackberrys() {
    
    const [startAd, setStartAd] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [isDescActive, setIsDescActive] = useState(false);

    const slides = items.map((item) => {
        return (
          <CarouselItem
            id={item.id}
            className="carousel-video-wrapper"
            tag="div"
            key={item.id}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            > 
            <Row className="desc">
                <Col lg='12' sm='12'>
                    <span>{item.title} </span><br/>
                    <span>{item.cost} </span>
                </Col>
            </Row>

            <ReactPlayer 
                className="ad-video"  
                width="100%"
                height="100%"             
                loop={true}
                playing={true} 
                url={item.video} />
          </CarouselItem>
        );
      });

    useEffect(() => {
        
        setTimeout(function(){ 
            const ele = document.getElementsByClassName("carousel-item")
            if(ele.length === 3) {
                Object.keys(ele).map((key) => {
                    if ((ele[key].className === "carousel-video-wrapper carousel-item active") &&
                        (ele[key].childNodes[1].childNodes[0] !== undefined)) {
                        ele[key].childNodes[1].childNodes[0].muted = false
                    }
                    else if((ele[key].childNodes[1].childNodes[0] !== undefined) && 
                            (ele[key].className === "carousel-video-wrapper carousel-item")) { 
                        ele[key].childNodes[1].childNodes[0].muted = true 
                    }
                    return 0
                })
            } 
        }, 1000);
    }, [slides,quantity])

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

    const showOptions = () => {
        setIsDescActive(!isDescActive);
    }

    const start = () => {
        setStartAd(false)
    }

    return (
        <div id="comp-div">
            { (startAd) ? 
            <div className="tte">
                <Button onClick={() => start()}>Tap To Engage</Button>
            </div> 
                :
            <div className="carousel-parent-wrapper">
                <div className="pop-up">
                    <Row className="btn-row">
                        <Button onClick={() => showOptions()}>BUY NOW</Button>  
                    </Row>
                    { isDescActive && 
                        <Popup 
                            quantity={quantity}
                            setQuantity={setQuantity} 
                            showQuantity={true} 
                        />
                    }
                </div>
                <Carousel
                    interval={false}
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    >
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>}
        </div>
    )
}

export default Blackberrys

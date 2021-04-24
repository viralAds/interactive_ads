import React, { useState } from 'react';
import '../Blackberrys.scss';
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Row, Col, Button
  } from 'reactstrap';
import first from '../../../assets/videos/first.mp4';
import second from '../../../assets/videos/second.mp4';
import third from '../../../assets/videos/third.mp4';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';

const items = [
    {
      id: 1,
      video: first,
      title: "Blackberrys Navy Slim Filt Blazzer",
      cost: "INR 5,598"
      
    },
    {
      id: 2,
      video: second,
      title: "Blackberrys Brown Blazzer",
      cost: "INR 4,999"
    },
    {
      id: 3,
      video: third,
      title: "Blackberrys Black Blazzer",
      cost: "INR 5,499"
    }
  ];

function Blackberrys() {
    if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
    }
    
    const [quantity, setQuantity] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [isDescActive, setIsDescActive] = useState(false);
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

    // const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    // }

    const slides = items.map((item) => {
        return (
          <CarouselItem
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

    const onChangeValue = (event) => {
        console.log(event.target.value);
    }

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        setQuantity(quantity - 1)
    }

    const showOptions = () => {
        setIsDescActive(!isDescActive);
    }

    const handleChange = (event) => {
        setQuantity(parseInt(event.target.value))
    }

    return (
        <div>
            <div className="carousel-parent-wrapper">
                <div className="pop-up">
                    <Row className="btn-row">
                        <Button onClick={() => showOptions()}>BUY NOW</Button>  
                    </Row>
                    { isDescActive &&
                    <div className="product-desc"
                            data-aos={"slide-up"} 
                            data-aos-delay="100"
                            data-aos-mirror='false'
                            data-aos-duration="1000"
                            data-aos-easing="ease-out">
                        <div className="size" onChange={(e) => onChangeValue(e)}>
                            <span style={{ float: "left"}}>Select Size  :</span>
                            <input type="radio" value="S" name="size" /><label>S</label> 
                            <input type="radio" value="M" name="size" /><label>M</label>
                            <input type="radio" value="L" name="size" /><label>L</label>
                            <input type="radio" value="XL" name="size" /><label>XL</label>
                            <input type="radio" value="XXL" name="size" /><label>XXL</label>
                        </div>
                        <div className="quantity">
                            <span style={{ float: "left"}}>Quantity  :</span>
                            <RemoveCircleRoundedIcon 
                                onClick={() => decrement()}
                                id="decrement" />
                            <input type="number" value={quantity} onChange={(e) => handleChange(e)} />
                            <AddCircleSharpIcon 
                                id="increment"
                                onClick={() => increment()}/>
                        </div>
                        <div>
                            <Button style={{ marginTop: "1.5rem"}}>ADD TO CART</Button>  
                        </div>
                    </div>
                    }
                </div>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    >
                    
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
        </div>
    )
}

export default Blackberrys

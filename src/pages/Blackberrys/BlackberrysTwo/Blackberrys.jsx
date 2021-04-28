import React, { useState, useEffect } from 'react';
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
import first from '../../../assets/videos/bb1.mp4';
import second from '../../../assets/videos/bb2.mp4';
import third from '../../../assets/videos/bb3.mp4';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import logo from '../../../assets/icons/bb-logo-dark.png';

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

        if(quantity <= 0) {
            alert("Invalid value")
            setQuantity(1)
            return 0;
        }
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

    const selectSize = (size) => {
        const ele = document.getElementsByClassName('size')
        Object.keys(ele).map((key) => {
                if(ele[key].innerHTML === size.toString()) {
                    document.getElementsByClassName('size')[key].className = "size active" 
                }
                else {
                    document.getElementsByClassName('size')[key].className = "size"
                }
                return 0;
          });
    }

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
        <div id="comp-div">
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
                        <div className="bb-logo-wrapper">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="specs">
                            <div className="cost">INR 2,595</div>
                            <div className="colors">COLORS: Navy</div>
                        </div>
                        <div className="sizes">
                            <div className="size" onClick={() => selectSize(36)}>36</div>
                            <div className="size" onClick={() => selectSize(39)}>39</div>
                            <div className="size" onClick={() => selectSize(40)}>40</div>
                            <div className="size" onClick={() => selectSize(42)}>42</div>
                            <div className="size" onClick={() => selectSize(44)}>44</div>
                            <div className="size" onClick={() => selectSize(46)}>46</div>
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
                        <div className="addToCart">
                            <Button style={{ marginTop: "1.5rem"}}>ADD TO CART</Button>  
                        </div>
                    </div>
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
            </div>
        </div>
    )
}

export default Blackberrys

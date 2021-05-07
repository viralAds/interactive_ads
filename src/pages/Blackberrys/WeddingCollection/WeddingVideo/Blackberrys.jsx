import { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import ReactPlayer from 'react-player';
import { Button } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import '../../../Common/ad.scss';
import '../../Blackberrys.scss';
import '../../../Common/paperLayout.scss';

import video from '../../../../assets/videos/bb2.mp4';
import bblogo from '../../../../assets/icons/bb-logo-dark.png';
import cta from '../../../../assets/img/coa.jpg';
import firstsc from '../../../../assets/img/firstscreen.jpg';

function Blackberrys() {
    if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
      }
     
    const [isDescActive, setIsDescActive] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoActive, setVideoActive ] = useState(false);
    const [toggleCtaAnimationBox, setToggleCtaAnimationBox] = useState(false);
     
    const startVideo = () => {
        setVideoActive(true)
        setIsPlaying(true);
        document.getElementsByClassName('first-sc')[0].style.setProperty("display", "none")
    }
    
    const callToAction = () => {
        setToggleCtaAnimationBox(true);
    }

    const handleEnterViewport = () => {
        setIsPlaying(true);
    }

    const handleExitViewport = () => {
        setIsPlaying(false);
    }

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

    const showPopup = () => {
        setIsDescActive(!isDescActive)
    }

    return (
        <div>
        <div className="m_ads_unit_large" style={{ position: "relative"}}>
            <div className="sponsored-by">Sponsored by EKALEIDO</div>
                <div className="app-inside">
                <Waypoint 
                    onEnter={handleEnterViewport}
                    onLeave={handleExitViewport}
                    >
                    <div className="vis-area">
                    <div className="pop-up">
                    { isDescActive &&        
                        <div className="product-des"
                                data-aos={"slide-up"} 
                                data-aos-delay="100"
                                data-aos-mirror='false'
                                data-aos-duration="1000"
                                data-aos-easing="ease-out">
                            <div className="specs">
                                <div className="prod-name">SLIM FIT BLAZERS</div>
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
                            <div className="addToCart">
                                <Button style={{ marginTop: "1.5rem",marginRight: ".5rem" }}
                                >BUY NOW</Button> 
                                <Button style={{ marginTop: "1.5rem",marginLeft: ".5rem" }}
                                onClick={showPopup}>CANCEL</Button> 
                                 
                            </div>
                        </div>
                        }  
                        </div>
                        { toggleCtaAnimationBox && <div className="first poster" data-aos={"zoom-in"} 
                            data-aos-delay="100"
                            data-aos-mirror='false'
                            data-aos-duration="900"
                            data-aos-easing="ease-out"
                            >
                            <a id="cta-btn" href="https://blackberrys.com/" target="_blank" rel="noreferrer">EXPLORE</a>
                                <img className="bb-images" src={cta} alt="bb3" />
                            </div> 
                        }   
                        {!toggleCtaAnimationBox && <img id="mid-bblogo" src={bblogo} alt="bbLogo" />}
                        <div className="first-sc">
                            <p className="text">WEDDING COLLECTION</p>
                            <Button onClick={startVideo}>TAP TO EXPLORE</Button>
                            <img src={firstsc} alt="first-screen" />                                
                        </div>
                        {videoActive && 
                        <ReactPlayer
                            className="video-screen" 
                            url={video}
                            loop={false}
                            muted={false}
                            width="100%"
                            height="100%"
                            playing={ isPlaying } 
                            controls={ false }
                            onEnded={() => callToAction()}>
                        </ReactPlayer>}
                        {(!isDescActive) &&  
                        <div className="btn-bottom">
                            <Button onClick={showPopup}>ADD TO CART</Button>
                        </div>}
                    </div>
                    </Waypoint>
                </div>
            </div>
        </div>
    )
}

export default Blackberrys

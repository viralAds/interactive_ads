import { useState } from 'react'
import ReactPlayer from 'react-player';
import { Container, Button } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import '../Common/ad.scss';
import './Blackberrys.scss';

import video from '../../assets/videos/blackberrys.mp4';
// import video1 from '../../assets/videos/blackberrys1.mp4';

import swim from '../../assets/icons/swim.png';
import evening from '../../assets/icons/evening.png';
import wedding from '../../assets/icons/wedding.png';
import back from '../../assets/icons/bb-back.png';
import bblogo from '../../assets/icons/bb-logo.png';
import bb1 from '../../assets/img/bb1.jpg';
import bb2 from '../../assets/img/bb2.jpg';
import bb3 from '../../assets/img/bb3.jpg';
import cta from '../../assets/img/coa.jpg';
import firstsc from '../../assets/img/firstscreen.jpg';

function Blackberrys() {
    if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
      }
    
      const [isPlaying, setIsPlaying] = useState(false);
      const [toggleFirstAnimationBox, setToggleFirstAnimationBox] = useState(false);
      const [toggleSecondAnimationBox, setToggleSecondAnimationBox] = useState(false);
      const [toggleThirdAnimationBox, setToggleThirdAnimationBox] = useState(false);
      const [toggleCtaAnimationBox, setToggleCtaAnimationBox] = useState(false);
    
      const closeAnimation = () => {
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setToggleCtaAnimationBox(false);
        setIsPlaying(true);
      }
      
      const firstAnim = () => {
        setToggleFirstAnimationBox(true);
        setToggleSecondAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setToggleCtaAnimationBox(false);
        setIsPlaying(false);
      }
    
      const secondAnim = () => {
        setToggleSecondAnimationBox(true);
        setToggleFirstAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setToggleCtaAnimationBox(false);
        setIsPlaying(false);
      }
    
      const thirdAnim = () => {
        setToggleThirdAnimationBox(true);
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setToggleCtaAnimationBox(false);
        setIsPlaying(false);
    }
      
    const startVideo = () => {
        setIsPlaying(true);
        document.getElementsByClassName('first-sc')[0].style.setProperty("display", "none")
    }

    const callToAction = () => {
        setToggleThirdAnimationBox(false);
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setToggleCtaAnimationBox(true);
    }

    return (
        <div> 
        <div className="m_ads_unit_large" style={{ position: "relative"}}>
                <div className="sponsored-by">Sponsored by EKALEIDO</div>
                <Container className="app-in">
                        <div className="vis-area">
                            { toggleFirstAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <div className="ctrl-option">
                                        <img onClick={closeAnimation} src={back} alt="back-btn" />
                                    </div>
                                    <img className="bb-images" src={bb1} alt="bb1" />
                                </div> 
                            }

                            { toggleSecondAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <div className="ctrl-option">
                                        <img onClick={closeAnimation} src={back} alt="back-btn" />
                                    </div>
                                    <img className="bb-images" src={bb2} alt="bb2" />
                                </div> 
                            }

                            { toggleThirdAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <div className="ctrl-option">
                                        <img onClick={closeAnimation} src={back} alt="back-btn" />
                                    </div>
                                    <img className="bb-images" src={bb3} alt="bb3" />
                                </div> 
                            }

                            { toggleCtaAnimationBox && <div className="first poster" data-aos={"zoom-in"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <div className="ctrl-option">
                                        <img onClick={closeAnimation} src={back} alt="back-btn" />
                                    </div>
                                    <a id="cta-btn" href="https://blackberrys.com/" target="_blank">EXPLORE</a>
                                    <img className="bb-images" src={cta} alt="bb3" />
                                </div> 
                            }
                            <img id="bblogo" src={bblogo} alt="bbLogo" />
                            <div className="first-sc">
                                <p className="text">WEDDING COLLECTION</p>
                                <Button onClick={startVideo}>TAP TO EXPLORE</Button>
                                <img src={firstsc} alt="first-screen" />                                
                            </div>
                            <ReactPlayer
                                className="video-screen" 
                                url={video}
                                loop={false}
                                muted={true}
                                width="100%"
                                height="100%"
                                playing={ isPlaying } 
                                controls={ false }
                                onEnded={() => callToAction()}>
                            </ReactPlayer>
                            <div className="icons">
                                <img onClick={firstAnim} src={swim} alt="safety"/>
                                <img onClick={secondAnim} src={evening} alt="seat"/>
                                <img onClick={thirdAnim} src={wedding} alt="transmission"/>
                            </div>
                        </div>
                </Container>
            </div>
        </div>
    )
}

export default Blackberrys

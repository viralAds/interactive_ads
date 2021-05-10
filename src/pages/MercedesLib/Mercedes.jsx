import { useState } from 'react'
import ReactPlayer from 'react-player';
import { Button } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReplyIcon from '@material-ui/icons/Reply';
  
import '../Common/ad.scss';

import video from '../../assets/videos/merc.mp4';
import safety from '../../assets/icons/safety.png';
import seat from '../../assets/icons/seat.png';
import transmission from '../../assets/icons/transmission.png';
import mercLogo from '../../assets/img/mercedes_logos.png';
import transmission_img from '../../assets/img/transmission.jpeg';
import interior from '../../assets/img/interior.jpg';
import maybach from '../../assets/img/maybach.jpeg';

function Mercedes() {
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
    
      const closeAnimation = () => {
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setIsPlaying(true);
      }
      
      const firstAnim = () => {
        
        setToggleFirstAnimationBox(true);
        setToggleSecondAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setIsPlaying(false);
      }
    
      const secondAnim = () => {
        setToggleSecondAnimationBox(true);
        setToggleFirstAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setIsPlaying(false);
      }
    
      const thirdAnim = () => {
        setToggleThirdAnimationBox(true);
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setIsPlaying(false);
    }
      
    const startVideo = () => {
        setIsPlaying(true);
        document.getElementsByClassName('first-screen')[0].style.setProperty("display", "none")
    }

    return (
            <div>
                <div className="app-in">
                        <div className="visible-area">
                            { toggleFirstAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <div className="poster-heading" data-aos={"slide-up"} 
                                        data-aos-delay="300"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <img src={mercLogo} alt="logo"/>
                                            <div className="ctrl-option">
                                                <ReplyIcon onClick={closeAnimation}/>
                                            </div>
                                    </div>
                                    <img src={interior} alt="transmission" />
                                    <div className="left-aligned-content" data-aos={"slide-up"} 
                                    data-aos-delay="800"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out">
                                        <p className="short-text">A special chapter is automotive history.</p>
                                        <p className="long-text">The perfection of  stylish mobility: that is the standard of the Mercedes-Maybach S-Class. Elegence, luxury and state-of-the-art comfort merge into a unique travel experience.</p>
                                    </div>
                                    <div className="right-aligned-content" data-aos={"slide-up"} 
                                    data-aos-delay="800"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out">
                                        <p className="short-text">Comfort highlights: </p>
                                        <p className="long-text">AIRMATIC <br/>MAGIC BODY CONTROL <br/> ENERGISING COMFORT CONTROL <br/> REAR SEAT ENTERTAINTMENT SYSTEM <br/> SMARTPHONE INTEGRATION</p>
                                    </div>
                                </div> 
                            }

                            { toggleSecondAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <div className="poster-heading" data-aos={"slide-up"} 
                                        data-aos-delay="300"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <img src={mercLogo} alt="logo"/>
                                            <div className="ctrl-option">
                                                <ReplyIcon onClick={closeAnimation}/>
                                            </div>
                                    </div>
                                    <img src={maybach} alt="maybach" />
                                    <div className="left-aligned-content" data-aos={"slide-up"} 
                                    data-aos-delay="800"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out">
                                        <p className="short-text">Cutting-Edge Assistance System.</p>
                                        <p className="long-text">Comfort and safety on every route: Mercedes Benz Intelligence Drive combines sophisticated assistance system and always anticipates what's ahead. </p>
                                    </div>
                                    <div className="right-aligned-content" data-aos={"slide-up"} 
                                    data-aos-delay="800"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out">
                                        <p className="short-text">Safety highlights: </p>
                                        <p className="long-text">MULTIBEAM LED <br/> PRE-SAFE <br/> NIGHT-VIEW ASSISTANCE PLUS <br/>MAGIC VISION CONTROL <br/> DRIVING ASSISTANCE PACKAGE <br/> ACTIVE BRAKING AND BLIND SPOT </p>
                                    </div>
                                </div> 
                            }

                            { toggleThirdAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <div className="poster-heading" data-aos={"slide-up"} 
                                        data-aos-delay="300"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <img src={mercLogo} alt="logo"/>
                                            <div className="ctrl-option">
                                                <ReplyIcon onClick={closeAnimation}/>
                                            </div>
                                    </div>
                                    <img src={transmission_img} alt="transmission" />
                                    <div className="left-aligned-content" data-aos={"slide-up"} 
                                    data-aos-delay="800"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out">
                                        <p className="short-text">Transmission - prefers a smooth leadership style.</p>
                                        <p className="long-text">Even when your chauffeur is driving, the transmission of the Mercedes-Maybach S-Class directly serves you: by showing restraint. Smooth, virtually imperceptible gear changes allow you to be productive or relax in peace and quite.</p>
                                    </div>
                                    <div className="right-aligned-content" data-aos={"slide-up"} 
                                    data-aos-delay="800"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out">
                                        <p className="short-text">7G-TRONIC PLUS <br/>(Mercedes-Matbach S 650)</p>
                                        <p className="long-text">The 7-speed automatic transmission combines a high level of comfort with driving pleasure and efficiency.</p>
                                    </div>
                                </div> 
                            }
                            <div className="first-screen">
                                <Button onClick={startVideo}>Tap to Start</Button>
                            </div>
                            <ReactPlayer
                                className="video-screen" 
                                url={video}
                                loop={true}
                                muted={false}
                                width="100%"
                                height="100%"
                                playing={ isPlaying } 
                                controls={ false }>
                            </ReactPlayer>
                            <div className="icons">
                                <img onClick={firstAnim} src={safety} alt="safety"/>
                                <img onClick={secondAnim} src={seat} alt="seat"/>
                                <img onClick={thirdAnim} src={transmission} alt="transmission"/>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default Mercedes

import React, { useState } from 'react'
import AOS from 'aos';
import { Button } from 'reactstrap';
import 'aos/dist/aos.css';
import '../../../Common/ad.scss';
import '../../Blackberrys.scss';
import firstsc from '../../../../assets/img/summer/first.jpg';
import sndscn from '../../../../assets/img/summer/second.jpg';
import sc1 from '../../../../assets/img/summer/1.jpg';
import sc2 from '../../../../assets/img/summer/2.jpg';
import sc3 from '../../../../assets/img/summer/3.jpg';
import ReplyIcon from '@material-ui/icons/Reply';
import Hotspot from '../../../Common/Hotspot';
import './Looks.scss';

const Tap = () => {
    if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
      }
    
    const [isDescActive, setIsDescActive] = useState(false);
    const [firstPage, setFirstPage] = useState(true)
    const [isMasterActive, setIsMasterActive] = useState(false);
    const [isAfternoonActive, setIsAfternoonActive] = useState(false)
    const [isPoolActive, setIsPoolActive] = useState(false)
    const [isEveActive, setIsEveActive] = useState(false)

    const startInteraction = () => {
        setIsMasterActive(true);
        setFirstPage(false);
        setIsAfternoonActive(false);
        setIsEveActive(false);
        setIsPoolActive(false);
    }

    const afternoonLook = () => {
        setIsMasterActive(false);
        setIsAfternoonActive(true);
    }

    const poolLook = () => {
        setIsMasterActive(false);
        setIsPoolActive(true);
    }

    const eveningLook = () => {
        setIsMasterActive(false);
        setIsEveActive(true);
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
                <div className="app-inside">
                    <div className="summer-vis-area">
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
                        { isMasterActive && 
                            <div className="master-screen" data-aos={"zoom-in-right"} 
                                data-aos-delay="100"
                                data-aos-mirror='false'
                                data-aos-duration="900"                                data-aos-easing="ease-out">
                                <img src={sndscn} alt="master" />
                                <span className="noon"
                                    onClick={afternoonLook}>AFTERNOON WEDDING
                                </span>  
                                <span className="pool"
                                    onClick={poolLook}>POOL WEDDING</span> 
                                <span className="eve"
                                    onClick={eveningLook}>EVENING WEDDING</span> 
                                <span className="msg">PICK AN OCCASION</span>
                            </div>
                        }
                        { isAfternoonActive &&
                            <div className="looks-screen" data-aos={"flip-up"} 
                                data-aos-delay="100"
                                data-aos-mirror='false'
                                data-aos-duration="900"                                data-aos-easing="ease-out">
                                <img src={sc1} alt="noon" />
                                <Hotspot id={"one"} toppos={"240px"}  
                                    leftpos={"160px"} 
                                    details={{
                                        title: "3 PIECE SUIT",
                                        desc: "RS-12999/-"
                                    }} /> 
                                <Hotspot id={"two"} toppos={"155px"}  
                                    leftpos={"200px"} 
                                    details={{
                                        title: "2 PIECE SUIT",
                                        desc: "RS-10999/-"
                                    }} /> 
                                {!isDescActive && <>
                                <Button className="atc"
                                onClick={showPopup}>ADD TO CART</Button>
                                <ReplyIcon className="back-icon"
                                onClick={startInteraction} />
                                </>
                                }
                            </div>
                        }
                        {   isPoolActive &&
                            <div className="looks-screen" data-aos={"flip-up"} 
                                data-aos-delay="100"
                                data-aos-mirror='false'
                                data-aos-duration="900"                                data-aos-easing="ease-out">
                                <img src={sc2} alt="noon" />
                                <Hotspot id={"one"} 
                                    toppos={"200px"}  
                                    leftpos={"160px"} 
                                    details={{
                                        title: "BLAZER",
                                        desc: "RS-12999/-"
                                    }} /> 
                                <Hotspot id={"two"} 
                                    toppos={"130px"}  
                                    leftpos={"240px"} 
                                    details={{
                                        title: "SHIRT",
                                        desc: "RS-5099/-"
                                    }} /> 
                                <Hotspot id={"three"} 
                                    toppos={"280px"}  
                                    leftpos={"210px"} 
                                    details={{
                                        title: "TROUSER",
                                        desc: "RS-1099/-"
                                    }} /> 
                                {!isDescActive && <>
                                <Button className="atc"
                                onClick={showPopup}>ADD TO CART</Button>
                                <ReplyIcon className="back-icon" 
                                onClick={startInteraction}/>
                                </>}
                            </div>
                        }
                        {   isEveActive &&
                            <div className="looks-screen" data-aos={"flip-up"} 
                                data-aos-delay="100"
                                data-aos-mirror='false'
                                data-aos-duration="900"                                data-aos-easing="ease-out">
                                <img src={sc3} alt="noon" />
                                <Hotspot id={"one"} 
                                    toppos={"200px"}  
                                    leftpos={"160px"} 
                                    details={{
                                        title: "BLAZER",
                                        desc: "RS-12999/-"
                                    }} /> 
                                <Hotspot id={"two"} 
                                    toppos={"130px"}  
                                    leftpos={"240px"} 
                                    details={{
                                        title: "SHIRT",
                                        desc: "RS-5099/-"
                                    }} /> 
                                
                                {!isDescActive && <>
                                    <ReplyIcon className="back-icon"
                                    onClick={startInteraction} /> 
                                    <Button className="atc"
                                    onClick={showPopup}>ADD TO CART</Button>
                                </>}
                            </div>
                        }
                        { firstPage && 
                            <div className="summer-first-sc">
                                <Button onClick={startInteraction}>TAP TO EXPLORE</Button>
                                <img src={firstsc} alt="first-screen" />                                
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tap

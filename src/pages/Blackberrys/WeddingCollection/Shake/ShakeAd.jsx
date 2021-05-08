import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import { Button } from 'reactstrap';
import 'aos/dist/aos.css';
import './Shake.scss';
import '../../../Common/ad.scss';
import '../../Blackberrys.scss';
import '../Looks/Looks.scss';
import Shake from 'shake.js';
import closed from '../../../../assets/img/summer/close_frame.jpg';
import opened from '../../../../assets/img/summer/open_frame.jpg';
import ScreenRotationIcon from '@material-ui/icons/ScreenRotation';
import sc1 from '../../../../assets/img/summer/1.jpg';
import sc2 from '../../../../assets/img/summer/2.jpg';
import sc3 from '../../../../assets/img/summer/3.jpg';
import Hotspot from '../../../Common/Hotspot';
import ReplyIcon from '@material-ui/icons/Reply';

const ShakeAd = () => {
    if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
      }
    const [isDescActive, setIsDescActive] = useState(false);
    const [isShaked, setIsShaked ] = useState(true)
    const [isOptionsActive, setIsOptionsActive] = useState(false);
    const [isAfternoonActive, setIsAfternoonActive] = useState(false)
    const [isPoolActive, setIsPoolActive] = useState(false)
    const [isEveActive, setIsEveActive] = useState(false)

    useEffect(() => {
        let myShakeEvent = new Shake({
            threshold: 2, // optional shake strength threshold
            timeout: 1000 // optional, determines the frequency of event generation
        });
        myShakeEvent.start();
        window.addEventListener('shake', shakeEventDidOccur, false);
    }, [])
    
    const shakeEventDidOccur = () => {
        setIsShaked(false)
        setIsOptionsActive(true)
        // myShakeEvent.stop();
    }

    const afternoonLook = () => {
        setIsOptionsActive(false);
        setIsAfternoonActive(true);
    }

    const poolLook = () => {
        setIsOptionsActive(false);
        setIsPoolActive(true);
    }

    const eveningLook = () => {
        setIsOptionsActive(false);
        setIsEveActive(true)
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

    const showOptions = () => {
        setIsOptionsActive(true)
        setIsAfternoonActive(false);
        setIsEveActive(false)
        setIsPoolActive(false);
    }
    const showPopup = () => {
        setIsDescActive(!isDescActive)
    }

    return (
        <div className="shake-app-wrapper">
            <div id="shake-id">
                {isShaked && 
                    <div>
                        <img className="wc-options" src={closed} alt="closed" />
                        <ScreenRotationIcon className="shake-icon"/>
                    </div>}
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
                            onClick={showOptions} />
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
                            onClick={showOptions}/>
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
                                onClick={showOptions} /> 
                                <Button className="atc"
                                onClick={showPopup}>ADD TO CART</Button>
                            </>}
                        </div>
                    }
                {isOptionsActive && 
                    <div>
                        <img className="wc-options" src={opened} alt="opened" />
                        <div id="pool" onClick={poolLook}></div>
                        <div id="noon" onClick={afternoonLook}></div>
                        <div id="evening" onClick={eveningLook}></div>
                    </div>
                }
            </div>
        </div>        
    )
}

export default ShakeAd

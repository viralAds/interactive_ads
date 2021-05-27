import React, { useRef, useState } from 'react'
import '../Oppo.scss'
import ReactPlayer from 'react-player';
import oppoVideo from '../../../assets/videos/oppo_2.mp4';
import Hotspot from '../../Common/Hotspot/Hotspot';

const Oppo = () => {

    const player = useRef(null)
    const [ playing, setPlaying ] = useState(true)
    const [ isFirstActive, setIsFirstActive ] = useState(false)
    const [ isCameraButtons, setIsCameraButtons ] = useState(false)
    const [ isMobileSpec , setIsMobileSpec ] = useState(false)
    const [ isContinue ,setIsContinue] = useState(false)

    const handleProgress = state => {

        if(Math.floor(player.current.getCurrentTime()) === 6 ) {
            setPlaying(false)
        }
        if(Math.floor(player.current.getCurrentTime()) === 11 ) {
            setPlaying(false)
        }
        if(player.current.getCurrentTime() > 1  && player.current.getCurrentTime() < 4 ) {
            setIsFirstActive(true)
        }
        else if(player.current.getCurrentTime() >  3) { setIsFirstActive(false) }

        if(player.current.getCurrentTime() > 5 && player.current.getCurrentTime() < 8 )  {
            setIsCameraButtons(true)
        }
        else if(player.current.getCurrentTime() >  7) { setIsCameraButtons(false) }

        if(player.current.getCurrentTime() > 9 && player.current.getCurrentTime() < 11) {
            setIsMobileSpec(true)
        }
        else if(player.current.getCurrentTime() >  11) { setIsMobileSpec(false) }
    }

    const getData = (e) => {
    }

    const onStartVideo = () => {
    }

    const handlePause = () => {   
        setIsContinue(true)
    }

    const handleEnd = () => {
        player.current.seekTo(1, "second")
        setPlaying(false)
        setIsContinue(false)
    }
    return (
        <div>
            <div className="video-wrapper">
                <p className="hotspot-message">Click hotspots to engage</p>
                {isContinue && <div className="conti-btn" onClick={()=> {
                    player.current.seekTo(player.current.getCurrentTime()+ 1 , "seconds")
                    setPlaying(true)
                    setIsContinue(false)
                }
                }>CONTINUE</div>}
                <ReactPlayer
                    ref={player}
                    className="video-screen" 
                    url={oppoVideo}
                    progressInterval={100}
                    loop={false}
                    muted={false}
                    width="100%"
                    height="100%"
                    playing={ playing } 
                    controls={ false }
                    onStart={() => onStartVideo("Started")}
                    onDuration={(e) => getData(e)}
                    onProgress={state => handleProgress(state)}
                    onPause = {handlePause}
                    onEnded= {handleEnd}
                >
                </ReactPlayer>
                {  
                    isFirstActive &&  
                    <Hotspot 
                        id={"one"} 
                        toppos={15 + "%"}   
                        leftpos={35 + "%"} 
                        details={{
                            title: "OPPO Find X3 Pro (CPH2173)",
                            desc: `1 Billion Colour Dual Primary Cameras`
                        }}
                    /> 
                }
                {isCameraButtons &&
                    <Hotspot 
                        id={"microlense"} 
                        toppos={30 + "%"}   
                        leftpos={57  + "%"} 
                        details={{
                            title: "Microlens",
                            desc: `◉ 3MP microlens camera
                            ◉ f/3.0 aperture
                            ◉ 60x magnification5
                            ◉ FHD Video Recording`
                        }}
                    /> 
                }  
                {isCameraButtons &&
                    <Hotspot 
                        id={"ultrawide"} 
                        toppos={60 + "%"}   
                        leftpos={70  + "%"} 
                        details={{
                            title: "Ultra-Wide",
                            desc: `◉ 50MP ultra-wide-angle camera
                            ◉ Sony IMX 766 sensor
                            ◉ 1/1.56” sensor size
                            ◉ f/2.2 aperture
                            ◉ Native 110.3° field of view
                            ◉ All-Pixel Omni-Directional PDAF`
                        }}
                    /> 
                }  
                {isCameraButtons &&
                    <Hotspot 
                        id={"wide"} 
                        toppos={60 + "%"}   
                        leftpos={40  + "%"} 
                        details={{
                            title: "Wide",
                            desc: `◉ 50MP wide-angle camera
                            ◉ Sony IMX 766 sensor
                            ◉ 1/1.56” sensor size
                            ◉ f/1.8 aperture
                            ◉ OIS
                            ◉ All-Pixel omni-directional PDAF`
                        }}
                    /> 
                } 
                {isCameraButtons &&
                    <Hotspot 
                        id={"telephoto"} 
                        toppos={30 + "%"}   
                        leftpos={35  + "%"} 
                        details={{
                            title: "Telephoto",
                            desc: `◉ 13MP telephoto camera
                            ◉ f/2.4 aperture
                            ◉ 5x hybrid optical zoom
                            ◉ 20x digital zoom`
                        }}
                    /> 
                } 
                {isMobileSpec &&
                    <Hotspot 
                        id={"charger"} 
                        toppos={40 + "%"}   
                        leftpos={20  + "%"} 
                        details={{
                            title: "Battery",
                            desc: `◉ 2200 mAh/17.02 Wh (min) 2250 mAh/17.41 Wh (typ)
                            ◉ Fast Charge
                            ◉ SuperVOOC 2.0/SuperVOOC/VOOC 3.0/PD (9 V/2 A)/QC (9 V/2 A)/PPS (30W)
                            `
                        }}
                    /> 
                } 
                {isMobileSpec &&
                    <Hotspot 
                        id={"Memory"} 
                        toppos={40 + "%"}   
                        leftpos={50  + "%"} 
                        details={{
                            title: "Memory",
                            desc: `◉ 12GB RAM + 256GB ROM
                            ◉ RAM Type: LPDDR5 @ 3200 MHz 4 x 16 bits
                            ◉ ROM Type: UFS3.1 @ 2Lanes HS-Gear4
                            ◉ External Memory: Not supported`
                        }}
                    /> 
                } 
            </div>
             
        </div>
    )
}

export default Oppo

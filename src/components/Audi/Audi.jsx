import './Audi.scss';
import { Pannellum, PannellumVideo } from "pannellum-react";
import videojs from 'video.js'

import audiVideo from '../../assets/videos/audi.mp4'
import poster from '../../assets/img/audi-etron.jpg'
const Audi = () => {
    const handleClick = () => {
        console.log("click")
    }
    videojs.options.autoplay = false
    videojs.options.playbackRates = [0.5, 0.7, 1, 1.2, 1.5, 2] 
    
    return (
        <div id="app">
             <h1>Pannellum React Component</h1> 
            <PannellumVideo
                video={audiVideo}
                width="60%"
                height="500px"
                haov={180}
                controls={true}
                vaov={90}
                vOffset={1}
                pitch={10}
                yaw={180}
                hfov={110}
                maxHfov={170}
                minHfov={30}
                autoLoad
                author="Audi"
                title="Audi"
                orientationOnByDefault={false}
                compass
                draggable
                keyboardZoom
                mouseZoom
                preview="Audi"
                previewAuthor="Audi"
                previewTitle="Audi"
                showControls
                showFullscreenCtrl
                showZoomCtrl
                >
                <Pannellum.Hotspot
                    type="custom"
                    pitch={31}
                    yaw={150}
                    handleClick={() => handleClick()}
                    name="hs1"
                />
                <Pannellum.Hotspot
                    type="info"
                    pitch={31}
                    yaw={-57}
                    text="Info"
                    URL="https://ekaleido.co"
                />
            </PannellumVideo>
            
            <h1>Video.Js</h1>
            <div data-vjs-player className="video-wrapper">
                <video
                    id="audiVideo"
                    className="video-js"
                    muted={false}
                    controls={true}
                    preload="auto"
                    // width="800px"
                    // height="500px"
                    aspectratio="16:9"
                    data-setup="{}" 
                    poster={poster}
                    >
                    <source src={audiVideo} type="video/mp4" />
                    <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that</p>
                </video>

            </div>

        </div>
        
    )
}

export default Audi

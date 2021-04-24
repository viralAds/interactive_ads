import React, { Component } from 'react'
import './Play.scss';
import ReactPlayer from 'react-player';
import khan from '../../assets/videos/Khan.webm';

class play extends Component {
    render() {
        return (
            <div>
                <div className="video-container" style={{ background: "#cacaca" }}>
                    <div className="video-wrapper">
                        <div className="hotspot">
                            <div className="outer-circle"></div>
                            <div className="inner-circle"></div>
                            <svg height="210" width="500">
                                <path d="M150 0 L75 200" stroke="green" stroke-width="3"
                                fill="none"/>
                            </svg>
                            <ReactPlayer
                                className="video-screen" 
                                url={khan}
                                light={true}
                                loop={false}
                                muted={false}
                                width="100%"
                                height="100%"
                                playing={ true } 
                                controls={ true }>
                            </ReactPlayer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default play;
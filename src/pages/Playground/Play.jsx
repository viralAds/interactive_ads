import React, { Component } from 'react'
import { Player, BigPlayButton } from 'video-react';
import './Play.scss';
import poster from '../../assets/img/audi.jpg';

class play extends Component {
    render() {
        return (
            <div>
                <div className="video-container">
                    <div className="video-wrapper">
                        <div className="hotspot">
                            <div className="outer-circle"></div>
                            <div className="inner-circle"></div>
                            <svg height="210" width="500">
                                <path d="M150 0 L75 200" stroke="green" stroke-width="3"
                                fill="none"/>
                            </svg>
                        </div>
                        <Player
                        playsInline
                        controls={true}
                        poster={poster}
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default play;
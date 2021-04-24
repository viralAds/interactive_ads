import React, { Component } from 'react'
import './Play.scss';
import ReactPlayer from 'react-player';
import khan from '../../assets/videos/Khan.webm';
import poster from '../../assets/img/khan.jpg';

export default class play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstActive: false
        }
    }

    ref = player => {
        this.player = player
      }

    timeline = (time) => {
        console.log(time)
    }

    getData = (data) => {
        console.log("data", data)
    }

    handleProgress = state => {
        console.log(Math.floor(this.player.getCurrentTime()))
        if (Math.floor(this.player.getCurrentTime()) === 0) {
           this.setState({ isFirstActive: true })
        } 
        if (Math.floor(this.player.getCurrentTime()) === 3) {
            this.setState({ isFirstActive: false })
        } 
    }

    render() {
        return (
            <div>
                <div className="video-container" style={{ background: "#cacaca" }}>
                    <div className="video-wrapper">
                        {this.state.isFirstActive &&
                            <div className="hotspot">
                                <div className="outer-circle"></div>
                                <div className="inner-circle"></div>
                            </div>
                        }
                        <ReactPlayer
                            ref={this.ref}
                            className="video-screen" 
                            url={khan}
                            light={poster}
                            loop={false}
                            muted={false}
                            width="100%"
                            height="100%"
                            playing={ true } 
                            controls={ true }
                            onReady={() => this.timeline("Ready")}
                            onStart={() => this.timeline("Started")}
                            onPlay={() => this.timeline("Play")}
                            onDuration={(e) => this.getData(e)}
                            onPause={() => this.timeline("Pause")}
                            onBuffer={() => this.timeline("Buffer")}	
                            onBufferEnd={() => this.timeline("BufferEnd")}
                            onSeek={e => console.log('onSeek', e)}
                            onProgress={state => this.handleProgress(state)}
                            >
                        </ReactPlayer>    
                    </div>
                </div>
            </div>
        )
    }
}

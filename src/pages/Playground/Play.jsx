import React, { Component } from 'react'
import './Play.scss';
import ReactPlayer from 'react-player';
import khan from '../../assets/videos/panasonic.webm';
// import poster from '../../assets/img/khan.jpg';
import { Tooltip } from 'reactstrap';


export default class play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstActive: false,
            tooltipOpen: false
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
        if (Math.floor(this.player.getCurrentTime()) === 8) {
            this.setState({ isFirstActive: false })
        }
        // console.log("trackes", this.player.props.config.file.tracks) 
        // console.log("attributes",this.player.getAttributes) 
        // console.log("active players",this.player.getActivePlayers) 
        // console.log("config",this.player.getConfig) 
    }

    toggle = () => {
        this.setState({tooltipOpen: !this.state.tooltipOpen})
    }

    onStartVideo = () => {
        this.player.props.config.file.tracks = [ {
            "1.0": "hi"
        }]
    }

    render() {
        return (
            <div>
                <div className="video-container" style={{ background: "#cacaca" }}>
                    <div className="video-wrapper">
                        {this.state.isFirstActive &&
                            <div className="hotspot"
                                style={{ "--topPos": "50%", "--leftPos": "40%"}}>
                                <div className="outer-circle"></div>
                                <div id="incircle" className="inner-circle" ></div>
                                <Tooltip
                                    placement={"top"}
                                    isOpen={this.state.tooltipOpen}
                                    target={"incircle"}
                                    toggle={() => this.toggle()}
                                >Tooltip Content!
                                </Tooltip>
                            </div>
                        }
                        <div className="hotspot"
                                style={{ "--topPos": "40%", "--leftPos": "50%"}}>
                                <div className="outer-circle"></div>
                                <div id="incircle" className="inner-circle" ></div>
                            </div>
                        <ReactPlayer
                            ref={this.ref}
                            className="video-screen" 
                            url={khan}
                            // light={poster}
                            loop={false}
                            muted={false}
                            width="100%"
                            height="100%"
                            playing={ true } 
                            controls={ true }
                            onReady={() => this.timeline("Ready")}
                            onStart={() => this.onStartVideo("Started")}
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

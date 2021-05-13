import React, { Component } from 'react'
import './Play.scss';
import ReactPlayer from 'react-player';
import asus from '../../assets/videos/asus.webm';
import Hotspot from '../Common/Hotspot/Hotspot';

export default class play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstActive: false,
            toppos: 179,
            leftpos: 270,
            id: "one",
            details: {
                title: "Example",
                desc: "This is example"
            },
            playing: true
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
        
        if (Math.floor(this.player.getCurrentTime()) === 5) {
           this.setState({ 
               playing: false,
               isFirstActive: true,
               toppos: 350,
                leftpos: 150,
                id: "Insect",
                details: {
                    title: "First",
                    desc: "This is example"
                }
            })
        } 
        
        if (Math.floor(this.player.getCurrentTime()) === 8) {
            this.setState({ 
                isFirstActive: true,
                toppos: 179,
                leftpos: 270,
                id: "one",
                details: {
                    title: "Tode",
                    desc: "This is example"
                }
            })
        }

        if (Math.floor(this.player.getCurrentTime()) === 14) {
            this.setState({ 
                isFirstActive: true,
                toppos: 299,
                leftpos: 270,
                id: "one",
                details: {
                    title: "Bird",
                    desc: "This is example"
                }
            })
        }

        if (Math.floor(this.player.getCurrentTime()) === 19) {
            this.setState({ 
                isFirstActive: true,
                toppos: 229,
                leftpos: 270,
                id: "one",
                details: {
                    title: "Bee",
                    desc: "This is example"
                }
            })
        }

        if (Math.floor(this.player.getCurrentTime()) === 31) {
            this.setState({ 
                isFirstActive: true,
                toppos: 189,
                leftpos: 270,
                id: "one",
                details: {
                    title: "Rose",
                    desc: "This is example"
                }
            })
        }

        if (Math.floor(this.player.getCurrentTime()) === 34 ) {
            this.setState({ 
                isFirstActive: true,
                toppos: 179,
                leftpos: 270,
                id: "one",
                details: {
                    title: "Wine",
                    desc: "This is example"
                }
            })
        }

        if (Math.floor(this.player.getCurrentTime()) === 7 ||
            Math.floor(this.player.getCurrentTime()) === 13 ||
            Math.floor(this.player.getCurrentTime()) === 17 ||
            Math.floor(this.player.getCurrentTime()) === 22 ||
            Math.floor(this.player.getCurrentTime()) === 33 ||
            Math.floor(this.player.getCurrentTime()) === 38 ) {
            this.setState({ 
                isFirstActive: false
            })
        }
    }

    onStartVideo = () => {
        console.log("started")
    }

    resumeVideo = () => {
        this.setState({
            playing: true
        })
    }
    render() {
        return (
            <div>
                <div className="video-container" style={{ background: "#cacaca" }}>
                    <div className="video-wrapper">
                        <div className="instruction">
                            <span>Click the hotspot to engage</span>
                        </div>
                        {  this.state.isFirstActive &&  
                            <Hotspot id={this.state.id} toppos={this.state.toppos + "px"}  
                            leftpos={this.state.leftpos + "px"} 
                            details={this.state.details}/> 
                        }
                        <ReactPlayer
                            ref={this.ref}
                            className="video-screen" 
                            url={asus}
                            progressInterval={100}
                            loop={false}
                            muted={false}
                            width="100%"
                            height="100%"
                            playing={ this.state.playing } 
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

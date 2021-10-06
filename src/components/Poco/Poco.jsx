import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Poco.scss";
import PocoVideo from "../../assets/videos/poco.mp4";
import looks from "../../assets/img/poco/looks.jpg";
import battery from "../../assets/img/poco/battery.jpg";
import display from "../../assets/img/poco/display.jpg";
import ram from "../../assets/img/poco/ram.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Poco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      isInteraction: true,
    };
    if (typeof window !== `undefined`) {
      AOS.init({
        once: false,
        mirror: false,
      });
    }
  }

  ref = (player) => {
    this.player = player;
  };

  handleStart = () => {
    this.setState({
      isInteraction: true,
      playing: false,
    });
  };

  handleProgress = (state) => {
    if (
      Math.floor(this.player.getCurrentTime()) === 9 ||
      Math.floor(this.player.getCurrentTime()) === 24 ||
      Math.floor(this.player.getCurrentTime()) === 38
    ) {
      this.setState({
        playing: false,
      });
    }
  };

  handlePause = () => {
    this.setState({
      isInteraction: true,
    });
  };
  branch = (endPoint) => {
    if (endPoint === "looks") {
      this.player.seekTo(1, "seconds");
      this.setState({
        playing: true,
        isInteraction: false,
      });
    } else if (endPoint === "battery") {
      this.player.seekTo(10, "seconds");
      this.setState({
        playing: true,
        isInteraction: false,
      });
    } else if (endPoint === "ram") {
      this.player.seekTo(25, "seconds");
      this.setState({
        playing: true,
        isInteraction: false,
      });
    } else if (endPoint === "display") {
      this.player.seekTo(39.5, "seconds");
      this.setState({
        playing: true,
        isInteraction: false,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="poco-video-container">
          <div className="video-wrapper">
            {this.state.isInteraction && (
              <div className="interactions">
                <div
                  className="options"
                  data-aos={"zoom-out-right"}
                  data-aos-delay="100"
                  data-aos-mirror="false"
                  data-aos-duration="400"
                  data-aos-easing="ease-in-out"
                  onClick={() => this.branch("looks")}
                >
                  <img src={looks} alt="looks" />
                  <p>Explore LOOKS</p>
                </div>
                <div
                  className="options"
                  data-aos={"zoom-out-left"}
                  data-aos-delay="100"
                  data-aos-mirror="false"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  onClick={() => this.branch("battery")}
                >
                  <img src={battery} alt="battery" />
                  <p>BATTERY POWER</p>
                </div>
                <div
                  className="options"
                  data-aos={"zoom-out-right"}
                  data-aos-delay="100"
                  data-aos-mirror="false"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  onClick={() => this.branch("ram")}
                >
                  <img src={ram} alt="ram" />
                  <p>RAM CONFIGURATION</p>
                </div>
                <div
                  className="options"
                  data-aos={"zoom-out-left"}
                  data-aos-delay="100"
                  data-aos-mirror="false"
                  data-aos-duration="1300"
                  data-aos-easing="ease-in-out"
                  onClick={() => this.branch("display")}
                >
                  <img src={display} alt="display" />
                  <p>SCREEN DISPLAY</p>
                </div>
              </div>
            )}
            <ReactPlayer
              ref={this.ref}
              className="video-screen"
              url={PocoVideo}
              progressInterval={100}
              loop={false}
              muted={false}
              width="100%"
              height="100%"
              playing={this.state.playing}
              controls={false}
              onStart={() => this.handleStart()}
              onProgress={(state) => this.handleProgress(state)}
              onPause={() => this.handlePause()}
            />
          </div>
        </div>
      </div>
    );
  }
}

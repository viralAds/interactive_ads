import { useState, useEffect, useRef } from "react";
import ResizeObserver from "rc-resize-observer";
import ucook from "../../assets/videos/ucook.mp4";
import TransparentLayer from "./TransparentLayer";

const { innerWidth, innerHeight } = window;

const UcookVideoPlayer = () => {
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [padding, setPadding] = useState({});
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [dimension, setDimension] = useState({
    width: innerWidth,
    height: innerHeight,
  });
  const [actualDim, setActualDim] = useState(dimension);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", onUpdateWindowDimension);
    videoPlayer.current.addEventListener("timeupdate", onVideoTimeUpdate);
  }, []);

  const onVideoTimeUpdate = () => {
    setCurrentTime(videoPlayer.current.currentTime);
  };

  const onUpdateWindowDimension = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({
      width: innerWidth,
      height: innerHeight,
    });
  };

  const onResize = () => {
    const { videoHeight, videoWidth } = videoPlayer.current;
    const { clientHeight, clientWidth } = videoPlayer.current;

    let ratio = Math.min(clientHeight / videoHeight, clientWidth / videoWidth);
    let actualDim = {
      actualHeight: ratio * videoHeight,
      actualWidth: ratio * videoWidth,
    };
    let padding = {
      paddingHeight: (clientHeight - actualDim.actualHeight) / 2,
      paddingWidth: (clientWidth - actualDim.actualWidth) / 2,
    };
    setActualDim(actualDim);
    setPadding(padding);
  };

  const toggleVideoPlay = () => {
    if (videoPlayer.current) {
      if (videoPlayer.current.paused) {
        videoPlayer.current.play();
        setDuration(videoPlayer.current.duration);
        setPlaying(true);
      } else {
        videoPlayer.current.pause();
        setPlaying(false);
      }
    }
  };
  return (
    <div>
      <div
        className="video-wrapper"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ResizeObserver onResize={onResize}>
          <video
            ref={videoPlayer}
            width="100%"
            height="100%"
            controls={false}
            onLoadedMetadata={onResize}
            muted={muted}
            loop={false}
            autoPlay={false}
          >
            <source src={ucook} type="video/mp4" />
          </video>
        </ResizeObserver>
        {actualDim.actualHeight && actualDim.actualWidth ? (
          <TransparentLayer
            actualDim={actualDim}
            padding={padding}
            playing={playing}
            muted={muted}
            setMuted={setMuted}
            toggleVideoPlay={toggleVideoPlay}
            duration={duration}
            currentTime={currentTime}
          />
        ) : null}
      </div>
    </div>
  );
};

export default UcookVideoPlayer;

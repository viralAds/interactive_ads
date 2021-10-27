import React, { useState, useEffect } from "react";
import "./ucook.scss";
import Offers from "./Offers";
import Products from "./Products";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Controls = (props) => {
  const { playing, muted, setMuted, toggleVideoPlay, duration, currentTime } =
    props;
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentTime && duration) {
      setProgress((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  console.log(duration);
  return (
    <div className="controls">
      <div className={classes.root}>
        <LinearProgress
          variant="determinate"
          value={progress ? Math.floor(progress) : 0}
        />
      </div>
      <div className="buttons">
        <div
          className="ctrl-icon"
          onClick={(e) => {
            e.stopPropagation();
            toggleVideoPlay();
          }}
        >
          {playing ? (
            <PauseCircleFilledIcon
              className="playing"
              style={{ color: "#fff" }}
            />
          ) : (
            <PlayArrowIcon className="playing" style={{ color: "#fff" }} />
          )}
        </div>
        <div className="ctrl-icon">
          {muted ? (
            <VolumeOffIcon
              className="muted"
              style={{ color: "#fff" }}
              onClick={() => setMuted(false)}
            />
          ) : (
            <VolumeUpIcon
              className="muted"
              style={{ color: "#fff" }}
              onClick={() => setMuted(true)}
            />
          )}
        </div>
        <div className="ctrl-icon">
          <span className="time">
            {(currentTime * 0.01).toFixed(2)}/{(duration * 0.01).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

const TransparentLayer = (props) => {
  const {
    setMuted,
    muted,
    playing,
    actualDim,
    padding,
    toggleVideoPlay,
    duration,
    currentTime,
  } = props;
  const [productActive, setProductActive] = useState(true);

  return (
    <div
      className="transparent-layer"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: actualDim.actualHeight,
        width: actualDim.actualWidth,
        marginTop: padding.paddingHeight ? padding.paddingHeight : 0,
        marginLeft: padding.paddingWidth ? padding.paddingWidth : 0,
      }}
    >
      <Controls
        playing={playing}
        muted={muted}
        setMuted={setMuted}
        toggleVideoPlay={toggleVideoPlay}
        duration={duration}
        currentTime={currentTime}
      />
      <Offers />
      {productActive ? (
        <Products setProductActive={setProductActive} />
      ) : (
        <div className="open-prod" onClick={() => setProductActive(true)}>
          <DoubleArrowIcon className="show-prod" style={{ color: "#ffffff" }} />
        </div>
      )}
    </div>
  );
};

export default TransparentLayer;

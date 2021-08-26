import React, { useState } from "react";
import "./ucook.scss";
import Offers from "./Offers";
import Products from "./Products";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

const TransparentLayer = (props) => {
  const { playing, actualDim, padding, toggleVideoPlay } = props;
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
      <div
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={(e) => {
          e.stopPropagation();
          toggleVideoPlay();
        }}
      >
        {playing ? <PauseCircleFilledIcon color='primary' /> : <PlayArrowIcon color='primary' />}
      </div>
      <Offers />
      {productActive ? (
        <Products setProductActive={setProductActive} />
      ) : (
        <div className="open-prod" onClick={() => setProductActive(true)}>
          <DoubleArrowIcon style={{ color: "#ffffff" }} />
        </div>
      )}
    </div>
  );
};

export default TransparentLayer;

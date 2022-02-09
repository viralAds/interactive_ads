import React from "react";

const Bodyshop = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/bodyshop-main/index.html"
        title="bodyshop Advertisement"
      ></iframe>
    </div>
  );
};

export const Bodyshop2 = () => {
  return (
    <div className="_360x640frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/bodyshop2-master/index.html"
        title="bodyshop Advertisement"
      ></iframe>
    </div>
  );
};

export const Bodyshop3 = () => {
  return (
    <div className="_360x640frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/bodyshop3-master/index.html"
        title="bodyshop Advertisement"
      ></iframe>
    </div>
  );
};

export default Bodyshop;

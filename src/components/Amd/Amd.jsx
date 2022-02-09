import { useState, useEffect } from "react";
import amd1 from "../../assets/img/amd/1.jpg";
import amd2 from "../../assets/img/amd/2.jpg";
import amd3 from "../../assets/img/amd/3.jpg";
import amd4 from "../../assets/img/amd/4.jpg";
import amd5 from "../../assets/img/amd/5.jpg";
import "./Amd.scss";

const items = [
  {
    id: "1",
    img: amd1,
  },
  {
    id: "2",
    img: amd2,
  },
  {
    id: "3",
    img: amd3,
  },
  {
    id: "4",
    img: amd4,
  },
  {
    id: "5",
    img: amd5,
  },
];

const Amd = () => {
  const [imgState, setImgState] = useState(1);
  const [isMessageActive, setIsMessageActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsMessageActive(false);
    }, 2000);

    document
      .getElementsByClassName("indicator")
      [imgState - 1].setAttribute(
        "class",
        `indicator-${imgState} indicator  active`
      );
  }, [imgState]);

  // set active,  if imgState = indicator-number
  const onPrev = () => {
    if (imgState === 1) {
      return;
    }
    setImgState(imgState - 1);
  };

  const onNext = () => {
    if (imgState === 5) {
      return;
    }
    setImgState(imgState + 1);
  };

  return (
    <div>
      <div className="amd-wrapper">
        <div className="indicators">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className={`indicator-${item.id} indicator`}
              ></div>
            );
          })}
        </div>
        <img src={items[imgState - 1].img} alt="amd-img" />
        <div className="prev" onClick={() => onPrev()}></div>
        <div className="next" onClick={() => onNext()}></div>
        {isMessageActive && (
          <div className="message">
            <span>Tap to Skip</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Amd;

export const AmdAmazon = () => {
  return (
    <div className="_300x250frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_amazon-main/index.html"
        title="AWS Advertisement"
      ></iframe>
    </div>
  );
};

export const AmdDesire = () => {
  return (
    <div className="_300x250frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_desire-main/index.html"
        title="AWS Advertisement"
      ></iframe>
    </div>
  );
};

export const AmdFlipkart = () => {
  return (
    <div className="_300x250frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_flipkart-main/index.html"
        title="AWS Advertisement"
      ></iframe>
    </div>
  );
};

export const AmdQ2 = () => {
  return (
    <div className="_320x480frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_q2_commercials_320x480-main/index.html"
        title="AWS Advertisement"
      ></iframe>
    </div>
  );
};

export const AmdQ2_2 = () => {
  return (
    <div className="_320x480frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_q2_commercials_320x480_2-main/index.html"
        title="AWS Advertisement"
      ></iframe>
    </div>
  );
};

export const AmdMerc = () => {
  return (
    <div className="_320x480frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_merc_q1_2021-main/index.html"
        title="Amd_merc_q2_2021"
      ></iframe>
    </div>
  );
};

export const AmdMerc2 = () => {
  return (
    <div className="_300x250frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_merc_q2_2021-main/index.html"
        title="Amd_merc_q2_2021"
      ></iframe>
    </div>
  );
};

export const AmdInteractive = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_interactive-main/index.html"
        title="amd_interactive"
      ></iframe>
    </div>
  );
};

export const Amd1 = () => {
  return (
    <div className="_320x480frame">
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd1-master/index.html"
        title="amd_1"
      ></iframe>
    </div>
  );
};

export const Amd2 = () => {
  return (
    <div className="_300x250frame">
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd2-master/index.html"
        title="amd_1"
      ></iframe>
    </div>
  );
};

export const AmdPremiumSku = () => {
  return (
    <div className="_320x480frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd_premium_sku-master/index.html"
        title="amd Advertisement"
      ></iframe>
    </div>
  );
};

export const Amd3 = () => {
  return (
    <div className="_320x480frame">
      <iframe
        src="https://interactiveviralads.s3.ap-south-1.amazonaws.com/amd3-master/index.html"
        title="amd Advertisement"
      ></iframe>
    </div>
  );
};

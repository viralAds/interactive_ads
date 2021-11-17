import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import axios from "axios";
import { CgArrowLongUpC } from "react-icons/cg";
import frame1 from "../../assets/img/dabur/pollution-frame-1.jpg";
import frame1mask from "../../assets/img/dabur/lungsmask.png";
import smoke from "../../assets/img/dabur/smoke.png";
import "./dabur.scss";
import daburvideo from "../../assets/img/dabur/dabur.mov";
import frameTwoimg from "../../assets/img/dabur/aqi-bg2.jpg";

const Dabur3 = () => {
  const [pm2_5, setPm2_5] = useState();
  const [pm10, setPm10] = useState();
  const [aqi, setAqi] = useState();
  const [lat, setLat] = useState(28.7041);
  const [lon, setLon] = useState(77.1025);
  const [color, setColor] = useState();
  const [location, setLocation] = useState("delhi");
  const [frameone, setFrameone] = useState(true);
  const [frameTwo, setFrameTwo] = useState(false);
  const [frameThr, setFrameThr] = useState(false);
  const [ctabtn, setCtaBtn] = useState(false);
  const [swipeactive, setSwipeActive] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=22f760a45156cddca51d44606880edfc`,
      responseType: "application/json",
    }).then(function (response) {
      
      if (response.data.list[0].main.aqi === 1) {
        setAqi("GOOD");
        setColor("#63ff00");
      } else if (response.data.list[0].main.aqi === 2) {
        setAqi("FAIR");
        setColor("#d6ff00");
      } else if (response.data.list[0].main.aqi === 3) {
        setAqi("MODERATE");
        setColor("#ffff00");
      } else if (response.data.list[0].main.aqi === 4) {
        setAqi("POOR");
        setColor("#ffc101");
      } else if (response.data.list[0].main.aqi === 5) {
        setAqi("VERY POOR");
        setColor("#ff0000");
      }
      setPm10(response.data.list[0].components.pm10);
      setPm2_5(response.data.list[0].components.pm2_5);
    });
  }, [lat, lon]);

  const onSwipeUp = (e) => {
    setFrameTwo(false);
    setFrameThr(true);
    setTimeout(function () {
      setCtaBtn(true);
    }, 5000);
  };

  const activeFrameTwo = () => {
    setFrameone(false);
    setFrameTwo(true);
    setSwipeActive(true);
  };

  const setLoc = (loc) => {
    setLocation(loc);
    if (loc === "delhi") {
      setLat(28.7041);
      setLon(77.1025);
    } else if (loc === "noida") {
      setLat(28.5355);
      setLon(77.391);
    } else if (loc === "gur") {
      setLat(28.4595);
      setLon(77.0266);
    }
  };

  const styleActiveBtn = {
    background: "#ed3734",
    border: "2px solid #ed3734",
    color: "#fff",
    borderRadius: 50,
    width: "30%",
  };

  const styleInactiveBtn = {
    background: "transparent",
    border: "2px solid #ed3734",
    color: "#000",
    borderRadius: 50,
    width: "30%",
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        height: "640px",
        width: "360px",
        background: "grey",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {frameone && (
        <div
          className="frameone"
          style={{
            width: "100%",
            heightt: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
            src={frame1}
            alt="frame1"
          />
          <img
            className="smoke"
            style={{
              position: "absolute",
              zIndex: 20,
            }}
            src={smoke}
            alt="smoke"
          />
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: 30,
            }}
            src={frame1mask}
            alt="mask"
          />
          <div className="uppertext">
            <span className="u-one">POLLUTING</span>
            <span className="u-two">AIR TODAY IS</span>
          </div>
          <div className="lowertext">
            <span className="u-one">DAMAGING</span>
            <span className="u-two">LUNGS TOMMOROW</span>
          </div>

          <div className="button-one" onClick={activeFrameTwo}>
            TAP TO KNOW AIQ
          </div>
        </div>
      )}

      {frameTwo && (
        <div className="frameTwo">
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
            src={frameTwoimg}
            alt="frame2"
          />
          <div className="locations">
            <button
              style={location === "delhi" ? styleActiveBtn : styleInactiveBtn}
              onClick={() => setLoc("delhi")}
            >
              DELHI
            </button>
            <button
              style={location === "noida" ? styleActiveBtn : styleInactiveBtn}
              onClick={() => setLoc("noida")}
            >
              NOIDA
            </button>
            <button
              style={location === "gur" ? styleActiveBtn : styleInactiveBtn}
              onClick={() => setLoc("gur")}
            >
              GURGAON
            </button>
          </div>

          <div className="aqi">
            <span className="two" style={{ color: color }}>
              {aqi}
            </span>
          </div>
          <div className="pm">
            <div className="pm25">
              <span className="pm25_h">PM 2.5</span>
              <span className="pm25_v">{pm2_5}</span>
            </div>
            <div className="pm10">
              <span className="pm10_h">PM 10</span>
              <span className="pm10_v">{pm10}</span>
            </div>
          </div>
          {swipeactive && (
            <div className="icon-up">
              <CgArrowLongUpC size={30} />
              <span>
                SWIPE UP
                <br />
                TO BOOST IMMUNITY
              </span>
            </div>
          )}
          {swipeactive && (
            <Swipe
              className="swipearea"
              onSwipeUp={(e) => onSwipeUp(e)}
            ></Swipe>
          )}
        </div>
      )}

      {frameThr && (
        <div className="frame-three">
          <video width="100%" height="100%" autoplay="true">
            <source src={daburvideo} type="video/mp4" />
          </video>
          {ctabtn && (
            <div className="button-two">
              <a
                href="https://www.dabur.com/in/en-us/ayurvedic-herbal-products/dabur-chyawanprash"
                target="_blank"
                rel="noreferrer"
              >
                BUY NOW
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dabur3;

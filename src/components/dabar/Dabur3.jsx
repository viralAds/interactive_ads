import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import axios from "axios";
import { CgArrowLongUpC } from "react-icons/cg";
import frame1 from "../../assets/img/dabur/pollution-frame-1.jpg";
import frame1mask from "../../assets/img/dabur/lungsmask.png";
import smoke from "../../assets/img/dabur/smoke.png";
import "./dabur.scss";
import frameTwoimg from "../../assets/img/dabur/frame-2-bg.jpg";
import finalframe from "../../assets/img/dabur/final-frame2.jpg";

const Dabur3 = () => {
  const [pm2_5, setPm2_5] = useState();
  const [pm10, setPm10] = useState();
  const [aqi, setAqi] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [time, setTime] = useState();

  const [frameone, setFrameone] = useState(true);
  const [frameTwo, setFrameTwo] = useState(false);
  const [frameThr, setFrameThr] = useState(false);
  const [swipeactive, setSwipeActive] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    setTime(new Date().getTime());
  }, []);

  const onSwipeUp = (e) => {
    setFrameTwo(false);
    setFrameThr(true);
  };

  const activeFrameTwo = () => {
    axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&start=${time}&end=${time}&appid=22f760a45156cddca51d44606880edfc`,
      responseType: "application/json",
    }).then(function (response) {
      setSwipeActive(true);
      if (response.data.list[0].main.aqi === 1) {
        setAqi("GOOD");
      } else if (response.data.list[0].main.aqi === 2) {
        setAqi("FAIR");
      } else if (response.data.list[0].main.aqi === 3) {
        setAqi("MODERATE");
      } else if (response.data.list[0].main.aqi === 4) {
        setAqi("POOR");
      } else if (response.data.list[0].main.aqi === 5) {
        setAqi("VERY POOR");
      }
      setPm10(response.data.list[0].components.pm10);
      setPm2_5(response.data.list[0].components.pm2_5);
    });
    setFrameone(false);
    setFrameTwo(true);
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

          <div className="aqi">
            <span className="one">AIR QUALITY</span>
            <span className="two">{aqi}</span>
          </div>
          <div className="pm25">
            <span className="one">PM2.5 (μg/m3)</span>
            <span className="two">{pm2_5}</span>
          </div>
          <div className="pm10">
            <span className="one">PM10 (μg/m3)</span>
            <span className="two">{pm10}</span>
          </div>
          {swipeactive && (
            <div className="icon-up" style={{}}>
              <CgArrowLongUpC size={40} />
              <span>SWIPE UP</span>
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
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
            src={finalframe}
            alt="finalframe"
          />
          <div className="button-two">
            <a
              href="https://www.dabur.com/in/en-us/ayurvedic-herbal-products/dabur-chyawanprash"
              target="_blank"
            >
              BUY NOW
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dabur3;

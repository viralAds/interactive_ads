import { useState } from "react";
import { Waypoint } from "react-waypoint";
import ReactPlayer from "react-player";
import { Button } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import "../Common/ad.scss";
import "./Blackberrys.scss";
import "../Common/paperLayout.scss";

import video from "../../assets/videos/bb2.mp4";

import swim from "../../assets/icons/swim.png";
import evening from "../../assets/icons/evening.png";
import noon from "../../assets/icons/noon.png";
import back from "../../assets/icons/bb-back.png";
import bblogo from "../../assets/icons/bb-logo.png";
import bb1 from "../../assets/img/bb1.jpg";
import bb2 from "../../assets/img/bb2.jpg";
import bb3 from "../../assets/img/bb3.jpg";
import cta from "../../assets/img/coa.jpg";
import firstsc from "../../assets/img/firstscreen.jpg";

function Blackberrys() {
  if (typeof window !== `undefined`) {
    AOS.init({
      once: false,
      mirror: false,
    });
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [videoActive, setVideoActive] = useState(false);
  const [toggleFirstAnimationBox, setToggleFirstAnimationBox] = useState(false);
  const [toggleSecondAnimationBox, setToggleSecondAnimationBox] =
    useState(false);
  const [toggleThirdAnimationBox, setToggleThirdAnimationBox] = useState(false);
  const [toggleCtaAnimationBox, setToggleCtaAnimationBox] = useState(false);

  const closeAnimation = () => {
    setToggleFirstAnimationBox(false);
    setToggleSecondAnimationBox(false);
    setToggleThirdAnimationBox(false);
    setToggleCtaAnimationBox(false);
    setIsPlaying(true);
  };

  const firstAnim = () => {
    setToggleFirstAnimationBox(true);
    setToggleSecondAnimationBox(false);
    setToggleThirdAnimationBox(false);
    setToggleCtaAnimationBox(false);
    setIsPlaying(false);
  };

  const secondAnim = () => {
    setToggleSecondAnimationBox(true);
    setToggleFirstAnimationBox(false);
    setToggleThirdAnimationBox(false);
    setToggleCtaAnimationBox(false);
    setIsPlaying(false);
  };

  const thirdAnim = () => {
    setToggleThirdAnimationBox(true);
    setToggleFirstAnimationBox(false);
    setToggleSecondAnimationBox(false);
    setToggleCtaAnimationBox(false);
    setIsPlaying(false);
  };

  const startVideo = () => {
    setVideoActive(true);
    setIsPlaying(true);
    document
      .getElementsByClassName("first-sc")[0]
      .style.setProperty("display", "none");
  };

  const callToAction = () => {
    setToggleThirdAnimationBox(false);
    setToggleFirstAnimationBox(false);
    setToggleSecondAnimationBox(false);
    setToggleCtaAnimationBox(true);
  };

  const handleEnterViewport = () => {
    setIsPlaying(true);
  };

  const handleExitViewport = () => {
    setToggleFirstAnimationBox(false);
    setToggleSecondAnimationBox(false);
    setToggleThirdAnimationBox(false);
    setIsPlaying(false);
  };

  return (
    <div>
      <section className="container main-container">
        <section
          className="mainContainer"
          id="dataHolder"
          data-url="/"
          data-title="News Headlines, English News, Today Headlines, Top Stories"
          data-story-section="home"
        >
          <div className="m_ads_unit">
            <div id="div-gpt-ad-1524814893923-0"></div>
          </div>
          <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
              <span className="hdgTexure"></span>
              <div className="hdgStyle">
                <span>[</span>
                <h2>Top News</h2>
                <span>]</span>
              </div>
            </div>
            <div
              className="cartHolder page-view-candidate"
              data-vars-cardtype="top-news"
              data-vars-storyid="101617601975509"
              data-vars-storytype="story"
              data-weburl="https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html"
              data-vars-section="mumbai news"
              data-vars-orderid="1"
            >
              <figure>
                <a href="/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html101617601975509">
                  <img
                    src="https://images.hindustantimes.com/img/2021/04/05/550x309/7fe2d31e-8a43-11eb-8c8d-7793c0212a86_1617151104054_1617602662684.jpg"
                    alt="Anil Deshmukh"
                    title="Anil Deshmukh"
                  />
                </a>
                <figcaption>Anil Deshmukh</figcaption>
              </figure>
              <div className="storyShortDetail">
                <div className="catName pt10 pb10">
                  <a href="/cities/mumbai-news">mumbai news</a>
                </div>
                <h3 className="hdg3">
                  <a href="/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html101617601975509">
                    Bombay HC directs CBI to conduct preliminary probe against
                    Anil Deshmukh
                  </a>
                </h3>
                <div className="stroyPub">
                  <div className="storyBy">
                    By | Edited by Karan Manral<span>, New Delhi</span>
                  </div>
                  <div className="dateTime">
                    UPDATED ON APR 05, 2021 12:36 PM IST
                  </div>
                </div>
                <div className="sortDec">
                  The high court observed that the probe against Anil Deshmukh
                  on corruption allegations by former Mumbai Police commissioner
                  Param Bir Singh, can't be independent if it is given to the
                  police as he is the Maharashtra home minister.
                </div>
                <div className="actionDiv">
                  <div className="socialEl">
                    <span
                      className="bookmark bookmark-candidate"
                      title="bookmark101617601975509"
                    ></span>
                    <span
                      className="share share-candidate"
                      data-url="https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html"
                      data-title="Bombay HC directs CBI to conduct preliminary probe against Anil Deshmukh"
                      title="share"
                    ></span>
                  </div>
                  <div className="readFull"></div>
                </div>
              </div>
              <div className="storyDetails">
                <div className="detail" data-id="storyDetail"></div>
              </div>
              <div className="shareSticky">
                <div className="fontResize">
                  <span className="increase"></span>
                </div>
                <div className="share-bookmark"></div>
              </div>
              <div className="ajaxLoaderList hide"></div>
            </div>
            <div
              className="cartHolder page-view-candidate listView"
              data-vars-cardtype="top-news"
              data-vars-storyid="101617590540609"
              data-vars-storytype="story"
              data-weburl="https://www.hindustantimes.com/elections/west-bengal-assembly-election/tmc-bastions-big-names-in-phase-3-of-west-bengal-elections-101617590540609.html"
              data-vars-section="west bengal assembly election"
              data-vars-orderid="2"
            >
              <figure>
                <a href="/elections/west-bengal-assembly-election/tmc-bastions-big-names-in-phase-3-of-west-bengal-elections-101617590540609.html101617590540609">
                  <img
                    data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/tmc-flag_1617500785244_1617500799840_1617606479052_1617606490041.jpg"
                    className="lazy"
                    src="https://images.hindustantimes.com/default/550x309.jpg"
                    alt="2021 West Bengal Assembly Elections: Of these 31 seats going to polls on Tuesday, TMC won 29 of them in the 2016 assembly elections, increasing its tally from 26 in 2011. It remains to be seen if the party manages to retain its traditional bastions this time around"
                    title="2021 West Bengal Assembly Elections: Of these 31 seats going to polls on Tuesday, TMC won 29 of them in the 2016 assembly elections, increasing its tally from 26 in 2011. It remains to be seen if the party manages to retain its traditional bastions this time around"
                  />
                </a>
                <figcaption>
                  2021 West Bengal Assembly Elections: Of these 31 seats going
                  to polls on Tuesday, TMC won 29 of them in the 2016 assembly
                  elections, increasing its tally from 26 in 2011. It remains to
                  be seen if the party manages to retain its traditional
                  bastions this time around
                </figcaption>
              </figure>
              <div className="storyShortDetail">
                <div className="catName pt10">
                  <a href="/elections/west-bengal-assembly-election">
                    west bengal assembly election
                  </a>
                </div>
                <h2 className="hdg3">
                  <a href="/elections/west-bengal-assembly-election/tmc-bastions-big-names-in-phase-3-of-west-bengal-elections-101617590540609.html101617590540609">
                    TMC bastions, big names in Phase 3 of West Bengal elections
                  </a>
                </h2>
                <div className="stroyPub">
                  <div className="storyBy">By | Written by Joydeep Bose</div>
                  <div className="dateTime">
                    PUBLISHED ON APR 05, 2021 12:45 PM IST
                  </div>
                </div>
                <div className="sortDec">
                  In Phase 3 of the West Bengal assembly elections, 31 seats
                  across three districts — South 24 Parganas, Howrah, and
                  Hooghly — go into polls. Most of these are TMC bastions, as is
                  apparent from the past election results. Here's a primer ahead
                  of Tuesday's polling.
                </div>
                <div className="actionDiv">
                  <div className="socialEl">
                    <span
                      className="bookmark bookmark-candidate"
                      title="bookmark101617590540609"
                    ></span>
                    <span
                      className="share share-candidate"
                      title="share"
                      data-url="https://www.hindustantimes.com/elections/west-bengal-assembly-election/tmc-bastions-big-names-in-phase-3-of-west-bengal-elections-101617590540609.html"
                      data-title="TMC bastions, big names in Phase 3 of West Bengal elections"
                    ></span>
                  </div>
                  <div className="viewAll"></div>
                </div>
              </div>
              <div className="storyDetails">
                <div className="detail" data-id="storyDetail"></div>
              </div>
              <div className="shareSticky">
                <div className="fontResize">
                  <span className="increase"></span>
                </div>
                <div className="share-bookmark"></div>
              </div>
              <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div className="m_ads_unit_large" style={{ position: "relative" }}>
              <div className="sponsored-by">Sponsored by EKALEIDO</div>
              <div className="app-inside">
                <Waypoint
                  onEnter={handleEnterViewport}
                  onLeave={handleExitViewport}
                >
                  <div className="vis-area">
                    {toggleFirstAnimationBox && (
                      <div
                        className="first poster"
                        data-aos={"slide-up"}
                        data-aos-delay="100"
                        data-aos-mirror="false"
                        data-aos-duration="900"
                        data-aos-easing="ease-out"
                      >
                        <div className="ctrl-option">
                          <img
                            onClick={closeAnimation}
                            src={back}
                            alt="back-btn"
                          />
                        </div>
                        <img className="bb-images" src={bb1} alt="bb1" />
                      </div>
                    )}
                    {toggleSecondAnimationBox && (
                      <div
                        className="first poster"
                        data-aos={"slide-up"}
                        data-aos-delay="100"
                        data-aos-mirror="false"
                        data-aos-duration="900"
                        data-aos-easing="ease-out"
                      >
                        <div className="ctrl-option">
                          <img
                            onClick={closeAnimation}
                            src={back}
                            alt="back-btn"
                          />
                        </div>
                        <img className="bb-images" src={bb2} alt="bb2" />
                      </div>
                    )}
                    {toggleThirdAnimationBox && (
                      <div
                        className="first poster"
                        data-aos={"slide-up"}
                        data-aos-delay="100"
                        data-aos-mirror="false"
                        data-aos-duration="900"
                        data-aos-easing="ease-out"
                      >
                        <div className="ctrl-option">
                          <img
                            onClick={closeAnimation}
                            src={back}
                            alt="back-btn"
                          />
                        </div>
                        <img className="bb-images" src={bb3} alt="bb3" />
                      </div>
                    )}
                    {toggleCtaAnimationBox && (
                      <div
                        className="first poster"
                        data-aos={"zoom-in"}
                        data-aos-delay="100"
                        data-aos-mirror="false"
                        data-aos-duration="900"
                        data-aos-easing="ease-out"
                      >
                        <a
                          id="cta-btn"
                          href="https://blackberrys.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          EXPLORE
                        </a>
                        <img className="bb-images" src={cta} alt="bb3" />
                      </div>
                    )}
                    {!toggleCtaAnimationBox && (
                      <img id="bblogo" src={bblogo} alt="bbLogo" />
                    )}
                    <div className="first-sc">
                      <p className="text">WEDDING COLLECTION</p>
                      <Button onClick={startVideo}>TAP TO EXPLORE</Button>
                      <img src={firstsc} alt="first-screen" />
                    </div>
                    {videoActive && (
                      <ReactPlayer
                        className="video-screen"
                        url={video}
                        loop={false}
                        muted={false}
                        width="100%"
                        height="100%"
                        playing={isPlaying}
                        controls={false}
                        onEnded={() => callToAction()}
                      ></ReactPlayer>
                    )}
                    <div className="icons-bottom">
                      <img onClick={firstAnim} src={evening} alt="safety" />
                      <img onClick={secondAnim} src={noon} alt="seat" />
                      <img onClick={thirdAnim} src={swim} alt="transmission" />
                    </div>
                  </div>
                </Waypoint>
              </div>
            </div>
            <div
              className="cartHolder page-view-candidate listView"
              data-vars-cardtype="top-news"
              data-vars-storyid="101617607574419"
              data-vars-storytype="story"
              data-weburl="https://www.hindustantimes.com/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html"
              data-vars-section="india news"
              data-vars-orderid="3"
            >
              <figure>
                <a href="/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html101617607574419">
                  <img
                    data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/b4d13a50-95df-11eb-be01-f1e853d0087a_1617607572912.jpg"
                    className="lazy"
                    src="https://images.hindustantimes.com/default/550x309.jpg"
                    alt="External affairs minister S Jaishankar"
                    title="External affairs minister S Jaishankar"
                  />
                </a>
                <figcaption>External affairs minister S Jaishankar</figcaption>
              </figure>
              <div className="storyShortDetail">
                <div className="catName pt10">
                  <a href="/india-news">india news</a>
                </div>
                <h2 className="hdg3">
                  <a href="/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html101617607574419">
                    Amid rising Covid cases, Raisina Dialogue to go fully
                    digital
                  </a>
                </h2>
                <div className="stroyPub">
                  <div className="storyBy">By</div>
                  <div className="dateTime">
                    PUBLISHED ON APR 05, 2021 12:56 PM IST
                  </div>
                </div>
                <div className="sortDec">
                  The Observer Research Foundation and the ministry, which
                  jointly organise the Raisina Dialogue, had earlier planned to
                  hold the event with limited in-person attendance of around 100
                  people, including foreign dignitaries, within a bubble in New
                  Delhi. The event is scheduled for April 13-15
                </div>
                <div className="actionDiv">
                  <div className="socialEl">
                    <span
                      className="bookmark bookmark-candidate"
                      title="bookmark101617607574419"
                    ></span>
                    <span
                      className="share share-candidate"
                      title="share"
                      data-url="https://www.hindustantimes.com/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html"
                      data-title="Amid rising Covid cases, Raisina Dialogue to go fully digital"
                    ></span>
                  </div>
                  <div className="viewAll"></div>
                </div>
              </div>
              <div className="storyDetails">
                <div className="detail" data-id="storyDetail"></div>
              </div>
              <div className="shareSticky">
                <div className="fontResize">
                  <span className="increase"></span>
                </div>
                <div className="share-bookmark"></div>
              </div>
              <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div
              className="cartHolder page-view-candidate listView"
              data-vars-cardtype="top-news"
              data-vars-storyid="101617606134428"
              data-vars-storytype="story"
              data-weburl="https://www.hindustantimes.com/india-news/sc-paves-way-for-two-special-courts-to-try-coal-scam-cases-101617606134428.html"
              data-vars-section="india news"
              data-vars-orderid="4"
            >
              <figure>
                <a href="/india-news/sc-paves-way-for-two-special-courts-to-try-coal-scam-cases-101617606134428.html101617606134428">
                  <img
                    data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/9beae8fe-95dc-11eb-be01-f1e853d0087a_1617606132803.jpg"
                    className="lazy"
                    src="https://images.hindustantimes.com/default/550x309.jpg"
                    alt="Supreme Court"
                    title="Supreme Court"
                  />
                </a>
                <figcaption>Supreme Court</figcaption>
              </figure>
              <div className="storyShortDetail">
                <div className="catName pt10">
                  <a href="/india-news">india news</a>
                </div>
                <h2 className="hdg3">
                  <a href="/india-news/sc-paves-way-for-two-special-courts-to-try-coal-scam-cases-101617606134428.html101617606134428">
                    SC paves way for two special courts to try coal scam cases
                  </a>
                </h2>
                <div className="stroyPub">
                  <div className="storyBy">By Abraham Thomas</div>
                  <div className="dateTime">
                    PUBLISHED ON APR 05, 2021 12:32 PM IST
                  </div>
                </div>
                <div className="sortDec">
                  A three judge bench headed by CJI SA Bobde passed the order
                  while considering an application filed by registrar general of
                  Delhi high court to relieve special judge Bharat Parashar
                  currently hearing the coal scam cases
                </div>
                <div className="actionDiv">
                  <div className="socialEl">
                    <span
                      className="bookmark bookmark-candidate"
                      title="bookmark101617606134428"
                    ></span>
                    <span
                      className="share share-candidate"
                      title="share"
                      data-url="https://www.hindustantimes.com/india-news/sc-paves-way-for-two-special-courts-to-try-coal-scam-cases-101617606134428.html"
                      data-title="SC paves way for two special courts to try coal scam cases"
                    ></span>
                  </div>
                  <div className="viewAll"></div>
                </div>
              </div>
              <div className="storyDetails">
                <div className="detail" data-id="storyDetail"></div>
              </div>
              <div className="shareSticky">
                <div className="fontResize">
                  <span className="increase"></span>
                </div>
                <div className="share-bookmark"></div>
              </div>
              <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div
              className="cartHolder page-view-candidate listView"
              data-vars-cardtype="top-news"
              data-vars-storyid="101617606464075"
              data-vars-storytype="story"
              data-weburl="https://www.hindustantimes.com/cities/jaipur-news/around-70-including-students-test-positive-for-covid-19-at-iit-jodhpur-101617606464075.html"
              data-vars-section="jaipur news"
              data-vars-orderid="5"
            >
              <figure>
                <a href="/cities/jaipur-news/around-70-including-students-test-positive-for-covid-19-at-iit-jodhpur-101617606464075.html101617606464075">
                  <img
                    data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/IIT-Jodhpur_1617606896368_1617606902471.jpg"
                    className="lazy"
                    src="https://images.hindustantimes.com/default/550x309.jpg"
                    alt="Block G3 of the campus has been declared a micro-containment zone owing to the cases reported.(Representative)"
                    title="Block G3 of the campus has been declared a micro-containment zone owing to the cases reported.(Representative)"
                  />
                </a>
                <figcaption>
                  Block G3 of the campus has been declared a micro-containment
                  zone owing to the cases reported.(Representative)
                </figcaption>
              </figure>
              <div className="storyShortDetail">
                <div className="catName pt10">
                  <a href="/cities/jaipur-news">jaipur news</a>
                </div>
                <h2 className="hdg3">
                  <a href="/cities/jaipur-news/around-70-including-students-test-positive-for-covid-19-at-iit-jodhpur-101617606464075.html101617606464075">
                    Around 70 including students test positive for Covid-19 at
                    IIT-Jodhpur
                  </a>
                </h2>
                <div className="stroyPub">
                  <div className="storyBy">
                    By | Edited by Mallika Soni<span>, New Delhi</span>
                  </div>
                  <div className="dateTime">
                    UPDATED ON APR 05, 2021 12:53 PM IST
                  </div>
                </div>
                <div className="sortDec">
                  <ul>
                    <li>
                      "We have increased the sampling, so contact tracing can be
                      done. Teachers are very less. Most of the infected
                      patients are students,” P Singh, the deputy chief medical
                      health officer (CMHO) said.
                    </li>
                  </ul>
                </div>
                <div className="actionDiv">
                  <div className="socialEl">
                    <span
                      className="bookmark bookmark-candidate"
                      title="bookmark101617606464075"
                    ></span>
                    <span
                      className="share share-candidate"
                      title="share"
                      data-url="https://www.hindustantimes.com/cities/jaipur-news/around-70-including-students-test-positive-for-covid-19-at-iit-jodhpur-101617606464075.html"
                      data-title="Around 70 including students test positive for Covid-19 at IIT-Jodhpur"
                    ></span>
                  </div>
                  <div className="viewAll"></div>
                </div>
              </div>
              <div className="storyDetails">
                <div className="detail" data-id="storyDetail"></div>
              </div>
              <div className="shareSticky">
                <div className="fontResize">
                  <span className="increase"></span>
                </div>
                <div className="share-bookmark"></div>
              </div>
              <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Blackberrys;

import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import ReactPlayer from 'react-player';
import { Container } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReplyIcon from '@material-ui/icons/Reply';

import '../Common/ad.scss';
import '../Common/paperLayout.scss';

import video from '../../assets/videos/merc.mp4';
import safety from '../../assets/icons/safety.png';
import seat from '../../assets/icons/seat.png';
import transmission from '../../assets/icons/transmission.png';
import mercLogo from '../../assets/img/mercedes_logos.png';
import transmission_img from '../../assets/img/transmission.jpeg';
import interior from '../../assets/img/interior.jpg';
import maybach from '../../assets/img/maybach.jpeg';

// const video = React.lazy(() => import("../../assets/videos/merc.mp4"));

function Mercedes() {
    if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
      }
    
      const [isPlaying, setIsPlaying] = useState(false);
      const [toggleFirstAnimationBox, setToggleFirstAnimationBox] = useState(false);
      const [toggleSecondAnimationBox, setToggleSecondAnimationBox] = useState(false);
      const [toggleThirdAnimationBox, setToggleThirdAnimationBox] = useState(false);
    
      const closeAnimation = () => {
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setIsPlaying(true);        
      }
      
      const firstAnim = () => {
        setToggleFirstAnimationBox(true);
        setToggleSecondAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setIsPlaying(false);        
      }
    
      const secondAnim = () => {
        setToggleSecondAnimationBox(true);
        setToggleFirstAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setIsPlaying(false);                
      }
    
      const thirdAnim = () => {
        setToggleThirdAnimationBox(true);
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setIsPlaying(false);
      }

      const handleEnterViewport = () => {
        setIsPlaying(true);        
      }

      const handleExitViewport = () => {
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setToggleThirdAnimationBox(false);
        setIsPlaying(false);
      }
      
    return (
        <div> 
            <section className="container main-container">
            <section className="mainContainer" id="dataHolder" data-url="/" data-story-section="home">
                <div className="m_ads_unit">
                    <div id='div-gpt-ad-1524814893923-0'></div>
                </div>
                <section className="worldSection sections ht-ad-holder">
                    <div className="secHdg">
                        <span className="hdgTexure"></span>
                        <div className="hdgStyle">
                            <span>[</span><h2>Top News</h2><span>]</span>
                        </div>
                    </div>
                    <div className="cartHolder page-view-candidate" data-vars-cardtype="top-news" data-vars-storyid="101617601975509" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html" data-vars-section="mumbai news" data-vars-orderid="1">
                    <figure>
                        <a href="/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html101617601975509">
                            <img src="https://images.hindustantimes.com/img/2021/04/05/550x309/7fe2d31e-8a43-11eb-8c8d-7793c0212a86_1617151104054_1617602662684.jpg" alt="Anil Deshmukh" title="Anil Deshmukh" />
                        </a>
                        <figcaption>Anil Deshmukh</figcaption>
                    </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/cities/mumbai-news">mumbai news</a></div>
            <h3 className="hdg3">
            <a href="/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html101617601975509">
            Bombay HC directs CBI to conduct preliminary probe against Anil Deshmukh</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            By   | Edited by Karan Manral<span>, New Delhi</span>
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 12:36 PM IST</div>
            </div>
            <div className="sortDec">The high court observed that the probe against Anil Deshmukh on corruption allegations by former Mumbai Police commissioner Param Bir Singh, can't be independent if it is given to the police as he is the Maharashtra home minister.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617601975509"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html" data-title="Bombay HC directs CBI to conduct preliminary probe against Anil Deshmukh" title="share"></span>
            </div>
            <div className="readFull">
            </div>
            </div>
            </div>
            <div className="storyDetails">
            <div className="detail" data-id="storyDetail">
            </div>
            </div>
            <div className="shareSticky">
            <div className="fontResize"><span className="increase"></span></div>
            <div className="share-bookmark">
            </div>
            </div>
            <div className="ajaxLoaderList hide"></div>
            </div>
            
            
            
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="top-news" data-vars-storyid="101617590540609" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/elections/west-bengal-assembly-election/tmc-bastions-big-names-in-phase-3-of-west-bengal-elections-101617590540609.html" data-vars-section="west bengal assembly election" data-vars-orderid="2">
            <figure>
            <a href="/elections/west-bengal-assembly-election/tmc-bastions-big-names-in-phase-3-of-west-bengal-elections-101617590540609.html101617590540609">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/tmc-flag_1617500785244_1617500799840_1617606479052_1617606490041.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="2021 West Bengal Assembly Elections: Of these 31 seats going to polls on Tuesday, TMC won 29 of them in the 2016 assembly elections, increasing its tally from 26 in 2011. It remains to be seen if the party manages to retain its traditional bastions this time around" title="2021 West Bengal Assembly Elections: Of these 31 seats going to polls on Tuesday, TMC won 29 of them in the 2016 assembly elections, increasing its tally from 26 in 2011. It remains to be seen if the party manages to retain its traditional bastions this time around" />
            </a>
            <figcaption>2021 West Bengal Assembly Elections: Of these 31 seats going to polls on Tuesday, TMC won 29 of them in the 2016 assembly elections, increasing its tally from 26 in 2011. It remains to be seen if the party manages to retain its traditional bastions this time around</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/elections/west-bengal-assembly-election">west bengal assembly election</a></div>
            <h2 className="hdg3">
            <a href="/elections/west-bengal-assembly-election/tmc-bastions-big-names-in-phase-3-of-west-bengal-elections-101617590540609.html101617590540609">
            TMC bastions, big names in Phase 3 of West Bengal elections
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By | Written by Joydeep Bose
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 12:45 PM IST</div>
            </div>
            <div className="sortDec">In Phase 3 of the West Bengal assembly elections, 31 seats across three districts — South 24 Parganas, Howrah, and Hooghly — go into polls. Most of these are TMC bastions, as is apparent from the past election results. Here's a primer ahead of Tuesday's polling.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617590540609"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/elections/west-bengal-assembly-election/tmc-bastions-big-names-in-phase-3-of-west-bengal-elections-101617590540609.html" data-title="TMC bastions, big names in Phase 3 of West Bengal elections"></span>
            </div>
            <div className="viewAll">
            </div>
            </div>
            </div>
            <div className="storyDetails">
            <div className="detail" data-id="storyDetail">
            </div>
            </div>
            <div className="shareSticky">
            <div className="fontResize"><span className="increase"></span></div>
            <div className="share-bookmark">
            </div>
            </div>
            <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="top-news" data-vars-storyid="101617607574419" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html" data-vars-section="india news" data-vars-orderid="3">
            <figure>
            <a href="/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html101617607574419">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/b4d13a50-95df-11eb-be01-f1e853d0087a_1617607572912.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="External affairs minister S Jaishankar" title="External affairs minister S Jaishankar" />
            </a>
            <figcaption>External affairs minister S Jaishankar</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/india-news">india news</a></div>
            <h2 className="hdg3">
            <a href="/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html101617607574419">
            Amid rising Covid cases, Raisina Dialogue to go fully digital
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By   
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 12:56 PM IST</div>
            </div>
            <div className="sortDec">The Observer Research Foundation and the ministry, which jointly organise the Raisina Dialogue, had earlier planned to hold the event with limited in-person attendance of around 100 people, including foreign dignitaries, within a bubble in New Delhi. The event is scheduled for April 13-15</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617607574419"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html" data-title="Amid rising Covid cases, Raisina Dialogue to go fully digital"></span>
            </div>
            <div className="viewAll">
            </div>
            </div>
            </div>
            <div className="storyDetails">
            <div className="detail" data-id="storyDetail">
            </div>
            </div>
            <div className="shareSticky">
            <div className="fontResize"><span className="increase"></span></div>
            <div className="share-bookmark">
            </div>
            </div>
            <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="top-news" data-vars-storyid="101617606134428" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/india-news/sc-paves-way-for-two-special-courts-to-try-coal-scam-cases-101617606134428.html" data-vars-section="india news" data-vars-orderid="4">
            <figure>
            <a href="/india-news/sc-paves-way-for-two-special-courts-to-try-coal-scam-cases-101617606134428.html101617606134428">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/9beae8fe-95dc-11eb-be01-f1e853d0087a_1617606132803.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Supreme Court" title="Supreme Court" />
            </a>
            <figcaption>Supreme Court</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/india-news">india news</a></div>
            <h2 className="hdg3">
            <a href="/india-news/sc-paves-way-for-two-special-courts-to-try-coal-scam-cases-101617606134428.html101617606134428">
            SC paves way for two special courts to try coal scam cases
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Abraham Thomas
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 12:32 PM IST</div>
            </div>
            <div className="sortDec">A three judge bench headed by CJI SA Bobde passed the order while considering an application filed by registrar general of Delhi high court to relieve special judge Bharat Parashar currently hearing the coal scam cases</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617606134428"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/india-news/sc-paves-way-for-two-special-courts-to-try-coal-scam-cases-101617606134428.html" data-title="SC paves way for two special courts to try coal scam cases"></span>
            </div>
            <div className="viewAll">
            </div>
            </div>
            </div>
            <div className="storyDetails">
            <div className="detail" data-id="storyDetail">
            </div>
            </div>
            <div className="shareSticky">
            <div className="fontResize"><span className="increase"></span></div>
            <div className="share-bookmark">
            </div>
            </div>
            <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="top-news" data-vars-storyid="101617606464075" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/jaipur-news/around-70-including-students-test-positive-for-covid-19-at-iit-jodhpur-101617606464075.html" data-vars-section="jaipur news" data-vars-orderid="5">
            <figure>
            <a href="/cities/jaipur-news/around-70-including-students-test-positive-for-covid-19-at-iit-jodhpur-101617606464075.html101617606464075">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/IIT-Jodhpur_1617606896368_1617606902471.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Block G3 of the campus has been declared a micro-containment zone owing to the cases reported.(Representative)" title="Block G3 of the campus has been declared a micro-containment zone owing to the cases reported.(Representative)" />
            </a>
            <figcaption>Block G3 of the campus has been declared a micro-containment zone owing to the cases reported.(Representative)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/cities/jaipur-news">jaipur news</a></div>
            <h2 className="hdg3">
            <a href="/cities/jaipur-news/around-70-including-students-test-positive-for-covid-19-at-iit-jodhpur-101617606464075.html101617606464075">
            Around 70 including students test positive for Covid-19 at IIT-Jodhpur
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By   | Edited by Mallika Soni<span>, New Delhi</span>
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 12:53 PM IST</div>
            </div>
            <div className="sortDec"><ul><li>"We have increased the sampling, so contact tracing can be done. Teachers are very less. Most of the infected patients are students,” P Singh, the deputy chief medical health officer (CMHO) said.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617606464075"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cities/jaipur-news/around-70-including-students-test-positive-for-covid-19-at-iit-jodhpur-101617606464075.html" data-title="Around 70 including students test positive for Covid-19 at IIT-Jodhpur"></span>
            </div>
            <div className="viewAll">
            </div>
            </div>
            </div>
            <div className="storyDetails">
            <div className="detail" data-id="storyDetail">
            </div>
            </div>  
            <div className="shareSticky">
            <div className="fontResize"><span className="increase"></span></div>
            <div className="share-bookmark">
            </div>
            </div>
            <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="top-news" data-vars-storyid="101617602233635" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/mumbai-news/defamation-case-court-likely-to-pronounce-order-on-kangana-ranaut-s-plea-today-101617602233635.html" data-vars-section="mumbai news" data-vars-orderid="6">
            <figure>
            <a href="/cities/mumbai-news/defamation-case-court-likely-to-pronounce-order-on-kangana-ranaut-s-plea-today-101617602233635.html101617602233635">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/64cd633c-95d3-11eb-adee-e1690c080e42_1617602232595.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Bollywood actor Kangana Ranaut. (PTI)" title="Bollywood actor Kangana Ranaut. (PTI)" />
            </a>
            <figcaption>Bollywood actor Kangana Ranaut. (PTI)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/cities/mumbai-news">mumbai news</a></div>
            <h2 className="hdg3">
            <a href="/cities/mumbai-news/defamation-case-court-likely-to-pronounce-order-on-kangana-ranaut-s-plea-today-101617602233635.html101617602233635">
            Defamation case: Court likely to pronounce order on Kangana Ranaut’s plea today
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By   
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:27 AM IST</div>
            </div>
            <div className="sortDec">Javed Akhtar, in his complaint, alleged that Ranaut had made several defamatory statements about him in an interview given to a news channel in July 2020, alleging that the 76-year-old writer/lyricist runs a “suicide gang”</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617602233635"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cities/mumbai-news/defamation-case-court-likely-to-pronounce-order-on-kangana-ranaut-s-plea-today-101617602233635.html" data-title="Defamation case: Court likely to pronounce order on Kangana Ranaut’s plea today"></span>
            </div>
            <div className="viewAll">
            </div>
            </div>
            </div>
            <div className="storyDetails">
            <div className="detail" data-id="storyDetail">
            </div>
            </div>
            <div className="shareSticky">
            <div className="fontResize"><span className="increase"></span></div>
            <div className="share-bookmark">
            </div>
            </div>
            <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="top-news" data-vars-storyid="101617602093439" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cricket/ipl-2021-aakash-chopra-picks-his-ideal-punjab-kings-playing-xi-leaves-out-rs-8-crore-allrounder-101617602093439.html" data-vars-section="cricket" data-vars-orderid="7">
            <figure>
            <a href="/cricket/ipl-2021-aakash-chopra-picks-his-ideal-punjab-kings-playing-xi-leaves-out-rs-8-crore-allrounder-101617602093439.html101617602093439">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/_11740776-376a-11eb-ba1a-dd821f92a475_1617603006735.PNG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Aakash Chopra.(Twitter)" title="Aakash Chopra.(Twitter)" />
            </a>
            <figcaption>Aakash Chopra.(Twitter)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/cricket">cricket</a></div>
            <h2 className="hdg3">
            <a href="/cricket/ipl-2021-aakash-chopra-picks-his-ideal-punjab-kings-playing-xi-leaves-out-rs-8-crore-allrounder-101617602093439.html101617602093439">
            Aakash Chopra picks ideal PBK XI for IPL 2021, leaves out <span className='webrupee'>₹</span>8 crore buy
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By  
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 01:14 PM IST</div>
            </div>
            <div className="sortDec">IPL 2021: Riley Meredith was bought by the franchise at the auction for <span className='webrupee'>₹</span>8 crore, and he was the most expensive uncapped overseas player at the auctions this year. But he was not included in Aakash Chopra's ideal playing XI for Punjab Kings.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617602093439"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cricket/ipl-2021-aakash-chopra-picks-his-ideal-punjab-kings-playing-xi-leaves-out-rs-8-crore-allrounder-101617602093439.html" data-title="Aakash Chopra picks ideal PBK XI for IPL 2021, leaves out &lt;span className='webrupee'&gt;₹&lt;/span&gt;8 crore buy"></span>
            </div>
            <div className="viewAll">
            </div>
            </div>
            </div>
            <div className="storyDetails">
            <div className="detail" data-id="storyDetail">
            </div>
            </div>
            <div className="shareSticky">
            <div className="fontResize"><span className="increase"></span></div>
            <div className="share-bookmark">
            </div>
            </div>
            <div className="ajaxLoaderList hide"></div>
            </div>
            <div className="recommended"></div>
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="top-news" data-vars-storyid="101617606431450" data-vars-storytype="deadlink" data-weburl="https://auto.hindustantimes.com/auto/news/nissan-magnite-hits-production-milestone-of-10-000-waiting-period-remains-high-41617596424319.html?utm_source=ht_site&utm_medium=hp_top_news&utm_campaign=hp_top_news" data-vars-section="cricket" data-vars-orderid="8">
            <figure>
            <a href="https://auto.hindustantimes.com/auto/news/nissan-magnite-hits-production-milestone-of-10-000-waiting-period-remains-high-41617596424319.html?utm_source=ht_site&utm_medium=hp_top_news&utm_campaign=hp_top_news" rel="nofollow noreferrer noopener" target="_blank" >
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/Magnite_1616476701393_1617606441724_1617606453235.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="A Magnite makes its way around the RNAIPL facility." title="A Magnite makes its way around the RNAIPL facility." />
            </a>
            <figcaption>A Magnite makes its way around the RNAIPL facility.
            </figcaption>
            </figure>
            <div className="storyShortDetail">
            <h3 className="hdg3">
            <a href="https://auto.hindustantimes.com/auto/news/nissan-magnite-hits-production-milestone-of-10-000-waiting-period-remains-high-41617596424319.html?utm_source=ht_site&utm_medium=hp_top_news&utm_campaign=hp_top_news" rel="nofollow noreferrer noopener" target="_blank" >
            Nissan Magnite hits production milestone of 10,000, waiting period remains high
            </a>
            </h3>
            <div className="stroyPub">
            <div className="dateTime">UPDATED ON APR 05, 2021 12:40 PM IST</div>
            </div>
            <div className="actionDiv">
            <div className="socialEl">
            </div>
            <div className="viewAll rightArrow">
            </div>
            </div>
            </div>
            </div>
            <div className="viewMoreButton">
            </div>
            </section>

            
            <div className="m_ads_unit_large" style={{ position: "relative"}}>
                    <div className="sponsored-by">Sponsored by EKALEIDO</div>
                    <Container className="app-in">
                        <Waypoint 
                            onEnter={handleEnterViewport}
                            onLeave={handleExitViewport}
                            >
                            <div className="visible-area">
                                { toggleFirstAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                        data-aos-delay="100"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out"
                                        >
                                        <div className="poster-heading" data-aos={"slide-up"} 
                                            data-aos-delay="300"
                                            data-aos-mirror='false'
                                            data-aos-duration="900"
                                            data-aos-easing="ease-out">
                                                <img src={mercLogo} alt="logo"/>
                                                <div className="ctrl-option">
                                                    <ReplyIcon onClick={closeAnimation}/>
                                                </div>
                                        </div>
                                        <img src={interior} alt="transmission" />
                                        <div className="left-aligned-content" data-aos={"slide-up"} 
                                        data-aos-delay="800"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <p className="short-text">A special chapter is automotive history.</p>
                                            <p className="long-text">The perfection of  stylish mobility: that is the standard of the Mercedes-Maybach S-Class. Elegence, luxury and state-of-the-art comfort merge into a unique travel experience.</p>
                                        </div>
                                        <div className="right-aligned-content" data-aos={"slide-up"} 
                                        data-aos-delay="800"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <p className="short-text">Comfort highlights: </p>
                                            <p className="long-text">AIRMATIC <br/>MAGIC BODY CONTROL <br/> ENERGISING COMFORT CONTROL <br/> REAR SEAT ENTERTAINTMENT SYSTEM <br/> SMARTPHONE INTEGRATION</p>
                                        </div>
                                    </div> 
                                }

                                { toggleSecondAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                        data-aos-delay="100"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out"
                                        >
                                        <div className="poster-heading" data-aos={"slide-up"} 
                                            data-aos-delay="300"
                                            data-aos-mirror='false'
                                            data-aos-duration="900"
                                            data-aos-easing="ease-out">
                                                <img src={mercLogo} alt="logo"/>
                                                <div className="ctrl-option">
                                                    <ReplyIcon onClick={closeAnimation}/>
                                                </div>
                                        </div>
                                        <img src={maybach} alt="maybach" />
                                        <div className="left-aligned-content" data-aos={"slide-up"} 
                                        data-aos-delay="800"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <p className="short-text">Cutting-Edge Assistance System.</p>
                                            <p className="long-text">Comfort and safety on every route: Mercedes Benz Intelligence Drive combines sophisticated assistance system and always anticipates what's ahead. </p>
                                        </div>
                                        <div className="right-aligned-content" data-aos={"slide-up"} 
                                        data-aos-delay="800"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <p className="short-text">Safety highlights: </p>
                                            <p className="long-text">MULTIBEAM LED <br/> PRE-SAFE <br/> NIGHT-VIEW ASSISTANCE PLUS <br/>MAGIC VISION CONTROL <br/> DRIVING ASSISTANCE PACKAGE <br/> ACTIVE BRAKING AND BLIND SPOT </p>
                                        </div>
                                    </div> 
                                }

                                { toggleThirdAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                        data-aos-delay="100"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out"
                                        >
                                        <div className="poster-heading" data-aos={"slide-up"} 
                                            data-aos-delay="300"
                                            data-aos-mirror='false'
                                            data-aos-duration="900"
                                            data-aos-easing="ease-out">
                                                <img src={mercLogo} alt="logo"/>
                                                <div className="ctrl-option">
                                                    <ReplyIcon onClick={closeAnimation}/>
                                                </div>
                                        </div>
                                        <img src={transmission_img} alt="transmission" />
                                        <div className="left-aligned-content" data-aos={"slide-up"} 
                                        data-aos-delay="800"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <p className="short-text">Transmission - prefers a smooth leadership style.</p>
                                            <p className="long-text">Even when your chauffeur is driving, the transmission of the Mercedes-Maybach S-Class directly serves you: by showing restraint. Smooth, virtually imperceptible gear changes allow you to be productive or relax in peace and quite.</p>
                                        </div>
                                        <div className="right-aligned-content" data-aos={"slide-up"} 
                                        data-aos-delay="800"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out">
                                            <p className="short-text">7G-TRONIC PLUS <br/>(Mercedes-Matbach S 650)</p>
                                            <p className="long-text">The 7-speed automatic transmission combines a high level of comfort with driving pleasure and efficiency.</p>
                                        </div>
                                    </div> 
                                }
                                <ReactPlayer
                                    className="video-screen" 
                                    url={video}
                                    loop={true}
                                    muted={false}
                                    width="100%"
                                    height="100%"
                                    playing={ isPlaying } 
                                    controls={ false }>
                                </ReactPlayer>
                                <div className="icons">
                                    <img onClick={firstAnim} src={safety} alt="safety"/>
                                    <img onClick={secondAnim} src={seat} alt="seat"/>
                                    <img onClick={thirdAnim} src={transmission} alt="transmission"/>
                                </div>
                            </div>
                        </Waypoint> 
                    </Container>
                </div>
                

                <section className="worldSection sections ht-ad-holder">
                <div className="secHdg">
                <span className="hdgTexure"></span>
                <div className="hdgStyle">
                <span>[</span><h2>Don't Miss</h2><span>]</span>
                </div>
                </div>
                <div className="cartHolder page-view-candidate" data-vars-cardtype="don't-miss" data-vars-storyid="101617604665707" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/step-inside-karan-johar-s-swanky-penthouse-with-sprawling-terrace-designed-by-gauri-khan-and-opulent-closet-101617604665707.html" data-vars-section="bollywood" data-vars-orderid="1">
                <figure>
                <a href="/entertainment/bollywood/step-inside-karan-johar-s-swanky-penthouse-with-sprawling-terrace-designed-by-gauri-khan-and-opulent-closet-101617604665707.html101617604665707">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/Karan_Johar_home_1617608919242_1617608939693.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Glimpses of Karan Johar's Bandra home." title="Glimpses of Karan Johar's Bandra home." />
                </a>
                <figcaption>Glimpses of Karan Johar's Bandra home.</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10 pb10"><a href="/entertainment/bollywood">bollywood</a></div>
                <h3 className="hdg3">
                <a href="/entertainment/bollywood/step-inside-karan-johar-s-swanky-penthouse-with-sprawling-terrace-designed-by-gauri-khan-and-opulent-closet-101617604665707.html101617604665707">
                Step inside Karan Johar's swanky penthouse, with terrace designed by Gauri Khan</a>
                </h3>
                <div className="stroyPub">
                <div className="storyBy">
                By    
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 01:38 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>Filmmaker Karan Johar lives in a 12th floor Bandra penthouse. See pictures of his lavish home, which has a 'sprawling terrace' designed by Gauri Khan.</li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617604665707"></span>
                <span className="share share-candidate" data-url="https://www.hindustantimes.com/entertainment/bollywood/step-inside-karan-johar-s-swanky-penthouse-with-sprawling-terrace-designed-by-gauri-khan-and-opulent-closet-101617604665707.html" data-title="Step inside Karan Johar's swanky penthouse, with terrace designed by Gauri Khan" title="share"></span>
                </div>
                <div className="readFull">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="don't-miss" data-vars-storyid="101617602546805" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/when-ranbir-kapoor-snapped-at-anushka-sharma-for-slapping-him-during-a-scene-i-told-you-not-to-do-it-101617602546805.html" data-vars-section="bollywood" data-vars-orderid="2">
                <figure>
                <a href="/entertainment/bollywood/when-ranbir-kapoor-snapped-at-anushka-sharma-for-slapping-him-during-a-scene-i-told-you-not-to-do-it-101617602546805.html101617602546805">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/ranbir_anu_1617603810981_1617603819477.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Ranbir Kapoor and Anushka Sharma on the set of Ae Dil Hai Mushkil." title="Ranbir Kapoor and Anushka Sharma on the set of Ae Dil Hai Mushkil." />
                </a>
                <figcaption>Ranbir Kapoor and Anushka Sharma on the set of Ae Dil Hai Mushkil.</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/entertainment/bollywood">bollywood</a></div>
                <h2 className="hdg3">
                <a href="/entertainment/bollywood/when-ranbir-kapoor-snapped-at-anushka-sharma-for-slapping-him-during-a-scene-i-told-you-not-to-do-it-101617602546805.html101617602546805">
                When Ranbir snapped at Anushka for slapping him: 'I told you not to do it'
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By    
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 12:08 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>Ranbir Kapoor and Anushka Sharma have spoken about their friendship, but did you know that he once snapped at her for actually slapping him while filming a scene for Ae Dil Hai Mushkil?</li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617602546805"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/bollywood/when-ranbir-kapoor-snapped-at-anushka-sharma-for-slapping-him-during-a-scene-i-told-you-not-to-do-it-101617602546805.html" data-title="When Ranbir snapped at Anushka for slapping him: 'I told you not to do it'"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="widget-ad align-center w100"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="don't-miss" data-vars-storyid="101617601387073" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cricket/fakhar-zaman-s-controversial-run-out-for-193-by-quinton-de-kock-in-2nd-odi-between-south-africa-and-pakistan-sparks-spirit-of-cricket-debate-on-twitter-101617601387073.html" data-vars-section="cricket" data-vars-orderid="3">
                <figure>
                <a href="/cricket/fakhar-zaman-s-controversial-run-out-for-193-by-quinton-de-kock-in-2nd-odi-between-south-africa-and-pakistan-sparks-spirit-of-cricket-debate-on-twitter-101617601387073.html101617601387073">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/out_1617601541615_1617601549977.jfif" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Quinton de Kock (left) celebrates Fakhar Zaman's run out in the second ODI. (Twitter)" title="Quinton de Kock (left) celebrates Fakhar Zaman's run out in the second ODI. (Twitter)" />
                </a>
                <figcaption>Quinton de Kock (left) celebrates Fakhar Zaman's run out in the second ODI. (Twitter)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/cricket">cricket</a></div>
                <h2 className="hdg3">
                <a href="/cricket/fakhar-zaman-s-controversial-run-out-for-193-by-quinton-de-kock-in-2nd-odi-between-south-africa-and-pakistan-sparks-spirit-of-cricket-debate-on-twitter-101617601387073.html101617601387073">
                Fakhar Zaman's run out for 193 sparks 'spirit of cricket' debate on Twitter
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By  
                </div>
                <div className="dateTime">UPDATED ON APR 05, 2021 12:11 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>Pakistan batsman Fakhar Zaman, who played one of the best innings in the history of the 50-over game, fell to a cheeky run out initiated by opposition wicketkeeper Quinton de Kock.</li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617601387073"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cricket/fakhar-zaman-s-controversial-run-out-for-193-by-quinton-de-kock-in-2nd-odi-between-south-africa-and-pakistan-sparks-spirit-of-cricket-debate-on-twitter-101617601387073.html" data-title="Fakhar Zaman's run out for 193 sparks 'spirit of cricket' debate on Twitter"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="don't-miss" data-vars-storyid="101617603191380" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/lifestyle/fashion/nora-fatehi-paints-the-town-red-in-bodycon-dress-with-bag-worth-rs-3-lakh-101617603191380.html" data-vars-section="fashion" data-vars-orderid="4">
                <figure>
                <a href="/lifestyle/fashion/nora-fatehi-paints-the-town-red-in-bodycon-dress-with-bag-worth-rs-3-lakh-101617603191380.html101617603191380">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/Nora_1617603919050_1617603938737.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Nora Fatehi in stunning red dress(Varinder Chawla)" title="Nora Fatehi in stunning red dress(Varinder Chawla)" />
                </a>
                <figcaption>Nora Fatehi in stunning red dress(Varinder Chawla)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/lifestyle/fashion">fashion</a></div>
                <h2 className="hdg3">
                <a href="/lifestyle/fashion/nora-fatehi-paints-the-town-red-in-bodycon-dress-with-bag-worth-rs-3-lakh-101617603191380.html101617603191380">
                Nora Fatehi paints the town red in bodycon dress with bag worth <span className='webrupee'>₹</span>3 lakh
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By Nishtha Grover<span>, Delhi</span>
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 12:14 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>Nora Fatehi was recently spotted in Mumbai wearing a stunning figure-flaunting red knee-length dress on her day out. The actor teamed her outfit with black accessories and nailed the iconic colour combo. </li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617603191380"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/lifestyle/fashion/nora-fatehi-paints-the-town-red-in-bodycon-dress-with-bag-worth-rs-3-lakh-101617603191380.html" data-title="Nora Fatehi paints the town red in bodycon dress with bag worth &lt;span className='webrupee'&gt;₹&lt;/span&gt;3 lakh"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="don't-miss" data-vars-storyid="101617598513024" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cricket/pakistan-pacer-faheem-ashraf-breaks-south-africa-captain-temba-bavuma-s-bat-during-savs-pak-odi-watch-video-101617598513024.html" data-vars-section="cricket" data-vars-orderid="5">
                <figure>
                <a href="/cricket/pakistan-pacer-faheem-ashraf-breaks-south-africa-captain-temba-bavuma-s-bat-during-savs-pak-odi-watch-video-101617598513024.html101617598513024">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/bavuma_1617600314355_1617600321042.jfif" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Temba Bavuma's bat breaks during the second ODI vs Pakistan.(Twitter)" title="Temba Bavuma's bat breaks during the second ODI vs Pakistan.(Twitter)" />
                </a>
                <figcaption>Temba Bavuma's bat breaks during the second ODI vs Pakistan.(Twitter)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/cricket">cricket</a></div>
                <h2 className="hdg3">
                <a href="/cricket/pakistan-pacer-faheem-ashraf-breaks-south-africa-captain-temba-bavuma-s-bat-during-savs-pak-odi-watch-video-101617598513024.html101617598513024">
                New bat, please! Faheem Ashraf breaks Temba Bavuma's bat during SA-PAK ODI-WATCH
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By  
                </div>
                <div className="dateTime">UPDATED ON APR 05, 2021 10:59 AM IST</div>
                </div>
                <div className="sortDec"><ul><li>South Africa pacer Faheem Ashraf broke Temba Bavuma's bat when the batsman was simply defending the ball during the 2nd ODI against Pakistan.</li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617598513024"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cricket/pakistan-pacer-faheem-ashraf-breaks-south-africa-captain-temba-bavuma-s-bat-during-savs-pak-odi-watch-video-101617598513024.html" data-title="New bat, please! Faheem Ashraf breaks Temba Bavuma's bat during SA-PAK ODI-WATCH"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="viewMoreButton">
                <a href="/don-t-miss" data-id="viewmore_don't-miss,1" className="view">
                <span>View All</span>
                </a>
                </div>
                </section>
                <div className="sponsor-ad"></div>
                <section className="worldSection sections ht-ad-holder">
                <div className="secHdg">
                <span className="hdgTexure"></span>
                <div className="hdgStyle">
                <span>[</span><h2>Cricket</h2><span>]</span>
                </div>
                </div>
                <div className="cartHolder page-view-candidate" data-vars-cardtype="cricket" data-vars-storyid="101617598333298" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cricket/the-fault-was-mine-not-quinton-de-kock-s-fakhar-zaman-reacts-on-his-controversial-run-out-for-193-after-pakistan-vs-south-africa-2nd-odi-101617598333298.html" data-vars-section="cricket" data-vars-orderid="1">
                <figure>
                <a href="/cricket/the-fault-was-mine-not-quinton-de-kock-s-fakhar-zaman-reacts-on-his-controversial-run-out-for-193-after-pakistan-vs-south-africa-2nd-odi-101617598333298.html101617598333298">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/Fakhar_Zaman_Run_Out_1617598495831_1617598515392.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Fakhar Zaman was run out for 193.(AP)" title="Fakhar Zaman was run out for 193.(AP)" />
                </a>
                <figcaption>Fakhar Zaman was run out for 193.(AP)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10 pb10"><a href="/cricket">cricket</a></div>
                <h3 className="hdg3">
                <a href="/cricket/the-fault-was-mine-not-quinton-de-kock-s-fakhar-zaman-reacts-on-his-controversial-run-out-for-193-after-pakistan-vs-south-africa-2nd-odi-101617598333298.html101617598333298">
                'Fault was mine, not Quinton's': Fakhar on his controversial run out for 193</a>
                </h3>
                <div className="stroyPub">
                <div className="storyBy">
                By  
                </div>
                <div className="dateTime">UPDATED ON APR 05, 2021 12:09 PM IST</div>
                </div>
                <div className="sortDec">South Africa vs Pakistan: The runout led to a huge debate on social media as wicketkeeper de Kock appeared to gesture that the throw was going towards the non-striker's end, which prompted Zaman to slow down during his run-up.</div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617598333298"></span>
                <span className="share share-candidate" data-url="https://www.hindustantimes.com/cricket/the-fault-was-mine-not-quinton-de-kock-s-fakhar-zaman-reacts-on-his-controversial-run-out-for-193-after-pakistan-vs-south-africa-2nd-odi-101617598333298.html" data-title="'Fault was mine, not Quinton's': Fakhar on his controversial run out for 193" title="share"></span>
                </div>
                <div className="readFull">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="cricket" data-vars-storyid="101617607333193" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cricket/ipl/ipl-2021-sunrisers-hyderabad-all-rounder-jason-holder-arrives-in-chennai-101617607333193.html" data-vars-section="ipl" data-vars-orderid="2">
                <figure>
                <a href="/cricket/ipl/ipl-2021-sunrisers-hyderabad-all-rounder-jason-holder-arrives-in-chennai-101617607333193.html101617607333193">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/jason_holder_1617608012019_1617608024579.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="West Indies all-rounder Jason Holder arrives in Chennai for IPL 2021(Twitter/SRH)" title="West Indies all-rounder Jason Holder arrives in Chennai for IPL 2021(Twitter/SRH)" />
                </a>
                <figcaption>West Indies all-rounder Jason Holder arrives in Chennai for IPL 2021(Twitter/SRH)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/cricket/ipl">ipl</a></div>
                <h2 className="hdg3">
                <a href="/cricket/ipl/ipl-2021-sunrisers-hyderabad-all-rounder-jason-holder-arrives-in-chennai-101617607333193.html101617607333193">
                IPL 2021: Sunrisers Hyderabad all-rounder Jason Holder arrives in Chennai
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                ANI |
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 01:04 PM IST</div>
                </div>
                <div className="sortDec">IPL 2021: Holder will now remain in seven days of quarantine as per BCCI's SOPs before joining the squad.</div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617607333193"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cricket/ipl/ipl-2021-sunrisers-hyderabad-all-rounder-jason-holder-arrives-in-chennai-101617607333193.html" data-title="IPL 2021: Sunrisers Hyderabad all-rounder Jason Holder arrives in Chennai"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="cricket" data-vars-storyid="101617606287810" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cricket/ipl-2021-five-lowest-team-totals-in-ipl-history-101617606287810.html" data-vars-section="cricket" data-vars-orderid="3">
                <figure>
                <a href="/cricket/ipl-2021-five-lowest-team-totals-in-ipl-history-101617606287810.html101617606287810">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/kkr-m1_1617606622451_1617606631268.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="RCB recorded the lowest total in IPL history in 2017 against KKR.(IPL)" title="RCB recorded the lowest total in IPL history in 2017 against KKR.(IPL)" />
                </a>
                <figcaption>RCB recorded the lowest total in IPL history in 2017 against KKR.(IPL)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/cricket">cricket</a></div>
                <h2 className="hdg3">
                <a href="/cricket/ipl-2021-five-lowest-team-totals-in-ipl-history-101617606287810.html101617606287810">
                IPL 2021: 5 lowest team totals in IPL history
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By  <span>, New Delhi</span>
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 01:23 PM IST</div>
                </div>
                <div className="sortDec">So far in the IPL history, there have been 38 occasions when the teams have failed to cross the 100-run mark in an innings. Let's have a look at the five lowest team totals in the history of the IPL.</div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617606287810"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cricket/ipl-2021-five-lowest-team-totals-in-ipl-history-101617606287810.html" data-title="IPL 2021: 5 lowest team totals in IPL history"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="cricket" data-vars-storyid="101617589114806" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cricket/punjab-kings-pacer-ishan-porel-targets-royal-challengers-bangalore-captain-virat-kohli-wicket-in-ipl-2021-exclusive-101617589114806.html" data-vars-section="cricket" data-vars-orderid="4">
                <figure>
                <a href="/cricket/punjab-kings-pacer-ishan-porel-targets-royal-challengers-bangalore-captain-virat-kohli-wicket-in-ipl-2021-exclusive-101617589114806.html101617589114806">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/ishan-porel-insta_1617589363538_1617589386660.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Ishan Porel.(IPL)" title="Ishan Porel.(IPL)" />
                </a>
                <figcaption>Ishan Porel.(IPL)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/cricket">cricket</a></div>
                <h2 className="hdg3">
                <a href="/cricket/punjab-kings-pacer-ishan-porel-targets-royal-challengers-bangalore-captain-virat-kohli-wicket-in-ipl-2021-exclusive-101617589114806.html101617589114806">
                'He is No. 1 in all three formats': PBK's Porel targets 'dream wicket' of Kohli
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By Aditya Bhattacharya
                </div>
                <div className="dateTime">UPDATED ON APR 05, 2021 11:12 AM IST</div>
                </div>
                <div className="sortDec">IPL 2021: Originally, Ishan was one of the four net bowlers announced by the BCCI to travel with the Indian team for the long tour of Australia last year, but the stint was unfortunately cut short due to a hamstring injury he sustained.</div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617589114806"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cricket/punjab-kings-pacer-ishan-porel-targets-royal-challengers-bangalore-captain-virat-kohli-wicket-in-ipl-2021-exclusive-101617589114806.html" data-title="'He is No. 1 in all three formats': PBK's Porel targets 'dream wicket' of Kohli"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="cricket" data-vars-storyid="101617590815682" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cricket/simon-katich-speaks-on-royal-challengers-bangalore-15-crore-buy-kyle-jamieson-ahead-of-ipl-2021-101617590815682.html" data-vars-section="cricket" data-vars-orderid="5">
                <figure>
                <a href="/cricket/simon-katich-speaks-on-royal-challengers-bangalore-15-crore-buy-kyle-jamieson-ahead-of-ipl-2021-101617590815682.html101617590815682">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/DSC_0249_1617591016746_1617591042584.jfif" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Simon Katich at training session with RCB players.(Royal Challengers Bangalore (Website))" title="Simon Katich at training session with RCB players.(Royal Challengers Bangalore (Website))" />
                </a>
                <figcaption>Simon Katich at training session with RCB players.(Royal Challengers Bangalore (Website))</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/cricket">cricket</a></div>
                <h2 className="hdg3">
                <a href="/cricket/simon-katich-speaks-on-royal-challengers-bangalore-15-crore-buy-kyle-jamieson-ahead-of-ipl-2021-101617590815682.html101617590815682">
                'Exciting young talent': Katich optimistic about RCB's 15 crore buy in IPL 2021
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By  
                </div>
                <div className="dateTime">UPDATED ON APR 05, 2021 10:02 AM IST</div>
                </div>
                <div className="sortDec">IPL 2021: Standing at almost seven feet tall, Kyle Jamieson made his Test debut against India last year, and has been one of the top performers for New Zealand in the longest format of the game. But he lacks experience in the shortest format.</div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617590815682"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cricket/simon-katich-speaks-on-royal-challengers-bangalore-15-crore-buy-kyle-jamieson-ahead-of-ipl-2021-101617590815682.html" data-title="'Exciting young talent': Katich optimistic about RCB's 15 crore buy in IPL 2021"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="viewMoreButton">
                <a href="/cricket" data-id="viewmore_cricket,1" className="view">
                <span>View All</span>
                </a>
                </div>
                </section>
                <div className="dynamicExternalData"
                data-title="Healthshots"></div>
                <section className="worldSection sections ht-ad-holder">
                <div className="secHdg">
                <span className="hdgTexure"></span>
                <div className="hdgStyle">
                <span>[</span><h2>India News</h2><span>]</span>
                </div>
                </div>
                <div className="cartHolder page-view-candidate" data-vars-cardtype="india-news" data-vars-storyid="101617609673969" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/india-news/in-election-season-the-raids-are-back-against-opposition-leaders-101617609673969.html" data-vars-section="india news" data-vars-orderid="1">
                <figure>
                <a href="/india-news/in-election-season-the-raids-are-back-against-opposition-leaders-101617609673969.html101617609673969">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/ec02d22c-95e4-11eb-adee-e1690c080e42_1617609672927.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Representational." title="Representational." />
                </a>
                <figcaption>Representational image.</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10 pb10"><a href="/india-news">india news</a></div>
                <h3 className="hdg3">
                <a href="/india-news/in-election-season-the-raids-are-back-against-opposition-leaders-101617609673969.html101617609673969">
                In election season, the raids are back—against Opposition leaders</a>
                </h3>
                <div className="stroyPub">
                <div className="storyBy">
                By Neeraj Chauhan
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 01:31 PM IST</div>
                </div>
                <div className="sortDec">Opposition parties have repeatedly alleged that they are being targeted at the behest of Centre, a charge denied by the ruling party and Central agencies</div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617609673969"></span>
                <span className="share share-candidate" data-url="https://www.hindustantimes.com/india-news/in-election-season-the-raids-are-back-against-opposition-leaders-101617609673969.html" data-title="In election season, the raids are back—against Opposition leaders" title="share"></span>
                </div>
                <div className="readFull">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="india-news" data-vars-storyid="101617605489008" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/india-news/news-updates-from-hindustan-times-at-1-pm-zydus-cadila-seeks-dcgi-nod-for-covid-19-drug-and-all-the-latest-news-101617605489008.html" data-vars-section="india news" data-vars-orderid="2">
                <figure>
                <a href="/india-news/news-updates-from-hindustan-times-at-1-pm-zydus-cadila-seeks-dcgi-nod-for-covid-19-drug-and-all-the-latest-news-101617605489008.html101617605489008">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/27f292c8-92d8-11eb-b6ee-de865f0ae6d4_1617274436751_1617606231407.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Zydus Cadila on Monday announced it has sought national drugs controller’s approval for use of its viral hepatitis drug." title="Zydus Cadila on Monday announced it has sought national drugs controller’s approval for use of its viral hepatitis drug." />
                </a>
                <figcaption>Zydus Cadila on Monday announced it has sought national drugs controller’s approval for use of its viral hepatitis drug.</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/india-news">india news</a></div>
                <h2 className="hdg3">
                <a href="/india-news/news-updates-from-hindustan-times-at-1-pm-zydus-cadila-seeks-dcgi-nod-for-covid-19-drug-and-all-the-latest-news-101617605489008.html101617605489008">
                News updates from HT at 1 pm: Zydus Cadila seeks DCGI nod for Covid-19 drug
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By  <span>, Hindustan Times, New Delhi</span>
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 01:01 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>Here are today’s top news, analysis and opinion at 1 PM. Know all about the latest news and other news updates from Hindustan Times.</li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617605489008"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/india-news/news-updates-from-hindustan-times-at-1-pm-zydus-cadila-seeks-dcgi-nod-for-covid-19-drug-and-all-the-latest-news-101617605489008.html" data-title="News updates from HT at 1 pm: Zydus Cadila seeks DCGI nod for Covid-19 drug"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="india-news" data-vars-storyid="101617607574419" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html" data-vars-section="india news" data-vars-orderid="3">
                <figure>
                <a href="/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html101617607574419">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/b4d13a50-95df-11eb-be01-f1e853d0087a_1617607572912.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="External affairs minister S Jaishankar" title="External affairs minister S Jaishankar" />
                </a>
                <figcaption>External affairs minister S Jaishankar</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/india-news">india news</a></div>
                <h2 className="hdg3">
                <a href="/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html101617607574419">
                Amid rising Covid cases, Raisina Dialogue to go fully digital
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By   
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 12:56 PM IST</div>
                </div>
                <div className="sortDec">The Observer Research Foundation and the ministry, which jointly organise the Raisina Dialogue, had earlier planned to hold the event with limited in-person attendance of around 100 people, including foreign dignitaries, within a bubble in New Delhi. The event is scheduled for April 13-15</div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617607574419"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/india-news/amid-rising-covid-cases-raisina-dialogue-to-go-fully-digital-101617607574419.html" data-title="Amid rising Covid cases, Raisina Dialogue to go fully digital"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">

                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="india-news" data-vars-storyid="101617603469013" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/india-news/rajasthan-imposes-night-curfew-closure-of-multiplexes-check-new-guidelines-101617603469013.html" data-vars-section="india news" data-vars-orderid="4">
                <figure>
                <a href="/india-news/rajasthan-imposes-night-curfew-closure-of-multiplexes-check-new-guidelines-101617603469013.html101617603469013">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/20210401-DJP_HV-MN_Covid_Vaccine_For_Above_45_years__10_1617606513908_1617606525833.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Rajasthan on Sunday recorded 1,729 coronavirus disease cases and two deaths, taking the infection tally to 339,325." title="Rajasthan on Sunday recorded 1,729 coronavirus disease cases and two deaths, taking the infection tally to 339,325." />
                </a>
                <figcaption>Rajasthan on Sunday recorded 1,729 coronavirus disease cases and two deaths, taking the infection tally to 339,325.</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10">india news</div>
                <h2 className="hdg3">
                Rajasthan imposes night curfew, closure of multiplexes: Check new guidelines
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                By   | Written by Susmita Pakrasi<span>, Hindustan Times, New Delhi</span>
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 12:39 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>A special drive will be carried out to ensure the wearing of face masks, social distancing and standard operating procedure (SOPs). Special efforts will also be made to increase the vaccination numbers, the guidelines said.</li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617603469013"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/india-news/rajasthan-imposes-night-curfew-closure-of-multiplexes-check-new-guidelines-101617603469013.html" data-title="Rajasthan imposes night curfew, closure of multiplexes: Check new guidelines"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="viewMoreButton">
                <a href="/india-news" data-id="viewmore_india-news,1" className="view">
                <span>View All</span>
                </a>
                </div>
                </section>
                <section className="worldSection sections ht-ad-holder">
                <div className="secHdg">
                <span className="hdgTexure"></span>
                <div className="hdgStyle">
                <span>[</span><h2>World News</h2><span>]</span>
                </div>
                </div>
                <div className="cartHolder page-view-candidate" data-vars-cardtype="world-news" data-vars-storyid="101617610246899" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/world-news/bangladesh-ferry-accident-kills-at-least-26-101617610246899.html" data-vars-section="world news" data-vars-orderid="1">
                <figure>
                <a href="/world-news/bangladesh-ferry-accident-kills-at-least-26-101617610246899.html101617610246899">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/2021-04-05T075833Z_388902085_RC2JPM9FF3VK_RTRMADP_3_BANGLADESH-FERRY-ACCIDENT_1617610311238_1617610329634.JPG" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Rescue workers carry a body recovered from a ferry that collided with a cargo vessel and sank on Sunday in the Shitalakhsyaa River, in Narayanganj, Bangladesh, April 5, 2021. REUTERS/Mohammad Ponir Hossain(REUTERS)" title="Rescue workers carry a body recovered from a ferry that collided with a cargo vessel and sank on Sunday in the Shitalakhsyaa River, in Narayanganj, Bangladesh, April 5, 2021. REUTERS/Mohammad Ponir Hossain(REUTERS)" />
                </a>
                <figcaption>Rescue workers carry a body recovered from a ferry that collided with a cargo vessel and sank on Sunday in the Shitalakhsyaa River, in Narayanganj, Bangladesh, April 5, 2021. REUTERS/Mohammad Ponir Hossain(REUTERS)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10 pb10"><a href="/world-news">world news</a></div>
                <h3 className="hdg3">
                <a href="/world-news/bangladesh-ferry-accident-kills-at-least-26-101617610246899.html101617610246899">
                Bangladesh ferry accident kills at least 26</a>
                </h3>
                <div className="stroyPub">
                <div className="storyBy">
                Reuters | <span>, Dhaka</span>
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 01:42 PM IST</div>
                </div>
                <div className="sortDec">The boat was packed with people rushing to leave the city after the government announced a week-long nationwide lockdown from Monday to tackle a spike in Covid-19 cases.</div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617610246899"></span>
                <span className="share share-candidate" data-url="https://www.hindustantimes.com/world-news/bangladesh-ferry-accident-kills-at-least-26-101617610246899.html" data-title="Bangladesh ferry accident kills at least 26" title="share"></span>
                </div>
                <div className="readFull">

                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="world-news" data-vars-storyid="101617609208682" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/world-news/jordans-prince-hamzah-says-he-won-t-obey-orders-audio-recording-101617609208682.html" data-vars-section="world news" data-vars-orderid="2">
                <figure>
                <a href="/world-news/jordans-prince-hamzah-says-he-won-t-obey-orders-audio-recording-101617609208682.html101617609208682">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/AFP_97B7A8_1617609281752_1617609292827.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="In the file handout released by the Jordanian news agency Petra, Prince Hamza, half-brother of Jordan's King Abdullah, and his new wife Princess Basma Otoum are seen.(AFP)" title="In the file handout released by the Jordanian news agency Petra, Prince Hamza, half-brother of Jordan's King Abdullah, and his new wife Princess Basma Otoum are seen.(AFP)" />
                </a>
                <figcaption>In the file handout picture released by the Jordanian news agency Petra, Prince Hamza, half-brother of Jordan's King Abdullah, and his new wife Princess Basma Otoum are seen.(AFP)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/world-news">world news</a></div>
                <h2 className="hdg3">
                <a href="/world-news/jordans-prince-hamzah-says-he-won-t-obey-orders-audio-recording-101617609208682.html101617609208682">
                Jordan's Prince Hamzah says he won't obey orders: Audio recording
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                AFP |
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 01:26 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>"Of course I'm not going to obey when they say you can't go out, you can't tweet, you can't communicate with people," he said in an audio recording posted on Twitter late Sunday.</li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617609208682"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/world-news/jordans-prince-hamzah-says-he-won-t-obey-orders-audio-recording-101617609208682.html" data-title="Jordan's Prince Hamzah says he won't obey orders: Audio recording"></span>
                </div>
                <div className="viewAll">

                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">




                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="world-news" data-vars-storyid="101617586216107" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/world-news/venezuela-to-ask-un-for-help-in-clearing-land-mines-near-colombian-border-101617586216107.html" data-vars-section="world news" data-vars-orderid="3">
                <figure>
                <a href="/world-news/venezuela-to-ask-un-for-help-in-clearing-land-mines-near-colombian-border-101617586216107.html101617586216107">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/2021-04-04T234213Z_1_LYNXMPEH330GP_RTROPTP_3_VENEZUELA-USA-TRUMP_1617608010423_1617608109825.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Venezuela's President Nicolas Maduro (Reuters)" title="Venezuela's President Nicolas Maduro (Reuters)" />
                </a>
                <figcaption>Venezuela's President Nicolas Maduro (Reuters)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/world-news">world news</a></div>
                <h2 className="hdg3">
                <a href="/world-news/venezuela-to-ask-un-for-help-in-clearing-land-mines-near-colombian-border-101617586216107.html101617586216107">
                Venezuela to ask UN for help in clearing land mines near Colombian border
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                Reuters |
                </div>
                <div className="dateTime">PUBLISHED ON APR 05, 2021 01:05 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>Maduro's government on Thursday said two soldiers were killed by a land mine during military operations in the state of Apure, where clashes between soldiers and armed groups has led thousands of Venezuelans to flee across the border.</li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617586216107"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/world-news/venezuela-to-ask-un-for-help-in-clearing-land-mines-near-colombian-border-101617586216107.html" data-title="Venezuela to ask UN for help in clearing land mines near Colombian border"></span>
                </div>
                <div className="viewAll">

                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">




                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="cartHolder page-view-candidate listView" data-vars-cardtype="world-news" data-vars-storyid="101617602567723" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/world-news/israel-pm-s-trial-resumes-as-parties-weigh-in-on-his-fate-101617602567723.html" data-vars-section="world news" data-vars-orderid="4">
                <figure>
                <a href="/world-news/israel-pm-s-trial-resumes-as-parties-weigh-in-on-his-fate-101617602567723.html101617602567723">
                <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/AFP_96L9GG_1617605070181_1617605148448.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Israeli Prime Minister Benjamin Netanyahu(AFP)" title="Israeli Prime Minister Benjamin Netanyahu(AFP)" />
                </a>
                <figcaption>Israeli Prime Minister Benjamin Netanyahu(AFP)</figcaption>
                </figure>
                <div className="storyShortDetail">
                <div className="catName pt10"><a href="/world-news">world news</a></div>
                <h2 className="hdg3">
                <a href="/world-news/israel-pm-s-trial-resumes-as-parties-weigh-in-on-his-fate-101617602567723.html101617602567723">
                Israel PM Netanyahu's trial resumes as parties weigh in on his fate
                </a>
                </h2>
                <div className="stroyPub">
                <div className="storyBy">
                AP |
                </div>
                <div className="dateTime">UPDATED ON APR 05, 2021 12:16 PM IST</div>
                </div>
                <div className="sortDec"><ul><li>Netanyahu is Israel's longest-serving prime minister and has clung to power through four hard-fought elections in less than two years, even as he has faced allegations of bribery, fraud and breach of trust. </li></ul></div>
                <div className="actionDiv">
                <div className="socialEl">
                <span className="bookmark bookmark-candidate" title="bookmark101617602567723"></span>
                <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/world-news/israel-pm-s-trial-resumes-as-parties-weigh-in-on-his-fate-101617602567723.html" data-title="Israel PM Netanyahu's trial resumes as parties weigh in on his fate"></span>
                </div>
                <div className="viewAll">
                </div>
                </div>
                </div>
                <div className="storyDetails">
                <div className="detail" data-id="storyDetail">
                </div>
                </div>
                <div className="shareSticky">
                <div className="fontResize"><span className="increase"></span></div>
                <div className="share-bookmark">
                </div>
                </div>
                <div className="ajaxLoaderList hide"></div>
                </div>
                <div className="recommended"></div>
                <div className="viewMoreButton">
                <a href="/world-news" data-id="viewmore_world-news,1" className="view">
                </a>
                </div>
                </section>

                </section>
            </section>
        </div>
    )
}

export default Mercedes

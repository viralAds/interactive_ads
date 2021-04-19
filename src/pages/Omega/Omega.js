import { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import ReactPlayer from 'react-player';
import { Container } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import './Omega.scss';
import '../Mercedes/ad.scss';
import '../Mercedes/Mercedes.scss';


import video from '../../assets/omega.mp4'; 
import astroImg from '../../assets/img/astroImg.jpeg';
import chronograph from '../../assets/img/chronograph.jpeg';
import watch from '../../assets/img/watch.jpeg';
import astro from '../../assets/astronaut.png';
import clock from '../../assets/clock.png';
import swipe from '../../assets/know_more.png';

// import Navbar from '../Navbar/Navbar';

function Omega() {
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
        setToggleFirstAnimationBox(false);
        setToggleSecondAnimationBox(false);
        setToggleThirdAnimationBox(true);
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
        <section className="mainContainer" id="dataHolder" data-url="/" data-title="News Headlines, English News, Today Headlines, Top Stories" data-story-section="home">
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
                            { toggleFirstAnimationBox && <div className="first poster" data-aos={"slide-left"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <img src={astroImg} alt="astroImg" />
                                    <DoubleArrowIcon className="back-arrow" onClick={closeAnimation} /> 
                                    </div> 
                            }

                            { toggleSecondAnimationBox && <div className="first poster" data-aos={"slide-up"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    style={{    display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                    <a href="https://www.omegawatches.com/watches/speedmaster/moonwatch-professional/product"
                                        target="_blank" rel="noreferrer"
                                        style={{ position: "absolute"}}
                                        className="btn-knowmore"
                                        data-aos={"slide-up"} 
                                        data-aos-delay="600"
                                        data-aos-mirror='false'
                                        data-aos-duration="900"
                                        data-aos-easing="ease-out"
                                        >KNOW MORE
                                    </a>
                                    <img src={watch} alt="watch" />
                                    <DoubleArrowIcon className="back-arrow" onClick={closeAnimation} />
                                    </div> 
                            }

                            { toggleThirdAnimationBox && <div className="first poster" data-aos={"slide-right"} 
                                    data-aos-delay="100"
                                    data-aos-mirror='false'
                                    data-aos-duration="900"
                                    data-aos-easing="ease-out"
                                    >
                                    <img src={chronograph} alt="chronograph"/>
                                    <DoubleArrowIcon className="back-arrow" onClick={closeAnimation} />
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
                                <img onClick={firstAnim} src={astro} alt="astro"/>
                                <img onClick={secondAnim} src={swipe} alt="swipe"/>
                                <img onClick={thirdAnim} src={clock} alt="clock"/>
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
            <div className="epaper-ad align-center mb20"></div>
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
            data-title="HT Auto"></div>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Trending</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="trending" data-vars-storyid="101617603078934" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/trending/monday-motivation-post-featuring-specially-abled-woman-s-work-out-session-may-inspire-you-101617603078934.html" data-vars-section="trending" data-vars-orderid="1">
            <figure>
            <a href="/trending/monday-motivation-post-featuring-specially-abled-woman-s-work-out-session-may-inspire-you-101617603078934.html101617603078934">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/you_1617603552318_1617603570753.png" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="shows a woman working out.(Twitter@PriyankaJShukla)" title="shows a woman working out.(Twitter@PriyankaJShukla)" />
            </a>
            <figcaption>shows a woman working out.(Twitter@PriyankaJShukla)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/trending">trending</a></div>
            <h3 className="hdg3">
            <a href="/trending/monday-motivation-post-featuring-specially-abled-woman-s-work-out-session-may-inspire-you-101617603078934.html101617603078934">
            Video featuring specially-abled woman’s work out session may inspire you</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            By Srimoyee Chowdhury
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:50 AM IST</div>
            </div>
            <div className="sortDec">While some resonated with the powerful caption shared alongside the clip, others couldn’t stop lauding the woman’s never-give-up attitude.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617603078934"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/trending/monday-motivation-post-featuring-specially-abled-woman-s-work-out-session-may-inspire-you-101617603078934.html" data-title="Video featuring specially-abled woman’s work out session may inspire you" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="trending" data-vars-storyid="101617600452609" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/trending/former-school-teacher-battles-to-save-indonesia-s-mangroves-101617600452609.html" data-vars-section="trending" data-vars-orderid="2">
            <figure>
            <a href="/trending/former-school-teacher-battles-to-save-indonesia-s-mangroves-101617600452609.html101617600452609">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/2021-04-05T010732Z_1_LYNXMPEH3401J_RTROPTP_3_INDONESIA-ENVIRONMENT-MANGROVE_1617600570782_1617600587304.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Samsudin, 50, wearing a rhino-hat holds cupboard puppets depicting Indonesia's endemic primates orangutan and long tail monkey, while performing fairy tales for the local children in Indramayu regency, West Java province, Indonesia.(REUTERS)" title="Samsudin, 50, wearing a rhino-hat holds cupboard puppets depicting Indonesia's endemic primates orangutan and long tail monkey, while performing fairy tales for the local children in Indramayu regency, West Java province, Indonesia.(REUTERS)" />
            </a>
            <figcaption>Samsudin, 50, wearing a rhino-hat holds cupboard puppets depicting Indonesia's endemic primates orangutan and long tail monkey, while performing fairy tales for the local children in Indramayu regency, West Java province, Indonesia.(REUTERS)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/trending">trending</a></div>
            <h2 className="hdg3">
            <a href="/trending/former-school-teacher-battles-to-save-indonesia-s-mangroves-101617600452609.html101617600452609">
            Former school teacher battles to save Indonesia's mangroves
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            Reuters |
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:01 AM IST</div>
            </div>
            <div className="sortDec">Samsudin teaches local children aged 11 to 15 three times a week about how to look after the environment, sometimes illustrating it with puppets of monkeys and orangutans.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617600452609"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/trending/former-school-teacher-battles-to-save-indonesia-s-mangroves-101617600452609.html" data-title="Former school teacher battles to save Indonesia's mangroves"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="trending" data-vars-storyid="101617599258906" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/trending/video-featuring-adorable-doggo-siblings-are-reminding-netizens-of-theirs-101617599258906.html" data-vars-section="trending" data-vars-orderid="3">
            <figure>
            <a href="/trending/video-featuring-adorable-doggo-siblings-are-reminding-netizens-of-theirs-101617599258906.html101617599258906">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/doggg_1617599646560_1617599662734.png" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="shows Xena and Finn, the doggo siblings.(Instagram/@goldengirl_xena)" title="shows Xena and Finn, the doggo siblings.(Instagram/@goldengirl_xena)" />
            </a>
            <figcaption>shows Xena and Finn, the doggo siblings.(Instagram/@goldengirl_xena)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/trending">trending</a></div>
            <h2 className="hdg3">
            <a href="/trending/video-featuring-adorable-doggo-siblings-are-reminding-netizens-of-theirs-101617599258906.html101617599258906">
            Video featuring adorable doggo siblings are reminding netizens of theirs
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Srimoyee Chowdhury
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 10:45 AM IST</div>
            </div>
            <div className="sortDec">“When you realize you never even asked for a little brother,” joked an Instagram user.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617599258906"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/trending/video-featuring-adorable-doggo-siblings-are-reminding-netizens-of-theirs-101617599258906.html" data-title="Video featuring adorable doggo siblings are reminding netizens of theirs"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="trending" data-vars-storyid="101617565520878" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/trending/no-petting-doggo-refuses-dad-s-pets-leaves-netizens-in-splits-101617565520878.html" data-vars-section="trending" data-vars-orderid="4">
            <figure>
            <a href="/trending/no-petting-doggo-refuses-dad-s-pets-leaves-netizens-in-splits-101617565520878.html101617565520878">
            <img data-src="https://images.hindustantimes.com/img/2021/04/04/550x309/roo_1617565620701_1617565634134.png" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="shows Skye the doggo.(Instagram/@lifewithkleekai)" title="shows Skye the doggo.(Instagram/@lifewithkleekai)" />
            </a>
            <figcaption>shows Skye the doggo.(Instagram/@lifewithkleekai)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/trending">trending</a></div>
            <h2 className="hdg3">
            <a href="/trending/no-petting-doggo-refuses-dad-s-pets-leaves-netizens-in-splits-101617565520878.html101617565520878">
            ‘No petting!’: Doggo refuses dad’s pets, leaves netizens in splits
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Srimoyee Chowdhury
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:18 AM IST</div>
            </div>
            <div className="sortDec">The video shows Skye running away from her dad as he tries to pet her.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617565520878"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/trending/no-petting-doggo-refuses-dad-s-pets-leaves-netizens-in-splits-101617565520878.html" data-title="‘No petting!’: Doggo refuses dad’s pets, leaves netizens in splits"></span>
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
            <a href="/trending" data-id="viewmore_trending,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>HT Exclusive</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="ht-exclusive" data-vars-storyid="101617563111487" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/india-news/sabarimala-to-bjp-key-factors-at-play-in-kerala-101617563111487.html" data-vars-section="kerala assembly election" data-vars-orderid="1">
            <figure>
            <a href="/india-news/sabarimala-to-bjp-key-factors-at-play-in-kerala-101617563111487.html101617563111487">
            <img data-src="https://images.hindustantimes.com/img/2021/04/04/550x309/20210325_FVN_Kerala-07_1617568100517_1617568125902.JPG" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="A large cutout of Pinarayi Vijayan in Pinarayi Village ahead of the Kerala Assembly election, in Kannur District, Kerala." title="A large cutout of Pinarayi Vijayan in Pinarayi Village ahead of the Kerala Assembly election, in Kannur District, Kerala." />
            </a>
            <figcaption>A large cutout of Pinarayi Vijayan in Pinarayi Village ahead of the Kerala Assembly election, in Kannur District, Kerala.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/elections/kerala-assembly-election">kerala assembly election</a></div>
            <h3 className="hdg3">
            <a href="/india-news/sabarimala-to-bjp-key-factors-at-play-in-kerala-101617563111487.html101617563111487">
            Sabarimala to BJP: Key factors at play in Kerala</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            By By Abhishek Jha<span>, New Delhi</span>
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 04:56 AM IST</div>
            </div>
            <div className="sortDec">What has made these elections more unpredictable is the LDF’s strong comeback in the local body polls held in December 2020, where it won a majority of seats at all levels.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617563111487"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/india-news/sabarimala-to-bjp-key-factors-at-play-in-kerala-101617563111487.html" data-title="Sabarimala to BJP: Key factors at play in Kerala" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="ht-exclusive" data-vars-storyid="101617562365172" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/elections/tamil-nadu-assembly-election/tamil-nadu-an-election-that-is-stalin-s-to-lose-101617562365172.html" data-vars-section="tamil nadu assembly election" data-vars-orderid="2">
            <figure>
            <a href="/elections/tamil-nadu-assembly-election/tamil-nadu-an-election-that-is-stalin-s-to-lose-101617562365172.html101617562365172">
            <img data-src="https://images.hindustantimes.com/img/2021/04/04/550x309/AFP_94Z94V_1617562631567_1617562647172.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Members of Dravida Munnetra Kazhagam (DMK) hold placards with portrait of party president MK Stalin during a rally ahead of the Tamil Nadu state legislative assembly elections in Chennai.(AFP)" title="Members of Dravida Munnetra Kazhagam (DMK) hold placards with portrait of party president MK Stalin during a rally ahead of the Tamil Nadu state legislative assembly elections in Chennai.(AFP)" />
            </a>
            <figcaption>Members of Dravida Munnetra Kazhagam (DMK) hold placards with portrait of party president MK Stalin during a rally ahead of the Tamil Nadu state legislative assembly elections in Chennai.(AFP)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/elections/tamil-nadu-assembly-election">tamil nadu assembly election</a></div>
            <h2 className="hdg3">
            <a href="/elections/tamil-nadu-assembly-election/tamil-nadu-an-election-that-is-stalin-s-to-lose-101617562365172.html101617562365172">
            Tamil Nadu: An election that is Stalin's to lose
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By, Abhishek Jha
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 08:54 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>The only person to have retained the chief minister’s post in back-to-back elections in Tamil Nadu before 2016 was Jayalalithaa’s mentor M G Ramachandran.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617562365172"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/elections/tamil-nadu-assembly-election/tamil-nadu-an-election-that-is-stalin-s-to-lose-101617562365172.html" data-title="Tamil Nadu: An election that is Stalin's to lose"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="ht-exclusive" data-vars-storyid="101617367623859" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/elections/tamil-nadu-assembly-election/for-ammk-s-dhinakaran-a-battle-for-political-survival-101617367623859.html" data-vars-section="tamil nadu assembly election" data-vars-orderid="3">
            <figure>
            <a href="/elections/tamil-nadu-assembly-election/for-ammk-s-dhinakaran-a-battle-for-political-survival-101617367623859.html101617367623859">
            <img data-src="https://images.hindustantimes.com/img/2021/04/02/550x309/255fc45c-93b1-11eb-b10b-5920a68d5cf2_1617367622850.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Amma Makkal Munnetra Kazhagam (AMMK) general secretary TTV Dhinakaran files his nomination from Kovilpatti assembly constituency for upcoming elections. (PTI)" title="Amma Makkal Munnetra Kazhagam (AMMK) general secretary TTV Dhinakaran files his nomination from Kovilpatti assembly constituency for upcoming elections. (PTI)" />
            </a>
            <figcaption>Amma Makkal Munnetra Kazhagam (AMMK) general secretary TTV Dhinakaran files his nomination from Kovilpatti assembly constituency for upcoming elections. (PTI)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/elections/tamil-nadu-assembly-election">tamil nadu assembly election</a></div>
            <h2 className="hdg3">
            <a href="/elections/tamil-nadu-assembly-election/for-ammk-s-dhinakaran-a-battle-for-political-survival-101617367623859.html101617367623859">
            For AMMK’s Dhinakaran, a battle for political survival
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Divya Chandrababu
            </div>
            <div className="dateTime">PUBLISHED ON APR 02, 2021 06:17 PM IST</div>
            </div>
            <div className="sortDec">Years after ruling AIADMK expelled him from the party, the AMMK’s chief ministerial candidate is hoping to overcome the outsider tag in Kovilpatti</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617367623859"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/elections/tamil-nadu-assembly-election/for-ammk-s-dhinakaran-a-battle-for-political-survival-101617367623859.html" data-title="For AMMK’s Dhinakaran, a battle for political survival"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="ht-exclusive" data-vars-storyid="101617367023781" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/india-news/indias-myanmar-policy-won-t-work-it-s-time-to-diversify-engagement-101617367023781.html" data-vars-section="india news" data-vars-orderid="4">
            <figure>
            <a href="/india-news/indias-myanmar-policy-won-t-work-it-s-time-to-diversify-engagement-101617367023781.html101617367023781">
            <img data-src="https://images.hindustantimes.com/img/2021/04/02/550x309/cd760cd4-93af-11eb-b10b-5920a68d5cf2_1617367022648.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Representational. (AFP)" title="Representational. (AFP)" />
            </a>
            <figcaption>Representational image. (AFP)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/india-news">india news</a></div>
            <h2 className="hdg3">
            <a href="/india-news/indias-myanmar-policy-won-t-work-it-s-time-to-diversify-engagement-101617367023781.html101617367023781">
            India’s Myanmar policy won’t work; it’s time to diversify engagement
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Avinash Paliwal
            </div>
            <div className="dateTime">UPDATED ON APR 02, 2021 10:20 PM IST</div>
            </div>
            <div className="sortDec">The Civil Disobedience Movement bluntly asked: Why did India “shake hands with the generals whose hands are soaked with our blood?” This is an important and urgent question</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617367023781"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/india-news/indias-myanmar-policy-won-t-work-it-s-time-to-diversify-engagement-101617367023781.html" data-title="India’s Myanmar policy won’t work; it’s time to diversify engagement"></span>
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
            </div>
            </section>
            <div className="dynamicExternalData"
            data-title="HT Tech"></div>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Entertainment </h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="entertainment" data-vars-storyid="101617604665707" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/step-inside-karan-johar-s-swanky-penthouse-with-sprawling-terrace-designed-by-gauri-khan-and-opulent-closet-101617604665707.html" data-vars-section="bollywood" data-vars-orderid="1">
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617609554007" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/tv/rupali-ganguly-aisa-birthday-yaadgar-rahega-101617609554007.html" data-vars-section="tv" data-vars-orderid="2">
            <figure>
            <a href="/entertainment/tv/rupali-ganguly-aisa-birthday-yaadgar-rahega-101617609554007.html101617609554007">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/cd163962-950d-11eb-b10b-5920a68d5cf2_1617609552964.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Actor Rupali Ganguly, who recently tested Covid positive, will celebrate her birthday on a zoom call with hubby and son." title="Actor Rupali Ganguly, who recently tested Covid positive, will celebrate her birthday on a zoom call with hubby and son." />
            </a>
            <figcaption>Actor Rupali Ganguly, who recently tested Covid positive, will celebrate her birthday on a zoom call with hubby and son.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/tv">tv</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/tv/rupali-ganguly-aisa-birthday-yaadgar-rahega-101617609554007.html101617609554007">
            Rupali Ganguly: Aisa birthday yaadgar rahega
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Naina Arora<span>, New Delhi</span>
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:29 PM IST</div>
            </div>
            <div className="sortDec">The Anupamaa fame actor had plans to celebrate her birthday in Alibaug, but after testing Covid positive decided to cut her birthday cake on a zoom call with her husband and son.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617609554007"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/tv/rupali-ganguly-aisa-birthday-yaadgar-rahega-101617609554007.html" data-title="Rupali Ganguly: Aisa birthday yaadgar rahega"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617607012737" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/tv/taarak-mehta-ko-ooltah-chashmah-director-responds-to-disgruntled-fan-who-called-the-show-terrible-101617607012737.html" data-vars-section="tv" data-vars-orderid="3">
            <figure>
            <a href="/entertainment/tv/taarak-mehta-ko-ooltah-chashmah-director-responds-to-disgruntled-fan-who-called-the-show-terrible-101617607012737.html101617607012737">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/_bf788dfc-33e0-11eb-9c97-4dbf0d0924a0_1617607440814.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Taarak Mehta Ka Ooltah Chashmah was the most popular show 2020, according to Yahoo." title="Taarak Mehta Ka Ooltah Chashmah was the most popular show 2020, according to Yahoo." />
            </a>
            <figcaption>Taarak Mehta Ka Ooltah Chashmah was the most popular show 2020, according to Yahoo.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/tv">tv</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/tv/taarak-mehta-ko-ooltah-chashmah-director-responds-to-disgruntled-fan-who-called-the-show-terrible-101617607012737.html101617607012737">
            Taarak Mehta director responds to disgruntled fan who called the show 'terrible'
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:02 PM IST</div>
            </div>
            <div className="sortDec"><ul><li>Taarak Mehta Ko Ooltah Chashmah director Malav Rajda has responded to a disgruntled fan's complaints about the show being 'terrible'.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617607012737"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/tv/taarak-mehta-ko-ooltah-chashmah-director-responds-to-disgruntled-fan-who-called-the-show-terrible-101617607012737.html" data-title="Taarak Mehta director responds to disgruntled fan who called the show 'terrible'"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617604838893" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/madhuri-dixit-goes-snorkelling-and-binges-on-cheat-meal-in-the-maldives-but-is-concerned-about-mumbai-watch-101617604838893.html" data-vars-section="bollywood" data-vars-orderid="4">
            <figure>
            <a href="/entertainment/bollywood/madhuri-dixit-goes-snorkelling-and-binges-on-cheat-meal-in-the-maldives-but-is-concerned-about-mumbai-watch-101617604838893.html101617604838893">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/madhru_1617605670149_1617605680061.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Madhuri Dixit was in the Maldives." title="Madhuri Dixit was in the Maldives." />
            </a>
            <figcaption>Madhuri Dixit was in the Maldives.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/bollywood">bollywood</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/bollywood/madhuri-dixit-goes-snorkelling-and-binges-on-cheat-meal-in-the-maldives-but-is-concerned-about-mumbai-watch-101617604838893.html101617604838893">
            Madhuri goes snorkelling and binges on 'cheat meal' in the Maldives, see new pic
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 12:56 PM IST</div>
            </div>
            <div className="sortDec"><ul><li>Actor Madhuri Dixit on Sunday shared a video after a snorkelling session in the Maldives. The actor and her family have since returned to Mumbai.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617604838893"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/bollywood/madhuri-dixit-goes-snorkelling-and-binges-on-cheat-meal-in-the-maldives-but-is-concerned-about-mumbai-watch-101617604838893.html" data-title="Madhuri goes snorkelling and binges on 'cheat meal' in the Maldives, see new pic"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617604637066" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/vicky-kaushal-tests-positive-for-covid-19-in-home-quarantine-101617604637066.html" data-vars-section="bollywood" data-vars-orderid="5">
            <figure>
            <a href="/entertainment/bollywood/vicky-kaushal-tests-positive-for-covid-19-in-home-quarantine-101617604637066.html101617604637066">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/163551255_867000133846097_1796374144944810946_n_1617604811039_1617604824336.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Vicky Kaushal has tested positive for Covid-19." title="Vicky Kaushal has tested positive for Covid-19." />
            </a>
            <figcaption>Vicky Kaushal has tested positive for Covid-19.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/bollywood">bollywood</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/bollywood/vicky-kaushal-tests-positive-for-covid-19-in-home-quarantine-101617604637066.html101617604637066">
            Vicky Kaushal tests positive for Covid-19, in home quarantine
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 12:16 PM IST</div>
            </div>
            <div className="sortDec"><ul><li>Vicky Kaushal is the latest in a long line of Bollywood celebrities to have tested positive for Covid-19, amid the second wave of the pandemic in India.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617604637066"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/bollywood/vicky-kaushal-tests-positive-for-covid-19-in-home-quarantine-101617604637066.html" data-title="Vicky Kaushal tests positive for Covid-19, in home quarantine"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617602546805" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/when-ranbir-kapoor-snapped-at-anushka-sharma-for-slapping-him-during-a-scene-i-told-you-not-to-do-it-101617602546805.html" data-vars-section="bollywood" data-vars-orderid="6">
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617602331969" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/bhumi-pednekar-tests-positive-for-covid-19-says-she-has-mild-symptoms-101617602331969.html" data-vars-section="bollywood" data-vars-orderid="7">
            <figure>
            <a href="/entertainment/bollywood/bhumi-pednekar-tests-positive-for-covid-19-says-she-has-mild-symptoms-101617602331969.html101617602331969">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/166983922_120435400064433_2503560733081196126_n_1617602375504_1617602391617.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Bhumi Pednekar is the latest Bollywood celebrity to test positive for Covid-19." title="Bhumi Pednekar is the latest Bollywood celebrity to test positive for Covid-19." />
            </a>
            <figcaption>Bhumi Pednekar is the latest Bollywood celebrity to test positive for Covid-19.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/bollywood">bollywood</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/bollywood/bhumi-pednekar-tests-positive-for-covid-19-says-she-has-mild-symptoms-101617602331969.html101617602331969">
            Bhumi tests Covid-19 positive, Kartik 'passes the baton' to her as he recovers
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 11:57 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Bhumi Pednekar took to Instagram to announce that she has tested positive for Covid-19, despite taking ‘utmost precaution and care’. She urged everyone to take the virus seriously.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617602331969"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/bollywood/bhumi-pednekar-tests-positive-for-covid-19-says-she-has-mild-symptoms-101617602331969.html" data-title="Bhumi tests Covid-19 positive, Kartik 'passes the baton' to her as he recovers"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617600497849" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/deepika-padukone-s-futuristic-video-is-out-of-this-world-fans-cannot-get-over-her-perfect-legs-101617600497849.html" data-vars-section="bollywood" data-vars-orderid="8">
            <figure>
            <a href="/entertainment/bollywood/deepika-padukone-s-futuristic-video-is-out-of-this-world-fans-cannot-get-over-her-perfect-legs-101617600497849.html101617600497849">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/deepika_1617600853613_1617600870304.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Deepika Padukone used cool special effects in a new video posted on Instagram." title="Deepika Padukone used cool special effects in a new video posted on Instagram." />
            </a>
            <figcaption>Deepika Padukone used cool special effects in a new video posted on Instagram.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/bollywood">bollywood</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/bollywood/deepika-padukone-s-futuristic-video-is-out-of-this-world-fans-cannot-get-over-her-perfect-legs-101617600497849.html101617600497849">
            Deepika’s new video is ‘out of this world’, fans can’t get over ‘perfect’ legs
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:33 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Deepika Padukone shared a cool new video on Instagram Reels, with a bunch of special effects. She called her new post ‘out of this world’.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617600497849"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/bollywood/deepika-padukone-s-futuristic-video-is-out-of-this-world-fans-cannot-get-over-her-perfect-legs-101617600497849.html" data-title="Deepika’s new video is ‘out of this world’, fans can’t get over ‘perfect’ legs"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617599906502" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/rhea-chakraborty-brother-showik-spotted-outside-ncb-office-see-pics-101617599906502.html" data-vars-section="bollywood" data-vars-orderid="9">
            <figure>
            <a href="/entertainment/bollywood/rhea-chakraborty-brother-showik-spotted-outside-ncb-office-see-pics-101617599906502.html101617599906502">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/WhatsApp_Image_2021-04-05_at_10.37.44_(1)_1617601514037_1617601542865.jpeg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Rhea Chakraborty and Showik Chakraborty outside NCB office on Monday." title="Rhea Chakraborty and Showik Chakraborty outside NCB office on Monday." />
            </a>
            <figcaption>Rhea Chakraborty and Showik Chakraborty outside NCB office on Monday.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/bollywood">bollywood</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/bollywood/rhea-chakraborty-brother-showik-spotted-outside-ncb-office-see-pics-101617599906502.html101617599906502">
            Rhea Chakraborty, brother Showik spotted outside NCB office. See pictures
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:30 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Actor Rhea Chakraborty and her brother Showik were seen at the Narcotics Control Bureau office in Mumbai. See pictures here.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617599906502"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/bollywood/rhea-chakraborty-brother-showik-spotted-outside-ncb-office-see-pics-101617599906502.html" data-title="Rhea Chakraborty, brother Showik spotted outside NCB office. See pictures"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="entertainment" data-vars-storyid="101617597736177" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/bollywood/dia-mirza-expecting-first-child-with-vaibhav-rekhi-twirls-in-the-sun-in-first-post-after-pregnancy-announcement-watch-101617597736177.html" data-vars-section="bollywood" data-vars-orderid="10">
            <figure>
            <a href="/entertainment/bollywood/dia-mirza-expecting-first-child-with-vaibhav-rekhi-twirls-in-the-sun-in-first-post-after-pregnancy-announcement-watch-101617597736177.html101617597736177">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/dia_1617599267800_1617599276198.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Dia Mirza recently announced her pregnancy." title="Dia Mirza recently announced her pregnancy." />
            </a>
            <figcaption>Dia Mirza recently announced her pregnancy.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/bollywood">bollywood</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/bollywood/dia-mirza-expecting-first-child-with-vaibhav-rekhi-twirls-in-the-sun-in-first-post-after-pregnancy-announcement-watch-101617597736177.html101617597736177">
            Dia Mirza, expecting first child with Vaibhav Rekhi, twirls in the sun. Watch
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 10:47 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Actor Dia Mirza has shared her first social media post after announcing that she is expecting her first child with husband Vaibhav Rekhi. Watch her new video here.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617597736177"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/bollywood/dia-mirza-expecting-first-child-with-vaibhav-rekhi-twirls-in-the-sun-in-first-post-after-pregnancy-announcement-watch-101617597736177.html" data-title="Dia Mirza, expecting first child with Vaibhav Rekhi, twirls in the sun. Watch"></span>
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
            <a href="/entertainment" data-id="viewmore_entertainment,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Lifestyle</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="lifestyle" data-vars-storyid="101617597864631" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/lifestyle/health/how-infant-antibiotic-exposure-affects-future-immune-responses-to-allergies-101617597864631.html" data-vars-section="health" data-vars-orderid="1">
            <figure>
            <a href="/lifestyle/health/how-infant-antibiotic-exposure-affects-future-immune-responses-to-allergies-101617597864631.html101617597864631">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/photo-1491013516836-7db643ee125a_1617608843476_1617608848828.jfif" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Representational" title="Representational" />
            </a>
            <figcaption>Representational</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/lifestyle/health">health</a></div>
            <h3 className="hdg3">
            <a href="/lifestyle/health/how-infant-antibiotic-exposure-affects-future-immune-responses-to-allergies-101617597864631.html101617597864631">
            How infant antibiotic exposure affects future immune responses to allergies</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            ANI | <span>, Washington Dc</span>
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:19 PM IST</div>
            </div>
            <div className="sortDec">The study looked at fetal and newborn exposure to antibiotics through the mother in the weeks immediately preceding and after birth, the time when microbial communities assemble and are prone to disruptions, to investigate how this reduction in beneficial bacteria affects neonatal immune system development.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617597864631"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/lifestyle/health/how-infant-antibiotic-exposure-affects-future-immune-responses-to-allergies-101617597864631.html" data-title="How infant antibiotic exposure affects future immune responses to allergies" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="lifestyle" data-vars-storyid="101617608775267" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/lifestyle/fashion/summer-bride-embraces-the-age-old-ghoonghat-101617608775267.html" data-vars-section="fashion" data-vars-orderid="2">
            <figure>
            <a href="/lifestyle/fashion/summer-bride-embraces-the-age-old-ghoonghat-101617608775267.html101617608775267">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/df1af0fa-95e2-11eb-aa45-8ea8997513f9_1617608774347.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Manish Malhotra’s ivory georgette kalidar is layered with a handcrafted veil (: Instagram/ManishMalhotraWorld)" title="Manish Malhotra’s ivory georgette kalidar is layered with a handcrafted veil (: Instagram/ManishMalhotraWorld)" />
            </a>
            <figcaption>Manish Malhotra’s ivory georgette kalidar is layered with a handcrafted veil (Photo: Instagram/ManishMalhotraWorld)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/lifestyle/fashion">fashion</a></div>
            <h2 className="hdg3">
            <a href="/lifestyle/fashion/summer-bride-embraces-the-age-old-ghoonghat-101617608775267.html101617608775267">
            Summer bride embraces the age-old ghoonghat 
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Manish Mishra
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 01:16 PM IST</div>
            </div>
            <div className="sortDec">Ghoonghat got a new focus all thanks to Priyanka Chopra Jonas, who opted for a red sheer veiled Sabyasachi ensemble at her wedding</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617608775267"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/lifestyle/fashion/summer-bride-embraces-the-age-old-ghoonghat-101617608775267.html" data-title="Summer bride embraces the age-old ghoonghat "></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="lifestyle" data-vars-storyid="101617597944270" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/lifestyle/health/healthy-diet-exercise-might-be-key-to-achieving-optimal-health-in-later-years-101617597944270.html" data-vars-section="health" data-vars-orderid="3">
            <figure>
            <a href="/lifestyle/health/healthy-diet-exercise-might-be-key-to-achieving-optimal-health-in-later-years-101617597944270.html101617597944270">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/photo-1579722820903-01d3e776f85e_1617607796574_1617607804013.jfif" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="A healthy diet and a regular exercise schedule can help avoid the development of numerous chronic health conditions in the present and in later life too.(Unsplash)" title="A healthy diet and a regular exercise schedule can help avoid the development of numerous chronic health conditions in the present and in later life too.(Unsplash)" />
            </a>
            <figcaption>A healthy diet and a regular exercise schedule can help avoid the development of numerous chronic health conditions in the present and in later life too.(Unsplash)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/lifestyle/health">health</a></div>
            <h2 className="hdg3">
            <a href="/lifestyle/health/healthy-diet-exercise-might-be-key-to-achieving-optimal-health-in-later-years-101617597944270.html101617597944270">
            Healthy diet, exercise might be key to achieving optimal health in later years
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            ANI | <span>, Washington Dc</span>
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 01:34 PM IST</div>
            </div>
            <div className="sortDec">Following a routine of regular physical activity combined with a diet including fruits, vegetables, and other healthy foods may be the key to middle-aged adults achieving optimal cardiometabolic health later in life.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617597944270"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/lifestyle/health/healthy-diet-exercise-might-be-key-to-achieving-optimal-health-in-later-years-101617597944270.html" data-title="Healthy diet, exercise might be key to achieving optimal health in later years"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="lifestyle" data-vars-storyid="101617598341672" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/lifestyle/art-culture/vast-archives-at-jfk-library-help-bring-ernest-hemingway-to-life-101617598341672.html" data-vars-section="art culture" data-vars-orderid="4">
            <figure>
            <a href="/lifestyle/art-culture/vast-archives-at-jfk-library-help-bring-ernest-hemingway-to-life-101617598341672.html101617598341672">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/2a841ec930f1482981a9af541c8bbb7d-2a841ec930f1482981a9af541c8bbb7d-1_1617606581167_1617606593162.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="This 1920s provided by the John F. Kennedy Library Foundation from the Ernest Hemingway Collection shows Ernest Hemingway in his U.S. passport. A new three-part documentary about Hemingway, which relied heavily on the archives at the John F. Kennedy Presidential Library and Museum in Boston, debuts April 5, 2021, on PBS(AP)" title="This 1920s photo provided by the John F. Kennedy Library Foundation from the Ernest Hemingway Collection shows Ernest Hemingway in his U.S. passport photo. A new three-part documentary about Hemingway, which relied heavily on the archives at the John F. Kennedy Presidential Library and Museum in Boston, debuts April 5, 2021, on PBS(AP)" />
            </a>
            <figcaption>This 1920s photo provided by the John F. Kennedy Library Foundation from the Ernest Hemingway Collection shows Ernest Hemingway in his U.S. passport photo. A new three-part documentary about Hemingway, which relied heavily on the archives at the John F. Kennedy Presidential Library and Museum in Boston, debuts April 5, 2021, on PBS(AP)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/lifestyle/art-culture">art culture</a></div>
            <h2 className="hdg3">
            <a href="/lifestyle/art-culture/vast-archives-at-jfk-library-help-bring-ernest-hemingway-to-life-101617598341672.html101617598341672">
            Vast archives at JFK Library help bring Ernest Hemingway to life
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            AP | <span>, Boston</span>
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 12:58 PM IST</div>
            </div>
            <div className="sortDec">The truth about Ernest Hemingway, the man many consider America’s greatest 20th-century novelist — whose concise writing style made him an outsized celebrity who became a symbol of unrepentant American masculinity — is much more complex.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617598341672"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/lifestyle/art-culture/vast-archives-at-jfk-library-help-bring-ernest-hemingway-to-life-101617598341672.html" data-title="Vast archives at JFK Library help bring Ernest Hemingway to life"></span>
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
            <a href="/lifestyle" data-id="viewmore_lifestyle,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <div className="dynamicExternalData"
            data-title="HT Bangla"></div>
            

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
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="prodcasts ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Podcasts</h2><span>]</span>
            </div>
            </div>
            <div className="prodStoryList">
            <div className="prodStory">
            <figure><img data-src="https://images.theabcdn.com/i/36976407/300x300/c" src="" className="lazy" alt="Daily News" title="Daily News" />
            </figure>
            <div className="info">
            <div className="catName"><a href="/podcasts/daily-news" data-id="readfull_Podcasts_heading,1">Daily News</a></div>
            <h3><a href="/podcasts/daily-news/ht-daily-news-wrap-5020334" data-id="readfull_Podcasts_heading,1">HT Daily News Wrap</a></h3>
            <div className="btnListen"><a href="/podcasts/daily-news/ht-daily-news-wrap-5020334">Listen now</a></div>
            </div>
            </div>
            </div>
            <div className="viewMoreButton">
            <a href="/podcasts" data-id="viewmore_podcasts,1" className="view">
            <span>View All</span>
            </a></div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Sports</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="sports" data-vars-storyid="101617601930077" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/sports/others/pakistan-hockey-officials-keen-on-revival-of-bilateral-ties-against-india-101617601930077.html" data-vars-section="others" data-vars-orderid="1">
            <figure>
            <a href="/sports/others/pakistan-hockey-officials-keen-on-revival-of-bilateral-ties-against-india-101617601930077.html101617601930077">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/_88e863a2-4605-11eb-9f81-cc8810486b90_1617601959449.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Hockey - Representational(Getty)" title="Hockey - Representational(Getty)" />
            </a>
            <figcaption>Hockey - Representational Image(Getty Images)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/sports/others">others</a></div>
            <h3 className="hdg3">
            <a href="/sports/others/pakistan-hockey-officials-keen-on-revival-of-bilateral-ties-against-india-101617601930077.html101617601930077">
            Pakistan hockey officials keen on revival of bilateral ties against India</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            PTI |
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:22 AM IST</div>
            </div>
            <div className="sortDec">PHF officials will be taking up the issue of resuming bilateral series against India at neutral venues on the sidelines of the 47th International Hockey Federation (FIH) Statutory Congress.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617601930077"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/sports/others/pakistan-hockey-officials-keen-on-revival-of-bilateral-ties-against-india-101617601930077.html" data-title="Pakistan hockey officials keen on revival of bilateral ties against India" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="sports" data-vars-storyid="101617601760069" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/sports/football/valencia-told-to-play-on-after-walk-off-over-alleged-racist-insult-gaya-101617601760069.html" data-vars-section="football" data-vars-orderid="2">
            <figure>
            <a href="/sports/football/valencia-told-to-play-on-after-walk-off-over-alleged-racist-insult-gaya-101617601760069.html101617601760069">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/59793858d20746d7a8fdfd20cf453187-59793858d20746d7a8fdfd20cf453187-1_1617601845177_1617601863882.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Valencia's Mouctar Diakhaby. File(AP)" title="Valencia's Mouctar Diakhaby. File(AP)" />
            </a>
            <figcaption>Valencia's Mouctar Diakhaby. File(AP)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/sports/football">football</a></div>
            <h2 className="hdg3">
            <a href="/sports/football/valencia-told-to-play-on-after-walk-off-over-alleged-racist-insult-gaya-101617601760069.html101617601760069">
            Valencia told to play on after walk-off over alleged racist insult: Gaya
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            Reuters |
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:21 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Valencia's players walked off the field in the 29th minute after Frenchman Diakhaby reacted furiously following an altercation with Cadiz's Spanish centre back Juan Cala.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617601760069"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/sports/football/valencia-told-to-play-on-after-walk-off-over-alleged-racist-insult-gaya-101617601760069.html" data-title="Valencia told to play on after walk-off over alleged racist insult: Gaya"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="sports" data-vars-storyid="101617595805006" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/sports/football/alderweireld-aurier-left-out-due-to-late-return-mourinho-101617595805006.html" data-vars-section="football" data-vars-orderid="3">
            <figure>
            <a href="/sports/football/alderweireld-aurier-left-out-due-to-late-return-mourinho-101617595805006.html101617595805006">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/2021-04-05T033252Z_1_LYNXMPEH3403O_RTROPTP_3_SOCCER-EUROPA-DZA-TOT-REPORT_1617595829378_1617595838922.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="File of Jose Mourinho.(REUTERS)" title="File of Jose Mourinho.(REUTERS)" />
            </a>
            <figcaption>File image of Jose Mourinho.(REUTERS)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/sports/football">football</a></div>
            <h2 className="hdg3">
            <a href="/sports/football/alderweireld-aurier-left-out-due-to-late-return-mourinho-101617595805006.html101617595805006">
            Alderweireld, Aurier left out due to late return: Mourinho
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            Reuters |
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 09:40 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Mourinho said Belgian Alderweireld and Ivory Coast's Aurier only returned to the club's training ground on Saturday, while the rest of the squad had been tested in midweek.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617595805006"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/sports/football/alderweireld-aurier-left-out-due-to-late-return-mourinho-101617595805006.html" data-title="Alderweireld, Aurier left out due to late return: Mourinho"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="sports" data-vars-storyid="101617595691331" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/sports/chelseas-rudiger-kepa-involved-in-training-bust-up-report-101617595691331.html" data-vars-section="sports" data-vars-orderid="4">
            <figure>
            <a href="/sports/chelseas-rudiger-kepa-involved-in-training-bust-up-report-101617595691331.html101617595691331">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/2021-03-28T193116Z_1635158769_UP1EH3S1I82UU_RTRMADP_3_SOCCER-WORLDCUP-ROM-GER-REPORT_1617595725679_1617595738342.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="File of Chelsea's Antonio Rudiger.(Inquam Photos via REUTERS)" title="File of Chelsea's Antonio Rudiger.(Inquam Photos via REUTERS)" />
            </a>
            <figcaption>File image of Chelsea's Antonio Rudiger.(Inquam Photos via REUTERS)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/sports">sports</a></div>
            <h2 className="hdg3">
            <a href="/sports/chelseas-rudiger-kepa-involved-in-training-bust-up-report-101617595691331.html101617595691331">
            Chelsea's Rudiger, Kepa involved in training bust-up: Report
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            Reuters |
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 09:39 AM IST</div>
            </div>
            <div className="sortDec">The report said the pair squared up to each other after Rudiger went in late on the goalkeeper and that they had to be separated by team mates.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617595691331"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/sports/chelseas-rudiger-kepa-involved-in-training-bust-up-report-101617595691331.html" data-title="Chelsea's Rudiger, Kepa involved in training bust-up: Report"></span>
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
            <a href="/sports" data-id="viewmore_sports,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Business</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="business" data-vars-storyid="101617606143922" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/business/japans-central-bank-kicks-off-experiments-on-issuing-digital-currency-101617606143922.html" data-vars-section="business" data-vars-orderid="1">
            <figure>
            <a href="/business/japans-central-bank-kicks-off-experiments-on-issuing-digital-currency-101617606143922.html101617606143922">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/AFP_8YK37T_1612048738417_1612048755182_1617606562102.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="The BOJ will thereafter move to the second phase of experiments that will scrutinise more detailed functions, such as whether to set limits on the amount of CBDC each entity can hold.(AFP)" title="The BOJ will thereafter move to the second phase of experiments that will scrutinise more detailed functions, such as whether to set limits on the amount of CBDC each entity can hold.(AFP)" />
            </a>
            <figcaption>The BOJ will thereafter move to the second phase of experiments that will scrutinise more detailed functions, such as whether to set limits on the amount of CBDC each entity can hold.(AFP)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/business">business</a></div>
            <h3 className="hdg3">
            <a href="/business/japans-central-bank-kicks-off-experiments-on-issuing-digital-currency-101617606143922.html101617606143922">
            Japan's central bank kicks off experiments on issuing digital currency</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            Reuters |
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 12:40 PM IST</div>
            </div>
            <div className="sortDec">The first phase of experiments, to be carried out until March 2022, will focus on testing the technical feasibility of issuing, distributing and redeeming a central bank digital currency (CBDC), the BOJ said in a statement.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617606143922"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/business/japans-central-bank-kicks-off-experiments-on-issuing-digital-currency-101617606143922.html" data-title="Japan's central bank kicks off experiments on issuing digital currency" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="business" data-vars-storyid="101617600143649" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/business/sensex-nifty-down-2-in-afternoon-trade-indusind-bank-bajaj-fin-top-laggards-101617600143649.html" data-vars-section="business" data-vars-orderid="2">
            <figure>
            <a href="/business/sensex-nifty-down-2-in-afternoon-trade-indusind-bank-bajaj-fin-top-laggards-101617600143649.html101617600143649">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/2021-03-01T053456Z_1_LYNXNPEH200QX_RTROPTP_3_INDIA-MARKETS_1617600200113_1617600261298.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Financial markets were closed on Friday for Good Friday and Sensex and NSE ended up on Thursday. (Reuters )" title="Financial markets were closed on Friday for Good Friday and Sensex and NSE ended up on Thursday. (Reuters )" />
            </a>
            <figcaption>Financial markets were closed on Friday for Good Friday and Sensex and NSE ended up on Thursday. (Reuters )</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/business">business</a></div>
            <h2 className="hdg3">
            <a href="/business/sensex-nifty-down-2-in-afternoon-trade-indusind-bank-bajaj-fin-top-laggards-101617600143649.html101617600143649">
            Sensex, Nifty down 2% in afternoon trade; IndusInd Bank, Bajaj Fin top laggards
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By   | Written by Meenakshi Ray<span>, New Delhi</span>
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 11:41 AM IST</div>
            </div>
            <div className="sortDec">Infosys, Tech Mahindra, and HCL Technologies were the only gainers on S&amp;P BSE Sensex.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617600143649"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/business/sensex-nifty-down-2-in-afternoon-trade-indusind-bank-bajaj-fin-top-laggards-101617600143649.html" data-title="Sensex, Nifty down 2% in afternoon trade; IndusInd Bank, Bajaj Fin top laggards"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="business" data-vars-storyid="101617596875359" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/business/gold-prices-fall-further-today-check-rates-in-your-city-here-101617596875359.html" data-vars-section="business" data-vars-orderid="3">
            <figure>
            <a href="/business/gold-prices-fall-further-today-check-rates-in-your-city-here-101617596875359.html101617596875359">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/britain-dealers-precious-bullion-hatton-displayed-garden_b2876608-50bf-11eb-8a3c-8a727805186f_1617598671680.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="The spot gold prices in India(Rs51,360) witnessed a growth of 0.02%, despite global gold prices($1,917.8) saw a drop of 0.06%.(REUTERS)" title="The spot gold prices in India(Rs51,360) witnessed a growth of 0.02%, despite global gold prices($1,917.8) saw a drop of 0.06%.(REUTERS)" />
            </a>
            <figcaption>The spot gold prices in India(Rs51,360) witnessed a growth of 0.02%, despite global gold prices($1,917.8) saw a drop of 0.06%.(REUTERS)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/business">business</a></div>
            <h2 className="hdg3">
            <a href="/business/gold-prices-fall-further-today-check-rates-in-your-city-here-101617596875359.html101617596875359">
            Gold prices fall further today. Check rates in your city here
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By   | Edited by Mallika Soni<span>, New Delhi</span>
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 10:29 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Spot gold prices for 10 gram 22-carat-gold stood at <span className='webrupee'>₹</span>43,920 and 24-carat-gold was at <span className='webrupee'>₹</span>44,910, according to Good Returns. Check rates of 10 gram gold in your city on Monday (April 5) here</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617596875359"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/business/gold-prices-fall-further-today-check-rates-in-your-city-here-101617596875359.html" data-title="Gold prices fall further today. Check rates in your city here"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="business" data-vars-storyid="101617594915473" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/business/sensex-opens-410-21-points-in-the-red-at-49-619-62-nifty-begins-at-1475310-101617594915473.html" data-vars-section="business" data-vars-orderid="4">
            <figure>
            <a href="/business/sensex-opens-410-21-points-in-the-red-at-49-619-62-nifty-begins-at-1475310-101617594915473.html101617594915473">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/2021-03-01T053456Z_1_LYNXNPEH200QX_RTROPTP_3_INDIA-MARKETS_1616644637560_1617595014230.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="People look at a screen displaying the Sensex results on the facade of the Bombay Stock Exchange (BSE) building in Mumbai. (REUTERS/Francis Mascarenhas/Files)" title="People look at a screen displaying the Sensex results on the facade of the Bombay Stock Exchange (BSE) building in Mumbai. (REUTERS/Francis Mascarenhas/Files)" />
            </a>
            <figcaption>People look at a screen displaying the Sensex results on the facade of the Bombay Stock Exchange (BSE) building in Mumbai. (REUTERS/Francis Mascarenhas/Files)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/business">business</a></div>
            <h2 className="hdg3">
            <a href="/business/sensex-opens-410-21-points-in-the-red-at-49-619-62-nifty-begins-at-1475310-101617594915473.html101617594915473">
            Sensex opens 410.21 points in the red at 49,619.62, Nifty begins at 14,753.10
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            PTI | | Posted by Karan Manral
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 09:54 AM IST</div>
            </div>
            <div className="sortDec">Infosys, HCL Tech, Tech Mahindra, TCS and Bharti Airtel were among the gainers in the Sensex pack. IndusInd Bank, on the other hand, was the top laggard, followed by Bajaj Finance, Axis Bank, SBI, Bajaj Auto, Bajaj Finserv, ICICI Bank, HDFC twins and Reliance Industries.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617594915473"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/business/sensex-opens-410-21-points-in-the-red-at-49-619-62-nifty-begins-at-1475310-101617594915473.html" data-title="Sensex opens 410.21 points in the red at 49,619.62, Nifty begins at 14,753.10"></span>
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
            <a href="/business" data-id="viewmore_business,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Education</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="education" data-vars-storyid="101617362849366" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/education/board-exams/bihar-board-class-10th-result-2021-bseb-matric-results-soon-at-biharboardonlinebihargovin-101617362849366.html" data-vars-section="board exams" data-vars-orderid="1">
            <figure>
            <a href="/education/board-exams/bihar-board-class-10th-result-2021-bseb-matric-results-soon-at-biharboardonlinebihargovin-101617362849366.html101617362849366">
            <img data-src="https://images.hindustantimes.com/img/2021/04/02/550x309/BSEB_1613618452334_1613618463146_1617363014275.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="BSEB Bihar Board 10th Result 2021: Matric result to be declared today(Hand out)" title="BSEB Bihar Board 10th Result 2021: Matric result to be declared today(Hand out)" />
            </a>
            <figcaption>BSEB Bihar Board 10th Result 2021: Matric result to be declared today(Hand out image)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/education/board-exams">board exams</a></div>
            <h3 className="hdg3">
            <a href="/education/board-exams/bihar-board-class-10th-result-2021-bseb-matric-results-soon-at-biharboardonlinebihargovin-101617362849366.html101617362849366">
            BSEB Bihar Board 10th Result 2021: Matric exam results soon</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            By  
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:08 PM IST</div>
            </div>
            <div className="sortDec">BSEB Bihar Board 10th Result 2021 to be declared soon. Candidates who have appeared for the examination can check their result official site of BSEB on biharboardonline.bihar.gov.in and biharboardonline.com.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617362849366"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/education/board-exams/bihar-board-class-10th-result-2021-bseb-matric-results-soon-at-biharboardonlinebihargovin-101617362849366.html" data-title="BSEB Bihar Board 10th Result 2021: Matric exam results soon" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="education" data-vars-storyid="101617601873840" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/education/competitive-exams/iitguwahati-suspends-student-accused-of-raping-batch-mate-puts-4-in-isolation-101617601873840.html" data-vars-section="competitive exams" data-vars-orderid="2">
            <figure>
            <a href="/education/competitive-exams/iitguwahati-suspends-student-accused-of-raping-batch-mate-puts-4-in-isolation-101617601873840.html101617601873840">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/3806ca94-95d0-11eb-be01-f1e853d0087a_1617601872750.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="IIT-Guwahati academic complex" title="IIT-Guwahati academic complex" />
            </a>
            <figcaption>IIT-Guwahati academic complex</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/education/competitive-exams">competitive exams</a></div>
            <h2 className="hdg3">
            <a href="/education/competitive-exams/iitguwahati-suspends-student-accused-of-raping-batch-mate-puts-4-in-isolation-101617601873840.html101617601873840">
            IIT-Guwahati suspends student accused of raping batch mate; puts 4 in isolation
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:21 AM IST</div>
            </div>
            <div className="sortDec">Facing criticism for the way it handled of the incident, the premier institute has also assured enhanced security measures to prevent such incidents in future</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617601873840"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/education/competitive-exams/iitguwahati-suspends-student-accused-of-raping-batch-mate-puts-4-in-isolation-101617601873840.html" data-title="IIT-Guwahati suspends student accused of raping batch mate; puts 4 in isolation"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="education" data-vars-storyid="101617599902808" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/education/board-exams/bihar-board-10th-result-2021-how-to-check-bseb-matric-results-on-ht-portal-101617599902808.html" data-vars-section="board exams" data-vars-orderid="3">
            <figure>
            <a href="/education/board-exams/bihar-board-10th-result-2021-how-to-check-bseb-matric-results-on-ht-portal-101617599902808.html101617599902808">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/10_1617600260683_1617600269575.PNG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Bihar Board 10th Result 2021.(Screengrab )" title="Bihar Board 10th Result 2021.(Screengrab )" />
            </a>
            <figcaption>Bihar Board 10th Result 2021.(Screengrab )</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/education/board-exams">board exams</a></div>
            <h2 className="hdg3">
            <a href="/education/board-exams/bihar-board-10th-result-2021-how-to-check-bseb-matric-results-on-ht-portal-101617599902808.html101617599902808">
            Bihar Board 10th Result 2021: How to check BSEB matric results on HT Portal
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By   | Edited by Akhilesh Nagari
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 11:09 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Bihar Board 10th Result 2021: Students who have appeared in Bihar board matriculation examinations can check their results after declaration on HT portal and the official website of BSEB.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617599902808"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/education/board-exams/bihar-board-10th-result-2021-how-to-check-bseb-matric-results-on-ht-portal-101617599902808.html" data-title="Bihar Board 10th Result 2021: How to check BSEB matric results on HT Portal"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="education" data-vars-storyid="101617590749972" data-vars-storytype="liveblog" data-weburl="https://www.hindustantimes.com/education/board-exams/bihar-board-10th-result-2021-live-updates-bseb-bihar-matric-result-at-biharboard-ac-in-latest-updates-101617590749972.html" data-vars-section="board exams" data-vars-orderid="4">
            <figure>
            <a href="/education/board-exams/bihar-board-10th-result-2021-live-updates-bseb-bihar-matric-result-at-biharboard-ac-in-latest-updates-101617590749972.html">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/_7bd15ff2-c5a9-11ea-be81-f7b2e356804f_1617591218986.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Bihar Board 10th Result 2021.(HT file)" title="Bihar Board 10th Result 2021.(HT file)" />
            </a>
            <figcaption>Bihar Board 10th Result 2021.(HT file)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/education/board-exams">board exams</a></div>
            <h2 className="hdg3">
            <a href="/education/board-exams/bihar-board-10th-result-2021-live-updates-bseb-bihar-matric-result-at-biharboard-ac-in-latest-updates-101617590749972.html">
            Bihar Board 10th Result 2021 Live Updates: BSEB Matric results today
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By   | Edited by Akhilesh Nagari
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 01:39 PM IST</div>
            </div>
            <div className="sortDec"><ul><li>Bihar Board 10th Result 2021 Live Updates: Once the results are announced, candidates who have appeared for the Bihar board Class 10 examinations will be able to check their result online at biharboardonline.bihar.gov.in and biharboardonline.com.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617590749972"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/education/board-exams/bihar-board-10th-result-2021-live-updates-bseb-bihar-matric-result-at-biharboard-ac-in-latest-updates-101617590749972.html" data-title="Bihar Board 10th Result 2021 Live Updates: BSEB Matric results today"></span>
            </div>
            <div className="viewAll rightArrow">

            </div>
            </div>
            </div>
            </div>
            <div className="recommended"></div>
            <div className="viewMoreButton">
            <a href="/education" data-id="viewmore_education,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Delhi News</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="delhi-news" data-vars-storyid="101617609794465" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/delhi-news/bomb-scare-mock-drill-outside-national-media-centre-in-delhi-101617609794465.html" data-vars-section="delhi news" data-vars-orderid="1">
            <figure>
            <a href="/cities/delhi-news/bomb-scare-mock-drill-outside-national-media-centre-in-delhi-101617609794465.html101617609794465">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/05430946-95e5-11eb-be01-f1e853d0087a_1617609792899.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Representational. (HT archive)" title="Representational. (HT archive)" />
            </a>
            <figcaption>Representational Image. (HT archive)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/cities/delhi-news">delhi news</a></div>
            <h3 className="hdg3">
            <a href="/cities/delhi-news/bomb-scare-mock-drill-outside-national-media-centre-in-delhi-101617609794465.html101617609794465">
            Bomb scare: Mock drill outside National Media Centre in Delhi</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            By HT Correspondent | Edited by Smriti Sinha
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:33 PM IST</div>
            </div>
            <div className="sortDec">CISF officials later said it was a mock drill carried out to check the alertness of their personnel deployed in the security of the national media centre</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617609794465"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/cities/delhi-news/bomb-scare-mock-drill-outside-national-media-centre-in-delhi-101617609794465.html" data-title="Bomb scare: Mock drill outside National Media Centre in Delhi" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="delhi-news" data-vars-storyid="101617591013418" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/delhi-news/farmers-protest-key-delhi-borders-remain-closed-traffic-diverted-101617591013418.html" data-vars-section="delhi news" data-vars-orderid="2">
            <figure>
            <a href="/cities/delhi-news/farmers-protest-key-delhi-borders-remain-closed-traffic-diverted-101617591013418.html101617591013418">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/d0a61272-95b8-11eb-adee-e1690c080e42_1617591012203.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Farmers shout slogans during their ongoing protest against farm laws, at Ghazipur border in New Delhi. (ANI)" title="Farmers shout slogans during their ongoing protest against farm laws, at Ghazipur border in New Delhi. (ANI)" />
            </a>
            <figcaption>Farmers shout slogans during their ongoing protest against farm laws, at Ghazipur border in New Delhi. (ANI)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/cities/delhi-news">delhi news</a></div>
            <h2 className="hdg3">
            <a href="/cities/delhi-news/farmers-protest-key-delhi-borders-remain-closed-traffic-diverted-101617591013418.html101617591013418">
            Farmers’ protest: Key Delhi borders remain closed, traffic diverted
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By HT Correspondent | Edited by Zara Khan
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 08:20 AM IST</div>
            </div>
            <div className="sortDec">The following borders are closed for traffic movement — Piyau Maniyari, Singhu border, Harewali, Mangeshpur and Tikri border, said a traffic police official</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617591013418"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cities/delhi-news/farmers-protest-key-delhi-borders-remain-closed-traffic-diverted-101617591013418.html" data-title="Farmers’ protest: Key Delhi borders remain closed, traffic diverted"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="delhi-news" data-vars-storyid="101617582389033" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/delhi-news/delhi-4-arrested-restaurants-clubs-fined-for-not-following-covid-19-rules-101617582389033.html" data-vars-section="delhi news" data-vars-orderid="3">
            <figure>
            <a href="/cities/delhi-news/delhi-4-arrested-restaurants-clubs-fined-for-not-following-covid-19-rules-101617582389033.html101617582389033">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/delhi-police-pcr-van-police-van-shutterstock_4f2b59c4-020a-11eb-a0ae-05799bfe6215_1617582496123.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="According to police, in the South East district, 10 FIRs were registered and 330 people fined for not wearing face mask, not maintaining social distancing and spitting in public places.(Representational)" title="According to police, in the South East district, 10 FIRs were registered and 330 people fined for not wearing face mask, not maintaining social distancing and spitting in public places.(Representational)" />
            </a>
            <figcaption>According to police, in the South East district, 10 FIRs were registered and 330 people fined for not wearing face mask, not maintaining social distancing and spitting in public places.(Representational Image)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/cities/delhi-news">delhi news</a></div>
            <h2 className="hdg3">
            <a href="/cities/delhi-news/delhi-4-arrested-restaurants-clubs-fined-for-not-following-covid-19-rules-101617582389033.html101617582389033">
            Delhi: 4 arrested, restaurants, clubs fined for not following Covid-19 rules
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            PTI |
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 05:59 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>The drive, in which people were also fined for not wearing face masks and spitting in public areas, was conducted in places with high footfall, including markets, on Friday and Saturday.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617582389033"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cities/delhi-news/delhi-4-arrested-restaurants-clubs-fined-for-not-following-covid-19-rules-101617582389033.html" data-title="Delhi: 4 arrested, restaurants, clubs fined for not following Covid-19 rules"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="delhi-news" data-vars-storyid="101617575386746" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/delhi-news/sunday-slots-draw-people-to-covid-19-jab-centres-101617575386746.html" data-vars-section="delhi news" data-vars-orderid="4">
            <figure>
            <a href="/cities/delhi-news/sunday-slots-draw-people-to-covid-19-jab-centres-101617575386746.html101617575386746">
            <img data-src="https://images.hindustantimes.com/img/2021/04/04/550x309/20210404_MOH-KS-LI-COVID_19_Vaccination_at_Sec_23_Chd_02_1617575484000_1617575497904.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="A resident receiving a Covid-19 vaccine dose." title="A resident receiving a Covid-19 vaccine dose." />
            </a>
            <figcaption>A resident receiving a Covid-19 vaccine dose.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/cities/delhi-news">delhi news</a></div>
            <h2 className="hdg3">
            <a href="/cities/delhi-news/sunday-slots-draw-people-to-covid-19-jab-centres-101617575386746.html101617575386746">
            Sunday slots draw people to Covid-19 jab centres
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Abhishek Dey<span>, Hindustan Times, New Delhi</span>
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 04:02 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>On Saturday, 80,797 people were vaccinated till 6pm as against 52,408 on Friday and 71,284 on Thursday, government data showed.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617575386746"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cities/delhi-news/sunday-slots-draw-people-to-covid-19-jab-centres-101617575386746.html" data-title="Sunday slots draw people to Covid-19 jab centres"></span>
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
            <a href="/cities/delhi-news" data-id="viewmore_delhi-news,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Mumbai News</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="mumbai-news" data-vars-storyid="101617608187081" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/mumbai-news/actor-ajaz-khan-tests-covid-19-positive-in-ncb-s-custody-101617608187081.html" data-vars-section="mumbai news" data-vars-orderid="1">
            <figure>
            <a href="/cities/mumbai-news/actor-ajaz-khan-tests-covid-19-positive-in-ncb-s-custody-101617608187081.html101617608187081">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/20210331316L_1617202616472_1617608338048.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Ajaz Khan's medical examination was conducted on Sunday following which his report came out positive for the viral infection, the NCB official said" title="Ajaz Khan's medical examination was conducted on Sunday following which his report came out positive for the viral infection, the NCB official said" />
            </a>
            <figcaption>Ajaz Khan's medical examination was conducted on Sunday following which his report came out positive for the viral infection, the NCB official said</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/cities/mumbai-news">mumbai news</a></div>
            <h3 className="hdg3">
            <a href="/cities/mumbai-news/actor-ajaz-khan-tests-covid-19-positive-in-ncb-s-custody-101617608187081.html101617608187081">
            Actor Ajaz Khan tests Covid-19 positive in NCB's custody</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            PTI | <span>, Mumbai</span>
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:09 PM IST</div>
            </div>
            <div className="sortDec">Accordingly, Khan was questioned by the NCB at its office in south Mumbai and his statement was recorded.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617608187081"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/cities/mumbai-news/actor-ajaz-khan-tests-covid-19-positive-in-ncb-s-custody-101617608187081.html" data-title="Actor Ajaz Khan tests Covid-19 positive in NCB's custody" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="mumbai-news" data-vars-storyid="101617608233853" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-orders-preliminary-cbi-probe-into-charges-against-anil-deshmukh-101617608233853.html" data-vars-section="mumbai news" data-vars-orderid="2">
            <figure>
            <a href="/cities/mumbai-news/bombay-hc-orders-preliminary-cbi-probe-into-charges-against-anil-deshmukh-101617608233853.html101617608233853">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/527b0cf8-95e1-11eb-adee-e1690c080e42_1617608532884.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Former Mumbai Police commissioner Param Bir Singh." title="Former Mumbai Police commissioner Param Bir Singh." />
            </a>
            <figcaption>Former Mumbai Police commissioner Param Bir Singh.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/cities/mumbai-news">mumbai news</a></div>
            <h2 className="hdg3">
            <a href="/cities/mumbai-news/bombay-hc-orders-preliminary-cbi-probe-into-charges-against-anil-deshmukh-101617608233853.html101617608233853">
            Bombay HC orders preliminary CBI probe into charges against Anil Deshmukh
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By KAY Dodhiya
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 01:12 PM IST</div>
            </div>
            <div className="sortDec">The state had opposed Singh’s PIL on the grounds that his allegations were made after his transfer order was passed on March 17, which indicated that the PIL was a personal vendetta against Deshmukh</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617608233853"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-orders-preliminary-cbi-probe-into-charges-against-anil-deshmukh-101617608233853.html" data-title="Bombay HC orders preliminary CBI probe into charges against Anil Deshmukh"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="mumbai-news" data-vars-storyid="101617601975509" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html" data-vars-section="mumbai news" data-vars-orderid="3">
            <figure>
            <a href="/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html101617601975509">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/7fe2d31e-8a43-11eb-8c8d-7793c0212a86_1617151104054_1617602662684.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Anil Deshmukh" title="Anil Deshmukh" />
            </a>
            <figcaption>Anil Deshmukh</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/cities/mumbai-news">mumbai news</a></div>
            <h2 className="hdg3">
            <a href="/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html101617601975509">
            Bombay HC directs CBI to conduct preliminary probe against Anil Deshmukh
            </a>
            </h2>
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
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/cities/mumbai-news/bombay-hc-directs-cbi-to-conduct-preliminary-probe-against-anil-deshmukh-101617601975509.html" data-title="Bombay HC directs CBI to conduct preliminary probe against Anil Deshmukh"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="mumbai-news" data-vars-storyid="101617602233635" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/cities/mumbai-news/defamation-case-court-likely-to-pronounce-order-on-kangana-ranaut-s-plea-today-101617602233635.html" data-vars-section="mumbai news" data-vars-orderid="4">
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
            <div className="viewMoreButton">
            <a href="/cities/mumbai-news" data-id="viewmore_mumbai-news,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>TV</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="tv" data-vars-storyid="101617609554007" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/tv/rupali-ganguly-aisa-birthday-yaadgar-rahega-101617609554007.html" data-vars-section="tv" data-vars-orderid="1">
            <figure>
            <a href="/entertainment/tv/rupali-ganguly-aisa-birthday-yaadgar-rahega-101617609554007.html101617609554007">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/cd163962-950d-11eb-b10b-5920a68d5cf2_1617609552964.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="Actor Rupali Ganguly, who recently tested Covid positive, will celebrate her birthday on a zoom call with hubby and son." title="Actor Rupali Ganguly, who recently tested Covid positive, will celebrate her birthday on a zoom call with hubby and son." />
            </a>
            <figcaption>Actor Rupali Ganguly, who recently tested Covid positive, will celebrate her birthday on a zoom call with hubby and son.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/entertainment/tv">tv</a></div>
            <h3 className="hdg3">
            <a href="/entertainment/tv/rupali-ganguly-aisa-birthday-yaadgar-rahega-101617609554007.html101617609554007">
            Rupali Ganguly: Aisa birthday yaadgar rahega</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            By Naina Arora<span>, New Delhi</span>
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:29 PM IST</div>
            </div>
            <div className="sortDec">The Anupamaa fame actor had plans to celebrate her birthday in Alibaug, but after testing Covid positive decided to cut her birthday cake on a zoom call with her husband and son.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617609554007"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/entertainment/tv/rupali-ganguly-aisa-birthday-yaadgar-rahega-101617609554007.html" data-title="Rupali Ganguly: Aisa birthday yaadgar rahega" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="tv" data-vars-storyid="101617607012737" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/tv/taarak-mehta-ko-ooltah-chashmah-director-responds-to-disgruntled-fan-who-called-the-show-terrible-101617607012737.html" data-vars-section="tv" data-vars-orderid="2">
            <figure>
            <a href="/entertainment/tv/taarak-mehta-ko-ooltah-chashmah-director-responds-to-disgruntled-fan-who-called-the-show-terrible-101617607012737.html101617607012737">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/_bf788dfc-33e0-11eb-9c97-4dbf0d0924a0_1617607440814.JPG" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Taarak Mehta Ka Ooltah Chashmah was the most popular show 2020, according to Yahoo." title="Taarak Mehta Ka Ooltah Chashmah was the most popular show 2020, according to Yahoo." />
            </a>
            <figcaption>Taarak Mehta Ka Ooltah Chashmah was the most popular show 2020, according to Yahoo.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/tv">tv</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/tv/taarak-mehta-ko-ooltah-chashmah-director-responds-to-disgruntled-fan-who-called-the-show-terrible-101617607012737.html101617607012737">
            Taarak Mehta director responds to disgruntled fan who called the show 'terrible'
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 01:02 PM IST</div>
            </div>
            <div className="sortDec"><ul><li>Taarak Mehta Ko Ooltah Chashmah director Malav Rajda has responded to a disgruntled fan's complaints about the show being 'terrible'.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617607012737"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/tv/taarak-mehta-ko-ooltah-chashmah-director-responds-to-disgruntled-fan-who-called-the-show-terrible-101617607012737.html" data-title="Taarak Mehta director responds to disgruntled fan who called the show 'terrible'"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="tv" data-vars-storyid="101617595953514" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/tv/kapil-sharma-and-sunil-grover-exchange-pleasantries-on-twitter-fans-want-reconciliation-love-you-paji-101617595953514.html" data-vars-section="tv" data-vars-orderid="3">
            <figure>
            <a href="/entertainment/tv/kapil-sharma-and-sunil-grover-exchange-pleasantries-on-twitter-fans-want-reconciliation-love-you-paji-101617595953514.html101617595953514">
            <img data-src="https://images.hindustantimes.com/img/2021/04/05/550x309/_a43de78a-74d2-11ea-a349-a18bc5ff339a_1617596604427.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Sunil Grover and Kapil Sharma in happier times." title="Sunil Grover and Kapil Sharma in happier times." />
            </a>
            <figcaption>Sunil Grover and Kapil Sharma in happier times.</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/tv">tv</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/tv/kapil-sharma-and-sunil-grover-exchange-pleasantries-on-twitter-fans-want-reconciliation-love-you-paji-101617595953514.html101617595953514">
            Kapil and Sunil exchange pleasantries on Twitter, fans want reconciliation
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">PUBLISHED ON APR 05, 2021 09:59 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>Kapil Sharma and Sunil Grover's fans called for them to put aside their differences and reconcile after they exchanged pleasantries on Twitter recently.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617595953514"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/tv/kapil-sharma-and-sunil-grover-exchange-pleasantries-on-twitter-fans-want-reconciliation-love-you-paji-101617595953514.html" data-title="Kapil and Sunil exchange pleasantries on Twitter, fans want reconciliation"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="tv" data-vars-storyid="101617545097747" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/entertainment/tv/kapil-sharma-reveals-the-name-of-his-son-after-neeti-simoes-asks-him-we-named-him-trishaan-101617545097747.html" data-vars-section="tv" data-vars-orderid="4">
            <figure>
            <a href="/entertainment/tv/kapil-sharma-reveals-the-name-of-his-son-after-neeti-simoes-asks-him-we-named-him-trishaan-101617545097747.html101617545097747">
            <img data-src="https://images.hindustantimes.com/img/2021/04/04/550x309/_c6987c40-4f1b-11eb-98bd-18b55e3bb9aa_1617546567994.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Kapil Sharma reveals the name of his son" title="Kapil Sharma reveals the name of his son" />
            </a>
            <figcaption>Kapil Sharma reveals the name of his son</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/entertainment/tv">tv</a></div>
            <h2 className="hdg3">
            <a href="/entertainment/tv/kapil-sharma-reveals-the-name-of-his-son-after-neeti-simoes-asks-him-we-named-him-trishaan-101617545097747.html101617545097747">
            Kapil Sharma reveals the name of his son
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By    
            </div>
            <div className="dateTime">UPDATED ON APR 05, 2021 12:26 AM IST</div>
            </div>
            <div className="sortDec"><ul><li>After Neeti Mohan asks him while wishing him on his birthday, Kapil Sharma finally revealed the name of his new born son.</li></ul></div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617545097747"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/entertainment/tv/kapil-sharma-reveals-the-name-of-his-son-after-neeti-simoes-asks-him-we-named-him-trishaan-101617545097747.html" data-title="Kapil Sharma reveals the name of his son"></span>
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
            <a href="/entertainment/tv" data-id="viewmore_tv,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
            <section className="worldSection sections ht-ad-holder">
            <div className="secHdg">
            <span className="hdgTexure"></span>
            <div className="hdgStyle">
            <span>[</span><h2>Opinion</h2><span>]</span>
            </div>
            </div>
            <div className="cartHolder page-view-candidate" data-vars-cardtype="opinion" data-vars-storyid="101617548173592" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/opinion/designing-resilient-economic-institutions-101617548173592.html" data-vars-section="opinion" data-vars-orderid="1">
            <figure>
            <a href="/opinion/designing-resilient-economic-institutions-101617548173592.html101617548173592">
            <img data-src="https://images.hindustantimes.com/img/2021/04/04/550x309/064b2e1c-9555-11eb-b10b-5920a68d5cf2_1617548170624.jpg" src="https://images.hindustantimes.com/default/550x309.jpg" className="lazy" alt="What lessons can we take away from these experiences about future institutional design? The key learning here is that institutional capabilities that allow reasonable outcomes during normal circumstances may not do so during a crisis. Thus, the design of institutions has to keep in mind crisis scenarios and how to deliver during those conditions. (Sakib Ali/HT Archive)" title="What lessons can we take away from these experiences about future institutional design? The key learning here is that institutional capabilities that allow reasonable outcomes during normal circumstances may not do so during a crisis. Thus, the design of institutions has to keep in mind crisis scenarios and how to deliver during those conditions. (Sakib Ali/HT Archive)" />
            </a>
            <figcaption>What lessons can we take away from these experiences about future institutional design? The key learning here is that institutional capabilities that allow reasonable outcomes during normal circumstances may not do so during a crisis. Thus, the design of institutions has to keep in mind crisis scenarios and how to deliver during those conditions. (Sakib Ali/HT Archive)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10 pb10"><a href="/opinion">opinion</a></div>
            <h3 className="hdg3">
            <a href="/opinion/designing-resilient-economic-institutions-101617548173592.html101617548173592">
            Designing resilient economic institutions</a>
            </h3>
            <div className="stroyPub">
            <div className="storyBy">
            By Sabyasachi Kar and Mayank Jain
            </div>
            <div className="dateTime">PUBLISHED ON APR 04, 2021 08:26 PM IST</div>
            </div>
            <div className="sortDec">The structure of India’s labour markets exacerbated the crisis of migration last year. Institutional reforms will help</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617548173592"></span>
            <span className="share share-candidate" data-url="https://www.hindustantimes.com/opinion/designing-resilient-economic-institutions-101617548173592.html" data-title="Designing resilient economic institutions" title="share"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="opinion" data-vars-storyid="101617547632905" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/opinion/what-campaign-slogans-speeches-and-songs-reveal-about-bengal-s-polls-101617547632905.html" data-vars-section="opinion" data-vars-orderid="2">
            <figure>
            <a href="/opinion/what-campaign-slogans-speeches-and-songs-reveal-about-bengal-s-polls-101617547632905.html101617547632905">
            <img data-src="https://images.hindustantimes.com/img/2021/04/04/550x309/4e920f0c-9554-11eb-b10b-5920a68d5cf2_1617547630523.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="A polling officer marks a voter's finger at a polling station of Midnapur town during the first phase of the assembly election, West Midnapore (ANI)" title="A polling officer marks a voter's finger at a polling station of Midnapur town during the first phase of the assembly election, West Midnapore (ANI)" />
            </a>
            <figcaption>A polling officer marks a voter's finger at a polling station of Midnapur town during the first phase of the assembly election, West Midnapore (ANI)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <h2 className="hdg3">
            <a href="/opinion/what-campaign-slogans-speeches-and-songs-reveal-about-bengal-s-polls-101617547632905.html101617547632905">
            What campaign slogans, speeches and songs reveal about Bengal’s polls
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Ronojoy Sen
            </div>
            <div className="dateTime">PUBLISHED ON APR 04, 2021 08:17 PM IST</div>
            </div>
            <div className="sortDec">Social media has become integral to campaigning and mimics some characteristics of physical campaigning, including spreading misinformation. It takes the good, bad, ugly and silly to make a campaign. The battle for Bengal is no different.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617547632905"></span>
            <span className="share share-candidate" title="share" data-title="What campaign slogans, speeches and songs reveal about Bengal’s polls"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="opinion" data-vars-storyid="101617547391418" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/opinion/in-kashmir-new-aspirations-and-a-ray-of-hope-101617547391418.html" data-vars-section="opinion" data-vars-orderid="3">
            <figure>
            <a href="/opinion/in-kashmir-new-aspirations-and-a-ray-of-hope-101617547391418.html101617547391418">
            <img data-src="https://images.hindustantimes.com/img/2021/04/04/550x309/9cad3c30-9553-11eb-b10b-5920a68d5cf2_1617547390544.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="Lieutenant-Governor Manoj Sinha is aware that to establish peace in the Valley, ordinary Kashmiris must gain the upper hand. This is the reason why he personally meets people one day in the week. All senior officers are present at this meeting, and problems are dealt with immediately. He has set up complaint boxes in every panchayat, and, in order, to address people’s problems, he has begun a block day programme every Wednesday. (PTI)" title="Lieutenant-Governor Manoj Sinha is aware that to establish peace in the Valley, ordinary Kashmiris must gain the upper hand. This is the reason why he personally meets people one day in the week. All senior officers are present at this meeting, and problems are dealt with immediately. He has set up complaint boxes in every panchayat, and, in order, to address people’s problems, he has begun a block day programme every Wednesday. (PTI)" />
            </a>
            <figcaption>Lieutenant-Governor Manoj Sinha is aware that to establish peace in the Valley, ordinary Kashmiris must gain the upper hand. This is the reason why he personally meets people one day in the week. All senior officers are present at this meeting, and problems are dealt with immediately. He has set up complaint boxes in every panchayat, and, in order, to address people’s problems, he has begun a block day programme every Wednesday. (PTI)</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/opinion">opinion</a></div>
            <h2 className="hdg3">
            <a href="/opinion/in-kashmir-new-aspirations-and-a-ray-of-hope-101617547391418.html101617547391418">
            In Kashmir, new aspirations and a ray of hope
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Shashi Shekhar
            </div>
            <div className="dateTime">PUBLISHED ON APR 04, 2021 08:13 PM IST</div>
            </div>
            <div className="sortDec">As a result of accountability and direct communication, students have lined up for scholarships. In the last financial year, 800,000 students benefited under various scholarship schemes. Until December 2020, 950,000 lakh applications for scholarships had been received.</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617547391418"></span>
            <span className="share share-candidate" title="share" data-url="https://www.hindustantimes.com/opinion/in-kashmir-new-aspirations-and-a-ray-of-hope-101617547391418.html" data-title="In Kashmir, new aspirations and a ray of hope"></span>
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
            <div className="cartHolder page-view-candidate listView" data-vars-cardtype="opinion" data-vars-storyid="101617471788883" data-vars-storytype="story" data-weburl="https://www.hindustantimes.com/opinion/some-grown-ups-just-don-t-seem-to-remember-this-simple-funda-101617471788883.html" data-vars-section="opinion" data-vars-orderid="4">
            <figure>
            <a href="/opinion/some-grown-ups-just-don-t-seem-to-remember-this-simple-funda-101617471788883.html101617471788883">
            <img data-src="https://images.hindustantimes.com/img/2021/04/03/550x309/da265832-94a7-11eb-b10b-5920a68d5cf2_1617473467730.jpg" className="lazy" src="https://images.hindustantimes.com/default/550x309.jpg" alt="For all the loudspeaker people or LPs in their lives" title="For all the loudspeaker people or LPs in their lives" />
            </a>
            <figcaption>For all the loudspeaker people or LPs in their lives</figcaption>
            </figure>
            <div className="storyShortDetail">
            <div className="catName pt10"><a href="/opinion">opinion</a></div>
            <h2 className="hdg3">
            <a href="/opinion/some-grown-ups-just-don-t-seem-to-remember-this-simple-funda-101617471788883.html101617471788883">
            A Calmer You by Sonal Kalra: Some grown-ups just don’t seem to remember this simple ‘funda’
            </a>
            </h2>
            <div className="stroyPub">
            <div className="storyBy">
            By Sonal Kalra
            </div>
            <div className="dateTime">UPDATED ON APR 03, 2021 11:41 PM IST</div>
            </div>
            <div className="sortDec">This week, we talk about bosses, spouses, parents, teachers — ‘Loudspeaker people’ can come in any form or size. Their funda during an argument is simple and SO wrong — forget about the content, focus on the volume. Here’s how to deal with them</div>
            <div className="actionDiv">
            <div className="socialEl">
            <span className="bookmark bookmark-candidate" title="bookmark101617471788883"></span>
            <span className="share share-candidate" title="share" ></span>
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
            <a href="/opinion" data-id="viewmore_opinion,1" className="view">
            <span>View All</span>
            </a>
            </div>
            </section>
           
            </section>
            </section>
        </div>
    )
}

export default Omega

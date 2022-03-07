import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LG from "../components/LG/Lg";
import Amd, {
  AmdAmazon,
  AmdDesire,
  AmdQ2_2,
  AmdQ2,
  AmdFlipkart,
  AmdMerc,
  AmdMerc2,
  AmdInteractive,
  Amd1,
  Amd2,
  Amd3,
  Amd4,
  AmdPremiumSku,
} from "../components/Amd/Amd";
import Homepage from "../Home/Homepage";
import Dabur3 from "../components/dabar/Dabur3";
import Vega from "../components/Vega/Vega";
import Audi from "../components/Audi/Audi";
import Swap from "../components/Swap/Swap";
import Poco from "../components/Poco/Poco";
import Vivo from "../components/Vivo/Vivo";
import Govo from "../components/govo/Govo";
import Boat from "../components/Boat/Boat";
import Upes from "../components/upes/Upes";
import Swipe from "../components/Jnto/Jnto";
import Omega from "../components/Omega/Omega";
import Clark from "../components/Clark/Clark";
import Login from "../components/Login/Login";
import AmdF1 from "../components/AmdF1/AmdF1";
import Whywait from "../components/w2/Whywait";
import W2viral from "../components/w2/W2viral";
import Oppo from "../components/oppo_days/Oppo";
import Whywait2 from "../components/w2/Whywait2";
import VegaOne from "../components/Vega/VegaOne";
import VegaTwo from "../components/Vega/VegaTwo";
import Play from "../components/Playground/Play";
import Lomega from "../components/OmegaLib/Omega";
import Oppo_1 from "../components/Oppo/Oppo1/Oppo";
import Philips from "../components/Philips/Philips";
import Gocrush from "../components/gocrush/Gocrush";
import HindustanLayout from "../hoc/HindustanLayout";
import VegaThree from "../components/Vega/VegaThree";
import Pana from "../components/Panasonic/Panasonic";
import Mercedes from "../components/Mercedes/Mercedes";
import Lmerc from "../components/MercedesLib/Mercedes";
import _24Seven from "../components/_24Seven/_24seven";
import UcookVideoPlayer from "../components/Ucook/Ucook";
import Bodyshop4 from "../components/Bodyshop/Bodyshop4";
import Bodyshop5 from "../components/Bodyshop/Bodyshop5";
import Bodyshop6 from "../components/Bodyshop/Bodyshop6";
import Mamaearth from "../components/Mamaearth/Mamaearth";
import Asics, { AsicsO } from "../components/Asics/Asics";
import Dabar, { Dabur2 } from "../components/dabar/Dabar";
import Envorincs from "../components/Envorincs/Envorincs";
import Blackberrys from "../components/Blackberrys/Blackberrys";
import Boddess, { Boddess2, Boddess3 } from "../components/boddess/Boddess";
import BB2 from "../components/Blackberrys/BbCarrousel/Blackberrys";
import BB1 from "../components/Blackberrys/BlackberrysOne/Blackberrys";
import Ghadi, { GhadiTwo, GhadiThree } from "../components/Ghadi/Ghadi";
import BB3 from "../components/Blackberrys/BlackberrysThree/Blackberrys";
import WC1 from "../components/Blackberrys/WeddingCollection/Looks/Looks";
import Audientes, { AudientesTwo } from "../components/Audientes/Audientes";
import WC3 from "../components/Blackberrys/WeddingCollection/Shake/ShakeAd";
import Ucook1, { Ucook2, Ucook3, UcookI } from "../components/ucook_va/Ucook";
import Bodyshop, {
  Bodyshop2,
  Bodyshop3,
} from "../components/Bodyshop/Bodyshop";
import WC2 from "../components/Blackberrys/WeddingCollection/WeddingVideo/Blackberrys";
import CreateLink from "../hoc/CreateLink";
import BlankPage from "../hoc/BlankPage";
import HinduTimes from "../hoc/HinduTimes";
import Wildstone, { Wildston2 } from "../components/wildstone/Wildstone";
import Jnto1, { Jnto2 } from "../components/Jnto/Jnto1";
import Omega1, { Omega2 } from "../components/Omega/Omega1";
import Zandu, { ZanduParallax } from "../components/zandu/zandu";

const HindustanRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <HindustanLayout>
        <Component {...props}></Component>
      </HindustanLayout>
    )}
  ></Route>
);

function App() {
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/amd" component={Amd} />
          <Route path="/poco" component={Poco} />
          <Route path="/boat" component={Boat} />
          <Route path="/audi" component={Audi} />
          <Route path="/play" component={Play} />
          <Route path="/swap" component={Swap} />
          <Route path="/vivo" component={Vivo} />
          <Route path="/govo" component={Govo} />
          <Route path="/jnto" component={Swipe} />
          <Route path="/merc" component={Lmerc} />
          <Route path="/omega" component={Omega} />
          <Route path="/clark" component={Clark} />
          <Route path="/ghadi" component={Ghadi} />
          <Route path="/asics" component={Asics} />
          <Route path="/omeg" component={Lomega} />
          <Route path="/oppo" component={Oppo_1} />
          <Route path="/amd_f1" component={AmdF1} />
          <Route path="/oppo_days" component={Oppo} />
          <Route path="/amd320x480" component={Amd1} />
          <Route path="/amd300x250" component={Amd2} />
          <Route path="/w2viral" component={W2viral} />
          <Route path="/ucook_1/" component={Ucook1} />
          <Route path="/whywait" component={Whywait} />
          <Route path="/ucook_2/" component={Ucook2} />
          <Route path="/ucook_3/" component={Ucook3} />
          <Route path="/ucook_i/" component={UcookI} />
          <Route path="/ghadi_2" component={GhadiTwo} />
          <Route path="/gocrush/" component={Gocrush} />
          <Route path="/jnto_tohoku" component={Jnto1} />
          <Route path="/_24seven" component={_24Seven} />
          <Route path="/bodyshop" component={Bodyshop} />
          <Route path="/mercedes" component={Mercedes} />
          <Route path="/mercedes" component={Mercedes} />
          <Route path="/whywait2" component={Whywait2} />
          <Route path="/jnto_tohoku2" component={Jnto2} />
          <Route path="/ghadi_3" component={GhadiThree} />
          <Route path="/audientes" component={Audientes} />
          <Route path="/envorincs" component={Envorincs} />
          <Route path="/blackberrys_one" component={BB1} />
          <Route path="/bodyshop4" component={Bodyshop4} />
          <Route path="/bodyshop5" component={Bodyshop5} />
          <Route path="/bodyshop6" component={Bodyshop6} />
          <Route path="/blackberrys_two" component={BB2} />
          <Route path="/wildstone" component={Wildstone} />
          <Route path="/amd_desire" component={AmdDesire} />
          <Route path="/mama_earth" component={Mamaearth} />
          <Route path="/asics_olympics" component={AsicsO} />
          <Route path="/blackberrys_three" component={BB3} />
          <Route path="/vega_flipkart" component={VegaTwo} />
          <Route path="/vega_amazon" component={VegaThree} />
          <Route path="/amd_amazon" component={AmdAmazon} />
          <Route path="/wedding_collection1" component={WC1} />
          <Route path="/wedding_collection2" component={WC2} />
          <Route path="/wedding_collection3" component={WC3} />
          <Route path="/blackberrys" component={Blackberrys} />
          <Route path="/amd_merc_q2_2021" component={AmdMerc} />
          <Route path="/ucook/" component={UcookVideoPlayer} />
          <Route path="/amd_flipkart" component={AmdFlipkart} />
          <Route path="/amd_premium_sku" component={AmdPremiumSku} />
          <Route path="/amd_interactive" component={AmdInteractive} />
          <Route path="/amd_merc_300x250_q2_2021" component={AmdMerc2} />
          <Route path="/amd_q2_commercials_320x480" component={AmdQ2} />
          <Route path="/amd_q2_commercials_320x480_2" component={AmdQ2_2} />
          <Route path="/philipss" component={Philips} />
          <Route path="/omega_ad" component={Omega1} />
          <Route path="/createlink" component={CreateLink} />
          <Route path="/parallax_sample" component={Wildston2} />
          <HindustanRoute path="/zanduparallax" component={ZanduParallax} />
          <HindustanRoute path="/zandu" component={Zandu} />
          <HindustanRoute path="/lg" component={LG} />
          <HindustanRoute path="/amd3" component={Amd3} />
          <HindustanRoute path="/vega" component={Vega} />
          <HindustanRoute path="/upes" component={Upes} />
          <HindustanRoute path="/dabur" component={Dabar} />
          <HindustanRoute path="/dabur2" component={Dabur2} />
          <HindustanRoute path="/omega_2" component={Omega2} />
          <HindustanRoute path="/dabur_c" component={Dabur3} />
          <HindustanRoute path="/panasonic" component={Pana} />
          <HindustanRoute path="/philips" component={Philips} />
          <HindustanRoute path="/boddess" component={Boddess} />
          <HindustanRoute path="/boddess2" component={Boddess2} />
          <HindustanRoute path="/vega_women" component={VegaOne} />
          <HindustanRoute path="/bodyshop2" component={Bodyshop2} />
          <HindustanRoute path="/bodyshop3" component={Bodyshop3} />
          <HindustanRoute path="/audientes_2" component={AudientesTwo} />
          <HindustanRoute path="/amd_q1_22_component" component={Amd4} />
          <HindustanRoute path="/boddess_valentines1" component={Boddess3} />

          <Route path="/:dimension/bp/:creative" component={BlankPage} />
          <Route path="/:dimension/ht/:creative" component={HinduTimes} />

          <Route exact path="/">
            {!password ? <Login setPassword={setPassword} /> : <Homepage />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

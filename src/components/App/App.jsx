import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LG from "../LG/Lg";
import Amd, {
  AmdAmazon,
  AmdDesire,
  AmdQ2_2,
  AmdQ2,
  AmdFlipkart,
  AmdMerc,
  AmdMerc2,
  AmdInteractive,
} from "../Amd/Amd";
import Vega from "../Vega/Vega";
import Audi from "../Audi/Audi";
import Swap from "../Swap/Swap";
import Poco from "../Poco/Poco";
import Vivo from "../Vivo/Vivo";
import Govo from "../govo/Govo";
import Boat from "../Boat/Boat";
import Upes from "../upes/Upes";
import Swipe from "../Jnto/Jnto";
import Omega from "../Omega/Omega";
import Clark from "../Clark/Clark";
import Login from "../Login/Login";
import AmdF1 from "../AmdF1/AmdF1";
import Whywait from "../w2/Whywait";
import W2viral from "../w2/W2viral";
import Oppo from "../oppo_days/Oppo";
import Whywait2 from "../w2/Whywait2";
import VegaOne from "../Vega/VegaOne";
import VegaTwo from "../Vega/VegaTwo";
import Play from "../Playground/Play";
import Lomega from "../OmegaLib/Omega";
import Homepage from "../Home/Homepage";
import Ucook1, { Ucook2, Ucook3, UcookI } from "../ucook_va/Ucook";
import Oppo_1 from "../Oppo/Oppo1/Oppo";
import Philips from "../Philips/Philips";
import Gocrush from "../gocrush/Gocrush";
import VegaThree from "../Vega/VegaThree";
import Pana from "../Panasonic/Panasonic";
import Mercedes from "../Mercedes/Mercedes";
import Lmerc from "../MercedesLib/Mercedes";
import _24Seven from "../_24Seven/_24seven";
import UcookVideoPlayer from "../Ucook/Ucook";
import Mamaearth from "../Mamaearth/Mamaearth";
import Asics, { AsicsO } from "../Asics/Asics";
import Dabar, { Dabur2 } from "../dabar/Dabar";
import Envorincs from "../Envorincs/Envorincs";
import Blackberrys from "../Blackberrys/Blackberrys";
import BB2 from "../Blackberrys/BbCarrousel/Blackberrys";
import BB1 from "../Blackberrys/BlackberrysOne/Blackberrys";
import Ghadi, { GhadiTwo, GhadiThree } from "../Ghadi/Ghadi";
import BB3 from "../Blackberrys/BlackberrysThree/Blackberrys";
import WC1 from "../Blackberrys/WeddingCollection/Looks/Looks";
import Audientes, { AudientesTwo } from "../Audientes/Audientes";
import WC3 from "../Blackberrys/WeddingCollection/Shake/ShakeAd";
import WC2 from "../Blackberrys/WeddingCollection/WeddingVideo/Blackberrys";
import HindustanLayout from "../../hoc/HindustanLayout";
import Boddess, { Boddess2 } from "../boddess/Boddess";
import Bodyshop4 from "../Bodyshop/Bodyshop4";
import Bodyshop5 from "../Bodyshop/Bodyshop5";
import Bodyshop6 from "../Bodyshop/Bodyshop6";
import Bodyshop, { Bodyshop2, Bodyshop3 } from "../Bodyshop/Bodyshop";

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
          <Route path="/w2viral" component={W2viral} />
          <Route path="/ucook_1/" component={Ucook1} />
          <Route path="/whywait" component={Whywait} />
          <Route path="/ucook_2/" component={Ucook2} />
          <Route path="/ucook_3/" component={Ucook3} />
          <Route path="/ucook_i/" component={UcookI} />
          <Route path="/ghadi_2" component={GhadiTwo} />
          <Route path="/gocrush/" component={Gocrush} />
          <Route path="/_24seven" component={_24Seven} />
          <Route path="/bodyshop" component={Bodyshop} />
          <Route path="/mercedes" component={Mercedes} />
          <Route path="/mercedes" component={Mercedes} />
          <Route path="/whywait2" component={Whywait2} />
          <Route path="/ghadi_3" component={GhadiThree} />
          <Route path="/audientes" component={Audientes} />
          <Route path="/envorincs" component={Envorincs} />
          <Route path="/blackberrys_one" component={BB1} />
          <Route path="/bodyshop4" component={Bodyshop4} />
          <Route path="/bodyshop5" component={Bodyshop5} />
          <Route path="/bodyshop6" component={Bodyshop6} />
          <Route path="/blackberrys_two" component={BB2} />
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
          <Route path="/ucook/" component={UcookVideoPlayer} />
          <Route path="/amd_merc_q2_2021" component={AmdMerc} />
          <Route path="/amd_flipkart" component={AmdFlipkart} />
          <Route path="/amd_interactive" component={AmdInteractive} />
          <Route path="/amd_merc_300x250_q2_2021" component={AmdMerc2} />
          <Route path="/amd_q2_commercials_320x480" component={AmdQ2} />
          <Route path="/amd_q2_commercials_320x480_2" component={AmdQ2_2} />
          <Route path="/philipss" component={Philips} />
          <HindustanRoute path="/lg" component={LG} />
          <HindustanRoute path="/vega" component={Vega} />
          <HindustanRoute path="/upes" component={Upes} />
          <HindustanRoute path="/dabur" component={Dabar} />
          <HindustanRoute path="/dabur2" component={Dabur2} />
          <HindustanRoute path="/panasonic" component={Pana} />
          <HindustanRoute path="/boddess" component={Boddess} />
          <HindustanRoute path="/boddess2" component={Boddess2} />
          <HindustanRoute path="/philips" component={Philips} />
          <HindustanRoute path="/vega_women" component={VegaOne} />
          <HindustanRoute path="/bodyshop2" component={Bodyshop2} />
          <HindustanRoute path="/bodyshop3" component={Bodyshop3} />
          <HindustanRoute path="/audientes_2" component={AudientesTwo} />
          <Route exact path="/">
            {!password ? <Login setPassword={setPassword} /> : <Homepage />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

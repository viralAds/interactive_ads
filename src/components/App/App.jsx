import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LG from "../LG/Lg";
import Amd from "../Amd/Amd";
import Vega from "../Vega/Vega";
import Audi from "../Audi/Audi";
import Swap from "../Swap/Swap";
import Poco from "../Poco/Poco";
import Vivo from "../Vivo/Vivo";
import Govo from "../govo/Govo";
import Boat from "../Boat/Boat";
import Upes from "../upes/Upes";
import Swipe from "../Jnto/Jnto";
import Asics from "../Asics/Asics";
import Omega from "../Omega/Omega";
import Clark from "../Clark/Clark";
import Login from "../Login/Login";
import AmdF1 from "../AmdF1/AmdF1";
import Ghadi from "../Ghadi/Ghadi";
import Dabar from "../dabar/Dabar";
import Dabur2 from "../dabar/Dabur2";
import Oppo from "../oppo_days/Oppo";
import VegaOne from "../Vega/VegaOne";
import VegaTwo from "../Vega/VegaTwo";
import VegaThree from "../Vega/VegaThree";
import Play from "../Playground/Play";
import Lomega from "../OmegaLib/Omega";
import Homepage from "../Home/Homepage";
import Ucook1 from "../ucook_va/Ucook1";
import Oppo_1 from "../Oppo/Oppo1/Oppo";
import Ucook3 from "../ucook_va/Ucook3";
import Ucook2 from "../ucook_va/Ucook2";
import UcookI from "../ucook_va/UcookI";
import Philips from "../Philips/Philips";
import Gocrush from "../gocrush/Gocrush";
import AmdMerc from "../AmdMerc/AmdMerc";
import GhadiTwo from "../Ghadi/GhadiTwo";
import Bodyshop2 from "../Bodyshop/Bodyshop2";
import Pana from "../Panasonic/Panasonic";
import AmdMerc2 from "../AmdMerc2/AmdMerc";
import Mercedes from "../Mercedes/Mercedes";
import Lmerc from "../MercedesLib/Mercedes";
import _24Seven from "../_24Seven/_24seven";
import Bodyshop from "../Bodyshop/Bodyshop";
import AsicsO from "../Asics/AsicsOlympics";
import AmdDesire from "../Amd_gwd/AmdDesire";
import GhadiThree from "../Ghadi/GhadiThree";
import UcookVideoPlayer from "../Ucook/Ucook";
import Amd_Amazon from "../Amd_gwd/AmdAmazon";
import Mamaearth from "../Mamaearth/Mamaearth";
import Audientes from "../Audientes/Audientes";
import Envorincs from "../Envorincs/Envorincs";
import Amd_Flipkart from "../Amd_gwd/AmdFlipkart";
import AudientesTwo from "../Audientes/AudientesTwo";
import Blackberrys from "../Blackberrys/Blackberrys";
import BB2 from "../Blackberrys/BbCarrousel/Blackberrys";
import BB1 from "../Blackberrys/BlackberrysOne/Blackberrys";
import BB3 from "../Blackberrys/BlackberrysThree/Blackberrys";
import AmdQ2_1 from "../amd_q2_commercials_320x480/component1";
import AmdQ2_2 from "../amd_q2_commercials_320x480/component2";
import WC1 from "../Blackberrys/WeddingCollection/Looks/Looks";
import WC3 from "../Blackberrys/WeddingCollection/Shake/ShakeAd";
import WC2 from "../Blackberrys/WeddingCollection/WeddingVideo/Blackberrys";
import HindustanLayout from "../../hoc/HindustanLayout";
import Boddess from "../boddess/Boddess";
import Bodyshop3 from "../Bodyshop/Bodyshop3";
import Bodyshop4 from "../Bodyshop/Bodyshop4";
import Bodyshop5 from "../Bodyshop/Bodyshop5";
import Whywait from "../w2/Whywait";
import Whywait2 from "../w2/Whywait2";
import W2viral from "../w2/W2viral";

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
          <Route path="/blackberrys_two" component={BB2} />
          <Route path="/amd_desire" component={AmdDesire} />
          <Route path="/mama_earth" component={Mamaearth} />
          <Route path="/asics_olympics" component={AsicsO} />
          <Route path="/blackberrys_three" component={BB3} />
          <Route path="/vega_flipkart" component={VegaTwo} />
          <Route path="/vega_amazon" component={VegaThree} />
          <Route path="/amd_amazon" component={Amd_Amazon} />
          <Route path="/wedding_collection1" component={WC1} />
          <Route path="/wedding_collection2" component={WC2} />
          <Route path="/wedding_collection3" component={WC3} />
          <Route path="/blackberrys" component={Blackberrys} />
          <Route path="/ucook/" component={UcookVideoPlayer} />
          <Route path="/amd_merc_q2_2021" component={AmdMerc} />
          <Route path="/amd_flipkart" component={Amd_Flipkart} />
          <Route path="/amd_merc_300x250_q2_2021" component={AmdMerc2} />
          <Route path="/amd_q2_commercials_320x480" component={AmdQ2_1} />
          <Route path="/amd_q2_commercials_320x480_2" component={AmdQ2_2} />
          <Route path="/philipss" component={Philips} />
          <HindustanRoute path="/lg" component={LG} />
          <HindustanRoute path="/vega" component={Vega} />
          <HindustanRoute path="/upes" component={Upes} />
          <HindustanRoute path="/dabur" component={Dabar} />
          <HindustanRoute path="/dabur2" component={Dabur2} />
          <HindustanRoute path="/panasonic" component={Pana} />
          <HindustanRoute path="/boddess" component={Boddess} />
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

import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "../Home/Homepage";
import Omega from "../Omega/Omega";
import Mercedes from "../Mercedes/Mercedes";
import Lomega from "../OmegaLib/Omega";
import Lmerc from "../MercedesLib/Mercedes";
import Play from "../Playground/Play";
import Audi from "../Audi/Audi";
import Swap from "../Swap/Swap";
import Swipe from "../Jnto/Jnto";
import Clark from "../Clark/Clark";
import Pana from "../Panasonic/Panasonic";
import Philips from "../Philips/Philips";
import Asics from "../Asics/Asics";
import AsicsO from "../Asics/AsicsOlympics";
import LG from "../LG/Lg";
import Poco from "../Poco/Poco";
import Amd from "../Amd/Amd";
import Amd_Amazon from "../Amd_gwd/AmdAmazon";
import Amd_Flipkart from "../Amd_gwd/AmdFlipkart";
import Oppo_1 from "../Oppo/Oppo1/Oppo";

import Blackberrys from "../Blackberrys/Blackberrys";
import BB1 from "../Blackberrys/BlackberrysOne/Blackberrys";
import BB2 from "../Blackberrys/BbCarrousel/Blackberrys";
import BB3 from "../Blackberrys/BlackberrysThree/Blackberrys";
import WC1 from "../Blackberrys/WeddingCollection/Looks/Looks";
import WC2 from "../Blackberrys/WeddingCollection/WeddingVideo/Blackberrys";
import WC3 from "../Blackberrys/WeddingCollection/Shake/ShakeAd";
import AmdMerc from "../AmdMerc/AmdMerc";
import AmdMerc2 from "../AmdMerc2/AmdMerc";
import AmdF1 from "../AmdF1/AmdF1";
import _24Seven from "../_24Seven/_24seven";
import Login from "../Login/Login";
import AmdQ2_1 from "../amd_q2_commercials_320x480/component1";
import AmdQ2_2 from "../amd_q2_commercials_320x480/component2";
import Ghadi from "../Ghadi/Ghadi";
import GhadiTwo from "../Ghadi/GhadiTwo";
import GhadiThree from "../Ghadi/GhadiThree";
import Vega from "../Vega/Vega";
import VegaOne from "../Vega/VegaOne";
import Envorincs from "../Envorincs/Envorincs";
import Vivo from "../Vivo/Vivo";
import Oppo from "../oppo_days/Oppo";

import Boat from "../Boat/Boat";
import Mamaearth from "../Mamaearth/Mamaearth";
function App() {
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/mama_earth" component={Mamaearth} />
          <Route path="/boat" component={Boat} />
          <Route path="/mercedes" component={Mercedes} />
          <Route path="/omega" component={Omega} />
          <Route path="/audi" component={Audi} />
          <Route path="/play" component={Play} />
          <Route path="/swap" component={Swap} />
          <Route path="/blackberrys" component={Blackberrys} />
          <Route path="/clark" component={Clark} />
          <Route path="/philips" component={Philips} />
          <Route path="/panasonic" component={Pana} />
          <Route path="/asics" component={Asics} />
          <Route path="/asics_olympics" component={AsicsO} />
          <Route path="/jnto" component={Swipe} />
          <Route path="/blackberrys_one" component={BB1} />
          <Route path="/blackberrys_two" component={BB2} />
          <Route path="/blackberrys_three" component={BB3} />
          <Route path="/merc" component={Lmerc} />
          <Route path="/omeg" component={Lomega} />
          <Route path="/lg" component={LG} />
          <Route path="/poco" component={Poco} />
          <Route path="/amd" component={Amd} />
          <Route path="/amd_amazon" component={Amd_Amazon} />
          <Route path="/amd_flipkart" component={Amd_Flipkart} />
          <Route path="/oppo" component={Oppo_1} />
          <Route path="/amd_merc_q2_2021" component={AmdMerc} />
          <Route path="/amd_merc_300x250_q2_2021" component={AmdMerc2} />
          <Route path="/amd_f1" component={AmdF1} />
          <Route path="/wedding_collection1" component={WC1} />
          <Route path="/wedding_collection2" component={WC2} />
          <Route path="/wedding_collection3" component={WC3} />
          <Route path="/_24seven" component={_24Seven} />
          <Route path="/amd_q2_commercials_320x480" component={AmdQ2_1} />
          <Route path="/amd_q2_commercials_320x480_2" component={AmdQ2_2} />
          <Route path="/ghadi" component={Ghadi} />
          <Route path="/ghadi_2" component={GhadiTwo} />
          <Route path="/ghadi_3" component={GhadiThree} />
          <Route path="/vega" component={Vega} />
          <Route path="/vega_women" component={VegaOne} />
          <Route path="/envorincs" component={Envorincs} />
          <Route path="/vivo" component={Vivo} />
          <Route path="/oppo_days" component={Oppo} />

          <Route exact path="/">
            {!password ? <Login setPassword={setPassword} /> : <Homepage />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

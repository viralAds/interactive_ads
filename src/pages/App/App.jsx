import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from '../Home/Homepage';
import Omega from '../Omega/Omega';
import Mercedes from '../Mercedes/Mercedes';
import Lomega from '../OmegaLib/Omega';
import Lmerc from '../MercedesLib/Mercedes';
import Play from '../Playground/Play';
import Audi from '../Audi/Audi';
import Swap from '../Swap/Swap';
import Swipe from '../Jnto/Jnto';
import Clark from '../Clark/Clark';
import Pana from '../Panasonic/Panasonic';
import Philips from '../Philips/Philips';
import Asics from '../Asics/Asics';
import LG from '../LG/Lg';
import Poco from '../Poco/Poco';
import Amd from '../Amd/Amd';
import Amd_Amazon from '../Amd_gwd/AmdAmazon';
import Amd_Flipkart from '../Amd_gwd/AmdFlipkart';
import Oppo_1 from '../Oppo/Oppo1/Oppo'

import Blackberrys from '../Blackberrys/Blackberrys';
import BB1 from '../Blackberrys/BlackberrysOne/Blackberrys';
import BB2 from '../Blackberrys/BbCarrousel/Blackberrys';
import BB3 from '../Blackberrys/BlackberrysThree/Blackberrys';
import WC1 from '../Blackberrys/WeddingCollection/Looks/Looks';
import WC2 from '../Blackberrys/WeddingCollection/WeddingVideo/Blackberrys';
import WC3 from '../Blackberrys/WeddingCollection/Shake/ShakeAd';
import AmdMerc from '../AmdMerc/AmdMerc';
import AmdMerc2 from '../AmdMerc2/AmdMerc';
import AmdF1 from '../AmdF1/AmdF1'
import _24Seven from '../_24Seven/_24seven'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
            <Route path="/home" component={Homepage} />
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
            <Route exact path="/" component={Homepage} /> 
            
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


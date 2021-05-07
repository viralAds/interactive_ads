import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from '../Home/Homepage';
import Omega from '../Omega/Omega';
import Mercedes from '../Mercedes/Mercedes';
import Lomega from '../OmegaLib/Omega';
import Lmerc from '../MercedesLib/Mercedes';
import Play from '../Playground/Play';
import Blackberrys from '../Blackberrys/Blackberrys';
import BB1 from '../Blackberrys/BlackberrysOne/Blackberrys';
import BB2 from '../Blackberrys/BlackberrysTwo/Blackberrys';
import BB3 from '../Blackberrys/BlackberrysThree/Blackberrys';
import Audi from '../Audi/Audi';
import Swap from '../Swap/Swap';
import Swipe from '../Jnto/Jnto';
import Clark from '../Clark/Clark';
import Pana from '../Panasonic/Panasonic';
import Philips from '../Philips/Philips';
import Asics from '../Asics/Asics';
import LG from '../LG/Lg';
import Poco from '../Poco/Poco';

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
            <Route exact path="/" component={Homepage} /> 
            
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


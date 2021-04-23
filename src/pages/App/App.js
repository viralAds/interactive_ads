import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from '../Home/Homepage';
import Omega from '../Omega/Omega';
import Mercedes from '../Mercedes/Mercedes';
import Lomega from '../OmegaLib/Omega';
import Lmerc from '../MercedesLib/Mercedes';
import Play from '../Playground/Play';
import Blackberrys from '../Blackberrys/Blackberrys';
import Audi from '../Audi/Audi';

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
            <Route path="/blackberrys" component={Blackberrys} /> 

            <Route path="/merc" component={Lmerc} />
            <Route path="/omeg" component={Lomega} />
            <Route exact path="/" component={Homepage} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

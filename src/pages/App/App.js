import React, { Suspense } from 'react';
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

// const Homepage = React.lazy(() =>  import('../Home/Homepage'));
// const Omega = React.lazy(() =>  import('../Omega/Omega'));
// const Audi = React.lazy(() =>  import('../Audi/Audi'));
// const Play = React.lazy(() =>  import('../Playground/Play'));
// const Mercedes = React.lazy(() =>  import('../Mercedes/Mercedes'));
// const Lmerc = React.lazy(() =>  import('../MercedesLib/Mercedes'));
// const Lomega = React.lazy(() =>  import('../OmegaLib/Omega'));
// const Blackberrys = React.lazy(() =>  import('../Blackberrys/Blackberrys'));

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

import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../Home/Homepage';
import Mercedes from '../Mercedes/Mercedes';
import Omega from '../Omega/Omega';
import Lmerc from '../MercedesLib/Mercedes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>          
          <Route path="/home" component={Homepage} />
          <Route path="/mercedes" component={Mercedes} />
          <Route path="/omega" component={Omega} />

          <Route path="/merc" component={Lmerc} />
          <Route exact path="/" component={Lmerc} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

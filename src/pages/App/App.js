import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../Home/Homepage';
import Mercedes from '../Mercedes/Mercedes';
import Omega from '../Omega/Omega';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>          
          <Route path="/home" component={Homepage} />
          <Route path="/mercedes" component={Mercedes} />
          <Route path="/omega" component={Omega} />

          <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

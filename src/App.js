import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Invest from './pages/invest/Invest';
import How from './pages/how/How';
import Principals from './pages/principals/Principals';
import FAQ from './pages/FAQ/FAQ';
import SEC from './pages/SEC/SEC';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/invest-now">
          <Invest />
        </Route>
        <Route exact path="/how-it-works">
          <How />
        </Route>
        <Route exact path="/the-principals">
          <Principals />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/sec">
          <SEC />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import BitcoinRates from './BitcoinRates';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/vite-project/src/component/Home.jsx">Home</Link>
            </li>
            <li>
              <Link to="./component/Login.jsx">Login</Link>
            </li>
            <li>
              <Link to="./BitcoinRates.jsx">Bitcoin Rates</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/bitcoin-rates">
            <BitcoinRates />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;



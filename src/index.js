
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DevProfile from './DevProfile';
import HomePage from './HomePage';
import './index.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/developers/:developerId" component={DevProfile} />
          <Route exact path="/" component={HomePage} />
        </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
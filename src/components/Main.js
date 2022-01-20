import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Stock from './Stock';
import data from "./data"

function Main(props) {
  return (
    <main>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/stocks/:symbol"
            render={props => <Stock data={data} {...props} />}
          />
          <Route
            path="/stocks"
            render={props => <Dashboard {...props} data={data} />}
          />
      </Switch>
    </main>
  );
}

export default Main;
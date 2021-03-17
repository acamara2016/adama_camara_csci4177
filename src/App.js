import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Landing from './components/Landing';
import MovieDetails from './components/MovieDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie" component={MovieDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
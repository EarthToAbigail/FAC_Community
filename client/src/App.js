import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';
import Profile from './containers/Profile';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
          <Route exact path="/" component={Home} />
          <Route path="/:username" component={Profile} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

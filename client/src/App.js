import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  </div>
);

export default App;

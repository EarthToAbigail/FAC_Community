import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Editor from './components/Editor';
import Logout from './components/Logout';
import ErrorPage from './components/ErrorPage';
import KickOut from './components/KickOut';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:username" component={Profile} />
          <Route exact path="/:username/moments/edit" component={Editor} />
          <Route exact path="/:username/logout" component={Logout} />
          <Route exact path="/:username/not-a-member" component={KickOut} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

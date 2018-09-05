import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';

/////testing the page
import Admin from './components/RequestForm/RequestForm';
import Auto from './components/Email/autoResponse';
import FollowUp from './components/Email/followUp';
import RequestForm from './components/RequestForm/RequestForm'



import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
      {/*  All Testing route */}
        <Route
          path="/admin"
          component={Admin}
        />

        <Route
          path="/auto"
          component={Auto}
        />
                <Route
          path="/FollowUp"
          component={FollowUp}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
    <RequestForm />
  </div>
);

export default App;

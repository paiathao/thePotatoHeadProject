import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import AuthPage from './components/AuthPage/AuthPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';

/////testing the page
import Admin from './components/RequestForm/RequestForm';
import Auto from './components/Email/autoResponse';
import FollowUp from './components/Email/followUp';
import RequestForm from './components/RequestForm/RequestForm';

// import AutoComplete from './components/GoogleAutoComplete/AutoComplete';


import './styles/main.css';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/login"
          component={AuthPage}
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
          path="/Admin"
          component={Admin}
        />

        <Route
          path="/Auto"
          component={Auto}
        />
        <Route
          path="/FollowUp"
          component={FollowUp}
        />
        {/* <Route
          path="/AutoComplete"
          component={AutoComplete}
        /> */}
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
    <RequestForm />
    {/* <AutoComplete /> */}
  </div>
);

export default App;

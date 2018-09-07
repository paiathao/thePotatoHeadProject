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
import RequestForm from './components/RequestForm/RequestForm';
import Auto from './components/Email/autoResponse';
import FollowUp from './components/Email/followUp';
import AutoComplete from './components/GoogleAutoComplete/AutoComplete';
import Verification from './components/Verification/Verification';



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
          path="/form"
          component={RequestForm}
        />

        <Route
          path="/Auto"
          component={Auto}
        />
        <Route
          path="/FollowUp"
          component={FollowUp}
        />
  
        <Route
          path="/AutoComplete"
          component={AutoComplete}

        />

        />
        <Route
          path="/Verification"
          component={Verification}
        />


        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;

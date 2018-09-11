import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import AuthPage from './components/AuthPage/AuthPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';


import RequestForm from './components/RequestForm/RequestForm';
import AdminPortal from './components/AdminPortal/AdminPortal';

import AutoComplete from './components/GoogleAutoComplete/AutoComplete';


import './styles/main.css';

const App = () => (
  <div>
    <Router>
      <Switch>

        <Route
          path="/login"
          component={AuthPage}
        />

        <Route
          path="/reset-password/:token"
          component={AuthPage}
        />

        <Route
          path="/admin"
          component={AdminPortal}
        />

        <Route
          path="/form"
          component={RequestForm}
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
          path="/AutoComplete"
          component={AutoComplete}

        />

        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;

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

import RequestForm from './components/RequestForm/RequestForm';
import AdminPortal from './components/AdminPortal/AdminPortal';


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
          path="/admin"
          component={AdminPortal}
        />

        <Route
          path="/form"
          component={RequestForm}
        />

        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;

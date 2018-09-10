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
import Verification from './components/Verification/Verification';


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
<<<<<<< HEAD
        {/* <Route
          path="/Admin"
          component={Admin}
        /> */}

        {/* <Route
          path="/Auto"
          component={Auto}
        /> */}
        {/* <Route
          path="/FollowUp"
          component={FollowUp}
        /> */}
        <Route
          path="/AutoComplete"
          component={AutoComplete}
=======
  
        <Route
          path="/form"
          component={RequestForm}
        />

  
        <Route
          path="/AutoComplete"
          component={AutoComplete}

        />

>>>>>>> 1fc2a97b1b9f1aeaecbd90511b597edd2b5c9e44
        />
        <Route
          path="/Verification"
          component={Verification}
        />
<<<<<<< HEAD
        {/* OTHERWISE (no path!)*/}
        {/* <Route render={() => <h1>404</h1>} /> */}
=======


        <Route render={() => <h1>404</h1>} />
>>>>>>> 1fc2a97b1b9f1aeaecbd90511b597edd2b5c9e44

      </Switch>
    </Router>
  </div>
);

export default App;

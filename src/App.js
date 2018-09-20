import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleFetchUser } from './redux/actions/loginActions';

import AuthPage from './components/AuthPage/AuthPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import ForgotPage from './components/ForgotPassword/ForgotPassword'

import RequestForm from './components/RequestForm/RequestForm';
import AdminPortal from './components/AdminPortal/AdminPortal';
import AutoComplete from './components/GoogleAutoComplete/AutoComplete';
import googleMap from './components/Map/map'
import cluster from './components/Map/googleCluster'

import './styles/main.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleFetchUser());
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/admin" />
            <Route
              path="/login"
              component={AuthPage}
            />

            <Route
              path="/admin"
              component={AdminPortal}
            />

            <Route
              path="/reset-password/:token"
              component={AuthPage}
            />

            <Route
              path="/forgot"
              component={ForgotPage}
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
            <Route
              path="/cluster"
              component={cluster}

            />

            <Route
              path="/map"
              component={googleMap}

            />

            <Route render={() => <h1>404</h1>} />

          </Switch>
        </Router>
      </div>
    );
  };
};

export default connect()(App);

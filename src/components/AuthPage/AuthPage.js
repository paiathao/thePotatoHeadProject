import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';

import { Switch, Route } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import LandingPage from '../LandingPage/LandingPage';
import './AuthPage.css';

const mapStateToProps = (redux) => ({
  isAuthenticated: redux.auth.isAuthenticated,
  login: redux.login
});


class AuthPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirm: '',
    };
  }

  componentDidMount() {
    const { dispatch, isAuthenticated, history } = this.props;
    dispatch(clearError());
    if (isAuthenticated) {
      history.push('/admin');
    }
  }

  componentWillReceiveProps = ({ isAuthenticated, history }) => {
    if (isAuthenticated) {
      history.push('/admin');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.password === '') {
      this.props.dispatch(formError());
      alert('Please enter your password!')
    } else {
      this.props.dispatch(triggerLogin(this.state.password));
    }

  }

  resetPassword = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirm) {
      this.props.dispatch({
        type: 'RESET_PASSWORD',
        payload: this.state.password,
        token: this.props.match.params.token
      })
      this.props.history.push('/login');
    } else {
      alert('Password do not match! Please try again!')
    }
  }

  forgotPassword = () => {
    this.props.history.push('/forgot');
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h4
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h4>
      );
    }
    return null;
  }

  renderForm() {
    // conditionally renders either a login form or forgot password form
    // based on the current route url
    return (
      <Switch>

        <Route path="/reset-password/:token" render={(props) => (
          <form className="auth-form" onSubmit={this.resetPassword}>
            <label className="resetText">Password</label>
            <Input
              data-test="login-password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
            <label className="resetText">Confirm Password</label>
            <Input inputStyle={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              data-test="confirm-password"
              type="password"
              submitLabel="Submit"
              value={this.state.confirm}
              onChange={this.handleInputChangeFor('confirm')}
            />
          </form>
        )} />

        <Route path="/login" render={() => (
          <div>
            <form className="auth-form" onSubmit={this.login}>
              <label className="loginText">Password</label>
              <Input inputStyle={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                data-test="login-password"
                type="password"
                submitLabel="Login"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </form>
            <button className="forgotButton" onClick={this.forgotPassword}>Forgot Password?</button>
            {this.state.alert}
          </div>
        )} />

      </Switch>
    )
  }

  render() {

    return (
      <LandingPage>
        <div className="AuthPage">
          <Logo />
          {this.renderAlert()}

          {this.renderForm()}
        </div>
      </LandingPage>
    );
  }
}

AuthPage.defaultProps = {
  dispatch: () => { }
}

export { AuthPage };
export default connect(mapStateToProps)(AuthPage);


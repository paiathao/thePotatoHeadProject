import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';

import { Switch, Route } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import LandingPage from '../LandingPage/LandingPage';
import './AuthPage.css';

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
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
    } else {
      this.props.dispatch(triggerLogin(this.state.password));
    }
  }

  resetPassword = (event) => {
    event.preventDefault();
    if(this.state.password === this.state.confirm) {
      console.log('match')
      this.props.dispatch({
        type: 'RESET_PASSWORD', 
        payload: this.state.password,
        token: this.props.match.params.token
      })
      this.props.history.push('/login');
    } else {
      console.log('unmatch')
      alert('Password do not match! Please try again!')
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderForm() {
    return (
      <Switch>
        <Route path="/reset-password/:token" render={(props) => (
          <form className="auth-form" onSubmit={this.resetPassword}>
            <label className="resetText">Password</label>
            <Input className="passInput"
                data-test="login-password" 
                type="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            <label className="resetText">Confirm Password</label>
            <Input
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
            <Input
              data-test="login-password" 
              type="password"
              submitLabel="Login"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </form>
          <a href="#/forgot">Forgot Password?</a>
          </div>
        )} />

    </Switch>
    )
  }

  renderAlert() {
    const { login: { message } } = this.props;
    if (message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          { message }
        </h2>
      );
    }
    return null;
  }

  render() {
    return (
      <LandingPage>
        <div className="AuthPage">
          <Logo />

          { this.renderAlert() }

          { this.renderForm() }
        </div>
      </LandingPage>
    );
  }
}

AuthPage.defaultProps = {
  login: {
    message: ''
  },
  dispatch: () => {}
}

export { AuthPage };
export default connect(mapStateToProps)(AuthPage);

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
    this.props.dispatch(clearError());
  }

  componentWillReceiveProps = ({ isAuthenticated, history }) => {
    if (isAuthenticated) {
      history.push('/');
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

  resetPassword = event => {
    event.preventDefault();
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderForm() {
    return (
      <Switch>

        <Route path="/reset-password" render={() => (
          <form className="auth-form" onSubmit={this.resetPassword}>
            <Input
                data-test="login-password" 
                label="Password"
                type="password"
                submitLabel="Login"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            <Input
              data-test="confirm-password" 
              label="Confirm Password"
              type="password"
              submitLabel="Submit"
              value={this.state.confirm}
              onChange={this.handleInputChangeFor('confirm')}
            />
    
          </form>
        )} />

        <Route path="/login" render={() => (
          <form className="auth-form" onSubmit={this.login}>
            <Input
              data-test="login-password" 
              label="Password"
              type="password"
              submitLabel="Login"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </form>
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

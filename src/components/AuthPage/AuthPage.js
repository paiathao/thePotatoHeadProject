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
    console.log('reset', this.props.match.params.token)
    if(this.state.password === this.state.confirm) {
      console.log('match')
      this.props.dispatch({
        type: 'RESET_PASSWORD', 
        payload: this.state.password,
        token: this.props.match.params.token
      })
    } else {
      console.log('unmatch')
      alert('Password do not match! Please try again!')
    }
  }

  forgotPassword = event => {
    console.log('click forgot PW')
    this.props.dispatch({
      type: 'FORGOT_PASSWORD',
    })
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
            <Input
                data-test="login-password" 
                label="Password"
                type="password"
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
          <div>
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
          <button onClick={this.forgotPassword}>Forgot Password?</button>
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

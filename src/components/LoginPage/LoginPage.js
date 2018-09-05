import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import { Switch, Route } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import './LoginPage.css';


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
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

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName !== null) {
      this.props.history.push('user');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
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

        <Route path="/reset-password" render={() => (
          <form>
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
      <div className="LoginPage">
        <div className="content">
          <Logo />

          { this.renderAlert() }

          { this.renderForm() }

        </div>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  login: {
    message: ''
  },
  dispatch: () => {}
}

export { LoginPage };
export default connect(mapStateToProps)(LoginPage);

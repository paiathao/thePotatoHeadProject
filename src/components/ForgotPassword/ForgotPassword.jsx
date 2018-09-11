import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import LandingPage from '../LandingPage/LandingPage';
import '../AuthPage/AuthPage.css'

class ForgotPassword extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FORGOT_PASSWORD' })
  }

  render() {
    return (
      <LandingPage>
        <div className="AuthPage">
          <Logo />
          <p style={{color : '#6bcad0'}}>An email to reset your password has been sent to your inbox!</p>
        </div>
      </LandingPage>
    );
  }
}


export default connect()(ForgotPassword);

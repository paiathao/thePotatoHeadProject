import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../Main/Main';
import Header from '../Header/Header';


class AdminPortal extends Component {
  render() {
    reutnr (
      <Main>
        <Header />
      </Main>
    )
  }
}

export default connect()(AdminPortal);
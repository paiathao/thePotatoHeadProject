import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
});

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  render() {
    let content = null;

    if (this.props.isAuthenticated) {
      content = (
        <div>
          <p>
            Info Page
          </p>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);

import React, { Component } from 'react';
import './RequestList.css';

class RequestList extends Component {

  renderRequestItemsHeader() {
    return this.props.columns.map((col, i) => (
      <p key={i}>{col}</p>
    ));
  }

  renderRequestItems() {
    return this.props.data.map((row) => {
      return this.props.renderRow(row);
    });
  }

  render() {
    return (
      <div>
        <div className="RequestListHeader">
          { this.renderRequestItemsHeader() }
        </div>
        <ul>
          { this.renderRequestItems() }
        </ul>
      </div>
    )
  }
}

export default RequestList;
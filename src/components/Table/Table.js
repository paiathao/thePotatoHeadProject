import React, { Component } from 'react';

class Table extends Component {

  renderTableHeader() {
    return this.props.columns.map((col, i) => (
      <th key={i}>{col}</th>
    ));
  }

  renderTableRows() {
    return this.props.data.map((row) => {
      return this.props.renderRow(row);
    });
  }

  render() {
    return (
      <table style={{ borderSpacing: 0, margin: '16px' }}>
        <thead>
          <tr>
            { this.renderTableHeader() }
          </tr>
        </thead>
        <tbody>
          { this.renderTableRows() }
        </tbody>
      
      </table>
    )
  }
}

export default Table;
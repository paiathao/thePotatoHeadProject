import React, { Component } from 'react';

class Radiobox extends Component {

  render = () => {
    var msg;
    if (this.props.contactChecked === "true") {
      msg = 
      <div id="parentDiv">
        <p className="requestFormPtag">Parent Name(s):</p>
          <input
          type="text"
          placeholder="Parent Name(s)"
          onChange={this.props.handleInputChangeFor('parentName')}
          value={this.props.parentName}
        />
        <p className="requestFormPtag">Parent Email:</p>
          <input
          type="text"
          placeholder="Parent Email"
          onChange={this.props.handleInputChangeFor('parentEmail')}
          value={this.props.parentEmail}
        />
      </div>;
    } else {
      msg = "";
    }
    return (
      <div>
        <label htmlFor="parentContactYes"> Yes</label>
        <input
          type="radio"
          name="parentContact"
          value="true"
          onChange={this.props.handleInputChangeFor('contactChecked')}
        />
        <label htmlFor="parentContactNo" > No</label>
        <input
          type="radio"
          name="parentContact"
          value="false"
          onChange={this.props.handleClearParents}
        />
        {msg}
      </div>
    );
  }
};

export default Radiobox;
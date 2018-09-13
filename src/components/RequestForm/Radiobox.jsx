import React, { Component } from 'react';
import Input from '../Input/Input'
import RadioGroup from '../RadioGroup/RadioGroup';

class Radiobox extends Component {

  render = () => {
    var msg;
    if (this.props.contactChecked === "true") {
      msg = 
      <div id="parentDiv">
          <Input
          type="text"
          name="parentContact"
          label="Parent Name(s)"
          placeholder="Parent Name(s)"
          onChange={this.props.handleInputChangeFor('parentName')}
          value={this.props.parentName}
        />
          <Input
          type="text"
          name="parentContact"
          label="Parent Email"
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
        <RadioGroup 
          title="Radio Group"
          name="parentContact"
          onChange={this.handleInputChangeFor}
          data={[
            { value: 'true', label: 'Yes' },
            { value: 'false', label: 'No' }
          ]}
        />
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
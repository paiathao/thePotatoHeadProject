import React, { Component } from 'react';

class Checkbox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }
  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  }
  render = () => {


    var msg;
    if (this.state.checked) {
      msg = <div id="parentDiv">
        Parent Name(s):
          <input type="text" placeholder="Parent Name(s)" />
        <br />
        Parent Email:
          <input type="text" placeholder="Parent Email" />
      </div>;
    } else {
      msg = "";
    }
    return (
      <div>
        <label for="parentContact"> Yes</label>
          <input type="checkbox" name="parentContact" onChange={this.handleCheck} defaultChecked={this.state.checked} />
        
        {msg}
      </div>
    );
  }
};

export default Checkbox;
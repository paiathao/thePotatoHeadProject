import React, { Component } from 'react';

class Radiobox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }
  handleCheck = () => {
    if(this.state.checked === false){
      this.setState({ checked: !this.state.checked });
    } else {
      this.setState({
        checked: true
      })
    } 
  }

  handleUncheck = () => {
    this.setState({
      checked: false
    })
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
        <label for="parentContactYes"> Yes</label>
          <input type="radio" name="parentContact" onChange={this.handleCheck} defaultChecked={this.state.checked} />
          <label for="parentContactNo" > No</label>
          <input type="radio" name="parentContact" onChange={this.handleUncheck}/>
        
        {msg}
      </div>
    );
  }
};

export default Radiobox;
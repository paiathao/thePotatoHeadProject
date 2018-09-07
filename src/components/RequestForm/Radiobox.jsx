import React, { Component } from 'react';

class Radiobox extends Component {

  constructor(props) {
    super(props);


  }
  // handleCheck = () => {
  //   if(this.props.contactChecked === false){
  //     this.setState({ 
  //       contactChecked: !this.props.contactChecked });
  //   } else {
  //     this.setState({
  //       contactChecked: true
  //     })
  //   } 
  // }

  // handleUncheck = () => {
  //   this.setState({
  //     contactChecked: false
  //   })
  // }



  render = () => {
    var msg;
    if (this.props.contactChecked === "true") {
      msg = <div id="parentDiv">
        Parent Name(s):
          <input 
            type="text" 
            placeholder="Parent Name(s)" 
            onChange={this.props.handleInputChangeFor('parentName')} 
            value={this.props.parentName}
          />
        <br />
        Parent Email:
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
        <label for="parentContactYes"> Yes</label>
        <input type="radio" name="parentContact" value="true" onChange={this.props.handleInputChangeFor('contactChecked')} />
        <label for="parentContactNo" > No</label>
        <input type="radio" name="parentContact" value="false" onChange={this.props.handleClearParents} />
        {msg}
      </div>
    );
  }
};

export default Radiobox;
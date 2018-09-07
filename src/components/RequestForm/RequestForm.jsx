import React, { Component } from 'react';
// import { connect } from 'react-redux';
import BabyInfo from './BabyInfo';
import AutoComplete from '../GoogleAutoComplete/AutoComplete';
import Radiobox from './Radiobox';

import GoogleMap from '../Map/map'


class RequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberBabies: 1,
      checked: true,
    };
  }

  handleSubscribe = (event) => {
    this.setState({
      ...this.state,
      checked: !this.state.checked
    })
  }

  addAnotherBaby = () => {
    this.setState({
      numberBabies: this.state.numberBabies + 1
    });
  };

  removeBaby = () => {
    if (this.state.numberBabies > 1) {
      this.setState({
        numberBabies: this.state.numberBabies - 1
      })
    }
  }
  render() {
    console.log(this.state.numberBabies);

    let babyInfoArray = new Array(this.state.numberBabies).fill(null).map(
      (item, index) => <BabyInfo key="index" removeBaby={this.removeBaby} addAnotherBaby={this.addAnotherBaby} />)

    return (
      
      <div id="formDiv">
        <form onSubmit={e => e.preventDefault()}>
          <div id="babyInfoField">
            {babyInfoArray}
          </div>
          <br />
          <div id="contactDiv">
            <div id="nominatorDiv">
              Nominator Name:&nbsp;
                <input type="text" placeholder="Your Name" />
              <br />
              Nominator Email:&nbsp;
                <input type="text" placeholder="Your Email" />
              <br />
              <br />
              If you are not the parents,
              <br />
              would the parents like to be contacted?
              <Radiobox />
            </div>
            <br />
          </div>
          <br />
          <br />
          <AutoComplete />
          <br />
          <br />
          <div id="extrasDiv">
            <div id="notesDiv">
              <label for="specialNotes">Use this space if you would like us to include a<br /> personalized note with your Potato Head Package?</label>
              <br />
              <textarea id="specialNotes" rows="5" cols="40">
              </textarea>
            </div>
            <div id="subscribeDiv">
              <div >
                <input type="checkbox" name="subscribe" value="subscribe" onChange={this.handleSubscribe} checked />
                <label htmlFor="subscribe">&nbsp;I would like to <b>subscribe</b> to
                <br />the Potato Head Project newsletter</label>
              </div>
              <br />
              <input type="submit" value="Submit Request" />
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default RequestForm;
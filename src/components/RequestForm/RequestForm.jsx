import React, { Component } from 'react';
import { connect } from 'react-redux';
import BabyInfo from './BabyInfo';
import AutoComplete from '../GoogleAutoComplete/AutoComplete';
import Radiobox from './Radiobox';
import './RequestForm.css';
import Input from '../Input/Input';
import swal from 'sweetalert';

const BABY_OBJECT = {
  gender: '',
  lastName: '',
  firstName: '',
  birthDate: '',
  weightOunces: '',
  weightPounds: '',
  gestationDays: '',
  gestationWeeks: '',
}

class RequestForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      baby: [
        BABY_OBJECT
      ],
      subscription: null,
      nominatorName: '',
      nominatorEmail: '',
      contactChecked: false,
      parentName: '',
      parentEmail: '',
      personalNote: '',
      streetAddress: '',
      streetAddress2: '',
      floorNumber: '',
      roomNumber: '',
      city: '',
      state: '',
      postalcode: '',
      country: '',
      searchField: '',
    };
  }

  handleInputChangeForBaby = ({ index, name, value }) => {
    console.log(index, name, value);
    let babies = this.state.baby;
    babies[index][name] = value;
    this.setState({
      ...this.state,
      baby: babies
    });
  };


  addAnotherBaby = () => {
    this.setState({
      ...this.state,
      baby: [
        ...this.state.baby,
        BABY_OBJECT
      ]
    });
  };


  handleClearParents = () => {
    this.setState({
      ...this.state,
      parentName: '',
      parentEmail: '',
      contactChecked: "false"
    });
  };


  handleInputChangeFor = propertyName => (event) => {
    console.log(propertyName, event.target.value);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  };


  handleSubmit = () => {
    swal({
      title: "Thank You for requesting a Potato Head Package!\nPlease consider Donating at",
      content: <a href="https://www.thepotatoheadproject.org/donate">Donate</a>
      
    
    });
    
    //do this 
    // this.setState({
    //   ...this.state,
    //   submitButton: {
    //     ...this.state.submitButton,
    //     disabled: true
    //   }
    // })
  }


  handleSubscribe = (event) => {
    this.setState({
      ...this.state,
      subscription: !this.state.subscription
    });
  };


  removeBaby = () => {
    this.setState({
      ...this.state,
      baby: [
        this.state.baby.pop()
      ]
    });
  };



  render() {
    console.log(this.state);
    // mapping through how many times to render the babyInfoDiv
    let babyArray = this.state.baby.map((item, index) => (
      <BabyInfo
        key={index}
        babyIndex={index}
        handleInputChangeForBaby={this.handleInputChangeForBaby}
        removeBaby={this.removeBaby}
        addAnotherBaby={this.addAnotherBaby}
      />
    ));


    return (
      <div id="requestFormDiv">
        <form id="requestForm" onSubmit={e => e.preventDefault()}>
          {babyArray}
          <div id="contactDiv">
            <div id="nominatorDiv">
              <Input
                type="text"
                label="Your Name"
                placeholder="Your Name"
                onChange={this.handleInputChangeFor('nominatorName')}
              />
              <Input
                type="text"
                label="Your Email"
                placeholder="Your Email"
                onChange={this.handleInputChangeFor('nominatorEmail')}
              />
            </div>
            <div id="parentContactDiv">
              <p className="requestFormPtag">If you are not the parents,</p>
              <p className="requestFormPtag">would the parents like to be contacted?</p>
              <Radiobox contactChecked={this.state.contactChecked}
                handleInputChangeFor={this.handleInputChangeFor}
                handleClearInput={this.handleClearInput}
                handleClearParents={this.handleClearParents}
                parentName={this.state.parentName}
                parentEmail={this.state.parentEmail}
              />
            </div>
          </div>
          <AutoComplete
            handleInputChangeFor={this.handleInputChangeFor}
            streetAddress={this.state.streetAddress}
            streetAddress2={this.state.streetAddress2}
            floorNumber={this.state.floorNumber}
            roomNumber={this.state.roomNumber}
            city={this.state.city}
            state={this.state.state}
            postalcode={this.state.postalcode}
            country={this.state.country}
            searchField={this.state.searchField}
          />
          <div id="extrasDiv">
            <div id="notesDiv">
              <label htmlFor="specialNotes">
                <p className="requestFormPtag">Would you like to include</p>
                <p className="requestFormPtag"> a personalized note</p>
                <p className="requestFormPtag">with your Potato Head Package?</p>
              </label>
              <textarea
                id="specialNotes"
                rows="5"
                // cols="40"
                onChange={this.handleInputChangeFor('personalNote')}
              >
              </textarea>
              <div class="g-recaptcha" data-sitekey="6Ld-fG8UAAAAAJd3wpbVbW5IlaMrs3TBHd1R8_2x"></div>
            </div>
            <div id="subscribeAndSubmitDiv">
              <div id="subscribeAndCaptchaDiv">
                <div id="subscribeDiv">
                  <Input
                    type="checkbox"
                    name="subscribe"
                    value="subscribe"
                    onChange={this.handleSubscribe}
                  />
                  <label
                    htmlFor="subscribe">
                    <p className="requestFormPtag"><b>Subscribe</b> to the</p>
                    <p className="requestFormPtag">Potato Head Project newsletter</p>
                  </label>
                </div>
              </div>
              <div id="submitDiv">
                <input
                  type="submit"
                  className="Button"
                  value="Submit Request"
                  // onClick="alert('thank you for requesting!)"
                  onClick={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(RequestForm);
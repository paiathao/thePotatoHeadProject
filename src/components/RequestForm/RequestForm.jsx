import React, { Component } from 'react';
import { connect } from 'react-redux';
import BabyInfo from './BabyInfo';
import AutoComplete from '../GoogleAutoComplete/AutoComplete';
import Radiobox from './Radiobox';


class RequestForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      baby: [
        {
          birthDate: '',
          firstName: '',
          lastName: '',
          gender: '',
          gestationWeeks: '',
          gestationDays: '',
          weightPounds: '',
          weightOunces: '',
        }
      ],
      numberBabies: 1,
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


  handleSubscribe = (event) => {
    this.setState({
      ...this.state,
      subscription: !this.state.subscription
    })
  }


  handleInputChangeFor = propertyName => (event) => {
    console.log(propertyName, event.target.value);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }


  handleInputChangeForBaby = ({index, name, value}) => {
    console.log(index, name, value);

    let babies = this.state.baby;
    babies[index][name] = value;

    this.setState({
      ...this.state,
      baby: babies
    });
    
  }


  handleClearParents = () => {
    this.setState({
      ...this.state,
      parentName: '',
      parentEmail: '',
      contactChecked: "false"
    })
  }


  handleSubmit = () => {
    //do this 
  }


  addAnotherBaby = () => {
  //    this.setState({
  //     ...this.state,
  //     babies:{
  //       ...this.state.babies.push(this.state.baby)
  //     }
  //   })
    this.setState({
      numberBabies: this.state.numberBabies + 1
    })
   
  };


  removeBaby = () => {
    if (this.state.numberBabies > 1) {
      this.setState({
        numberBabies: this.state.numberBabies - 1
      })
    }
  }



  render() {
    console.log(this.state);
    // mapping through how many times to render the babyInfoDiv
    // switch to this eventually, once the babies array is set
    let babyInfoArray = this.state.baby.map(
    // let babyInfoArray = new Array(this.state.numberBabies).fill(null).map(
    (item, index) => (
      <BabyInfo 
        key={index}
        babyIndex={index} 
        handleInputChangeForBaby={this.handleInputChangeForBaby}
        removeBaby={this.removeBaby} 
        addAnotherBaby={this.addAnotherBaby} 
      />
    ))


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
                <input type="text" placeholder="Your Name" onChange={this.handleInputChangeFor('nominatorName')} />
              <br />
              Nominator Email:&nbsp;
                <input type="text" placeholder="Your Email" onChange={this.handleInputChangeFor('nominatorEmail')} />
              <br />
              <br />
              If you are not the parents,
              <br />
              would the parents like to be contacted?
              <Radiobox contactChecked={this.state.contactChecked}
                handleInputChangeFor={this.handleInputChangeFor}
                handleClearInput={this.handleClearInput}
                handleClearParents={this.handleClearParents}
                parentName={this.state.parentName}
                parentEmail={this.state.parentEmail}
              />
            </div>
            <br />
          </div>
          <br />
          <br />
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
          <br />
          <br />
          <div id="extrasDiv">
            <div id="notesDiv">
              <label for="specialNotes">Use this space if you would like us to include a<br /> personalized note with your Potato Head Package?</label>
              <br />
              <textarea id="specialNotes" rows="5" cols="40" onChange={this.handleInputChangeFor('personalNote')}>
              </textarea>
            </div>
            <div id="subscribeDiv">
              <div >
                <input type="checkbox" name="subscribe" value="subscribe" onChange={this.handleSubscribe} />
                <label htmlFor="subscribe">&nbsp;I would like to <b>subscribe</b> to
                <br />the Potato Head Project newsletter</label>
              </div>
              <br />
              <input type="submit" value="Submit Request" onSubmit={this.handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(RequestForm);
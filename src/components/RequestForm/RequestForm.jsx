import React, { Component } from 'react';
import { connect } from 'react-redux';
import BabyInfo from './BabyInfo';
import AutoComplete from '../GoogleAutoComplete/AutoComplete';
import Radiobox from './Radiobox';
import './RequestForm.css';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SubmitPopup from'../../components/SubmitPopup/SubmitPopup';

const MySwal = withReactContent(swal);

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
      hospitalName: ''
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
        {...BABY_OBJECT}
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
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  };



  handleSubmit = e => {
      e.preventDefault()
      this.props.dispatch({
        type: 'ADD_REQUEST',
        payload: this.state
      });
    //need submit action
    MySwal.fire({

      html:
        <SubmitPopup />,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Donate',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down">Close</i>',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then(function (result) {
      if (result.value) {
        window.location.href = 'https://www.thepotatoheadproject.org/donate';
      }
    })
  }


  handleSubscribe = (event) => {
    this.setState({
      ...this.state,
      subscription: !this.state.subscription
    });
  };


  removeBaby = (state, index) => {
    this.setState({
      ...this.state,
      baby: [
        this.state.baby.filter(a => a !== index)
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
      <div id="requestForm">
        <form onSubmit={this.handleSubmit}>

          {babyArray}    
        
          <div id="nominatorDiv">

            <div>
              <p>You</p>
            </div>

            <div>
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
          </div>



          <div id="parentContactDiv">

            <div>
              <p>The Parent</p>
            </div>

            <div className="parents-form">
              
              <Input
                label="Name"
                placeholder="Mary and Dave"
                onChange={this.handleInputChangeFor('parentName')}
              />
              <Input
                label="Email"
                placeholder="mary@yahoo.com"
                onChange={this.handleInputChangeFor('parentEmail')}
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
              <TextArea 
                name="personalNote"
                label="Personal Note"
                onChange={this.handleInputChangeFor}

              />
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
                <div class="g-recaptcha" data-sitekey="6Ld-fG8UAAAAAJd3wpbVbW5IlaMrs3TBHd1R8_2x"></div>
              </div>
              <div id="submitDiv">
                <input
                  type="submit"
                  className="Button"
                  value="Submit Request"
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
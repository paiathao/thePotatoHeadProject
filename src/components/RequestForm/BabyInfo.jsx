import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Input from '../Input/Input'


class BabyInfo extends Component {


  handleInputChangeForBaby = name => event => {
    console.log(name);
    this.props.handleInputChangeForBaby({
      name,
      value: event.target.value,
      index: this.props.babyIndex
    })
  }


  render() {
    return (
      <div id="babyDiv">


        <div>
          <p className="requestFormPtag"><b>Baby's Info:</b></p>
        </div>
        
      <div>


        <div className="name-info">

            <Input
              type="text"
              label="First Name"
              placeholder="First Name"
              onChange={this.handleInputChangeForBaby('firstName')}
            />

            <Input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              onChange={this.handleInputChangeForBaby('lastName')}
            />

        </div>


        <div className="date-gender">

            <div id="birthdateDiv">
              <p className="requestFormPtag">Birth Date:</p>
              <input
                type="date"
                onChange={this.handleInputChangeForBaby('birthDate')}
              />
            </div>

            <div id="genderDiv">
              <div id="genderGirlDiv">
                <p className="requestFormPtag">Girl</p>
                <input
                  id="genderGirl"
                  type="radio"
                  name="gender"
                  value="girl"
                  onChange={this.handleInputChangeForBaby('gender')}
                />
              </div>
              <div id="genderBoyDiv">
                <p className="requestFormPtag">Boy</p>
                <input
                  id="genderBoy"
                  type="radio"
                  name="gender"
                  value="boy"
                  onChange={this.handleInputChangeForBaby('gender')}
                />
              </div>
            </div>
        
        </div>

        <div className="gestation-weight">
          <div id="gestationDiv">
              <p className="requestFormPtag"><b>Gestation:</b></p>
              <div id="gestationOptionsDiv">
                <p className="requestFormPtag">Weeks:</p>
                <select
                  name="Weeks"
                  id="selectWeeks"
                  onChange={this.handleInputChangeForBaby('gestationWeeks')}
                >

                  <option value="">---</option>
                  { new Array(20).fill(null).map((o, i) => (
                    <option key={i} value={i + 20}>{i + 20}</option>
                  )) }

                </select>
                <p className="requestFormPtag">Days:</p>
                <select
                  name="Days"
                  id="selectDays"
                  onChange={this.handleInputChangeForBaby('gestationDays')}
                >
                  <option value="">---</option>
                  { new Array(6).fill(null).map((o, i) => (
                    <option key={i} value={i}>{i}</option>
                  )) }
                </select>
              </div>
            </div>
            <div id="weightDiv">
              <p className="requestFormPtag"><b>Weight:</b></p>
              <div id="weightOptionsDiv">
                <p className="requestFormPtag">Pounds:</p>
                <select
                  name="Pounds"
                  id="selectPounds"
                  onChange={this.handleInputChangeForBaby('weightPounds')}
                >
                  <option value="">---</option>
                  { new Array(7).fill(null).map((o, i) => (
                    <option key={i} value={i}>{i}</option>
                  )) }
                </select>
                <p className="requestFormPtag">Ounces:</p>
                <select
                  name="Ounces"
                  id="selectOunces"
                  onChange={this.handleInputChangeForBaby('weightOunces')}
                >
                  <option value="">---</option>
                  { new Array(16).fill(null).map((o, i) => (
                    <option key={i} value={i}>{i}</option>
                  )) }
                </select>
            </div>       
          </div>       
        </div>

        </div>

        <div id="addRemoveDiv">
          <p className="requestFormPtag"><b>Multiples?</b></p>
          <button
            className="Button"
            onClick={this.props.addAnotherBaby}>
            Add Another Baby
            </button>
          <button
            className="Button"
            onClick={this.props.removeBaby}>
            Undo Add
            </button>
        </div>


      </div>
    )
  }
}

export default BabyInfo;
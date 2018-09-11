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
        <div id="babyFullInfoDiv" >
          <p className="requestFormPtag"><b>Baby's Info:</b></p>
          <div id="babyStatsDiv">
            <div id="babyNameBirthdateDiv" >
              <div id="firstNameDiv">
                <Input
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  onChange={this.handleInputChangeForBaby('firstName')}
                />
              </div>
              <div id="lastNameDiv">
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  onChange={this.handleInputChangeForBaby('lastName')}
                />
              </div>
              <div id="birthdateDiv">
                <p className="requestFormPtag">Birth Date:</p>
                <input
                  type="date"
                  onChange={this.handleInputChangeForBaby('birthDate')}
                />
              </div>
            </div>
            <div id="genderAndStatsDiv">
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
              <div id="gestationDiv">
                <p className="requestFormPtag"><b>Gestation:</b></p>
                <div id="gestationOptionsDiv">
                  <p className="requestFormPtag">Weeks:</p>
                  <select
                    name="Weeks"
                    id="selectWeeks"
                    onChange={this.handleInputChangeForBaby('gestationWeeks')}
                  >
                    {/* 
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option> */}
                    <option value="">---</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                  </select>
                  <p className="requestFormPtag">Days:</p>
                  <select
                    name="Days"
                    id="selectDays"
                    onChange={this.handleInputChangeForBaby('gestationDays')}
                  >
                    <option value="">---</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
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
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  <p className="requestFormPtag">Ounces:</p>
                  <select
                    name="Ounces"
                    id="selectOunces"
                    onChange={this.handleInputChangeForBaby('weightOunces')}
                  >
                    <option value="">---</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </div>
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
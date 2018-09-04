import React, { Component } from 'react';
import { connect } from 'react-redux';


class RequestForm extends Component {



    render() {
        return (
            <div>
                <form action="">
                    <div id="babyInfoDiv">
                        Baby's First Name: <input type="text" placeholder="First Name" />
                        Baby's Last Name: <input type="text" placeholder="Last Name" />
                        Birth Date: <input type="date" />
                        <br /> Girl
            <input id="genderGirl" type="radio" />
                        Boy
            <input id="genderBoy" type="radio" />
                        <br />
                        Gestation: Weeks:
            <select name="Weeks" id="selectWeeks">
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
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
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
                        Days:
            <select name="Days" id="selectDays">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <br /> Weight: Pounds:
            <select name="Pounds" id="selectPounds">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        Ounces:
            <select name="Ounces" id="selectOunces">
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
                        <br />
                        <button>Add Another Baby</button>
                    </div>
                    <br /> Nominator:
         <input type="text" placeholder="Your Name" />
                    <br /> Nominator Email:
         <input type="text" placeholder="Your Email" />
                    <br /> Would Parents Like to Be Contacted? Yes:
         <input type="radio" id="contactYes" /> No:
         <input type="radio" id="contactNo" />
                    <br /> Parent Name(s):
         <input type="text" placeholder="Parent Name(s)" />
                    <br /> Parent Email:
         <input type="text" placeholder="Parent Email" />
                    <br /> Hospital Name:
         <br />
                    <input type="text" placeholder="Hospital Name" />
                    <br /> Hospital Address:
         <br />
                    <input type="text" placeholder="Address 1" />
                    <br />
                    <input type="text" placeholder="Address 2" />
                    <br />
                    <label htmlFor="City" />City:
         <input type="text" placeholder="City" />
                    <br />
                    <label htmlFor="State">State:
            <select name="State" id="selectState">
                            <option value="Alabama">AL</option>
                            <option value="Alaska">AK</option>
                            <option value="Arizona">AZ</option>
                            <option value="Arkansas">AR</option>
                            <option value="California">CA</option>
                            <option value="Colorado">CO</option>
                            <option value="Connecticut">CT</option>
                            <option value="Delaware">DE</option>
                            <option value="District of Columbia">DC</option>
                            <option value="Florida">FL</option>
                            <option value="Georgia">GA</option>
                            <option value="Hawai'i">HI</option>
                            <option value="Idaho">ID</option>
                            <option value="Illinois">IL</option>
                            <option value="Indiana">IN</option>
                            <option value="Iowa">IA</option>
                            <option value="Kansas">KS</option>
                            <option value="Kentucky">KY</option>
                            <option value="Louisiana">LA</option>
                            <option value="Maine">ME</option>
                            <option value="Maryland">MD</option>
                            <option value="Massachussetts">MA</option>
                            <option value="Michigan">MI</option>
                            <option value="Minnesota">MN</option>
                            <option value="Mississippi">MS</option>
                            <option value="Missouri">MO</option>
                            <option value="Montana">MT</option>
                            <option value="Nebraska">NE</option>
                            <option value="Nevada">NV</option>
                            <option value="New Hampshire">NH</option>
                            <option value="New Jersey">NJ</option>
                            <option value="New Mexico">NM</option>
                            <option value="New York">NY</option>
                            <option value="North Carolina">NC</option>
                            <option value="North Dakota">ND</option>
                            <option value="Ohio">OH</option>
                            <option value="Oklahoma">OK</option>
                            <option value="Oregon">OR</option>
                            <option value="Pennsylvania">PA</option>
                            <option value="Rhode Island">RI</option>
                            <option value="South Carolina">SC</option>
                            <option value="South Dakota">SD</option>
                            <option value="Tennessee">TN</option>
                            <option value="Texas">TX</option>
                            <option value="Utah">UT</option>
                            <option value="Vermont">VT</option>
                            <option value="Virginia">VA</option>
                            <option value="Washington">WA</option>
                            <option value="West Virginia">WV</option>
                            <option value="Wisconsin">WI</option>
                            <option value="Wyoming">WY</option>
                            <option value="American Samoa">AS</option>
                            <option value="Guam">GU</option>
                            <option value="Northern Mariana Islands">MP</option>
                            <option value="Puerto Rico">PR</option>
                            <option value="U.S. Virgin Islands">VI</option>
                        </select>
                    </label>
                    <br /> Postal/Zip:
         <input type="number" placeholder="Zip" />
                </form>
            </div>

        )
    }
}

export default RequestForm
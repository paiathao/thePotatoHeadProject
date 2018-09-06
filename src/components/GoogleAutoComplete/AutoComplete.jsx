import React from 'react';
import Script from 'react-load-script';
// import '../../styles/google.css'

var clone = require('clone');

export default class GoogleAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.state = {
      scriptError: false,
      scriptLoaded: false,
      fieldsForState: {
        streetAddress: '',
        streetAddress2: '',
        floorNumber: '',
        roomNumber: '',
        locality: '',
        cityOrState: '',
        postalcode: '',
        country: '',
        searchField: '',
      },
      labels: {
        streetAddress: "Street Address 1",
        streetAddress2: "Street Address 2",
        floorNumber: "Floor #",
        roomNumber: "Room #",
        locality: "City",
        postalcode: "Postal / Zip Code",
        cityOrState: "State / Province",
        country: "Country",
        searchField: "Hospital Name",
      },
      showResult: false,
    };
    this.baseFields = clone(this.state.fieldsForState);
    this.handleMapChange = this.handleMapChange.bind(this);
    this.renderFields = this.renderFields.bind(this);
    this.handleSearchClear = this.handleSearchClear.bind(this);
  }


  shouldComponentUpdate(nextProps, nextState) {
    if ((this.state.scriptLoaded !== nextState.scriptLoaded) && (this.autocomplete === null)) {
      this.autocomplete = new window.google.maps.places.Autocomplete((this.searchInput));
      this.autocomplete.addListener('place_changed', this.handleMapChange);
    }
    return true;
  }


  renderFields() {
    return Object.keys(this.props.fields).map((key, i) => {
      return (

        <div id="autoCompleteDiv2" key={i} className={`address-field address-${key}`}>
          <label htmlFor="this" >{this.state.labels[key]}</label>
          <input type="text" className="hospAddInputs" id="this" value={this.state.fieldsForState[key]} />
        </div>
      )
    }
    )
  }


  handleSearchClear(searchText) {
    if (searchText.target.type === "search") {
      if (searchText.target.value === "") {
        const { fieldsForState } = this.state;
        Object.keys(fieldsForState).map((key, i) => {
          fieldsForState[key] = "";
          key = { i }
        })
        this.setState({ fieldsForState });
      }
    }
  }

  handleMapChange() {
    this.place = this.autocomplete.getPlace();
    this.props.callbackFunction(this.place);
    const fieldsForState = { ...this.state.fieldsForState, ...this.baseFields };
    if (this.place.address_components) {
      const addrComps = this.place.address_components;
      var matchForStreet1 = this.place.adr_address ? this.place.adr_address.match(/<span class="street-address">(.*?)<\/span>/) : false;
      if (matchForStreet1 && matchForStreet1[1]) fieldsForState.streetAddress = matchForStreet1[1];
      const { fields } = this.props;
      Object.keys(addrComps).map((index, i) => {

        const addrType = addrComps[index].types[0];

        switch (addrType) {

          case fields.locality: fieldsForState.locality = addrComps[index].long_name;
            break;

          case fields.cityOrState: fieldsForState.cityOrState = addrComps[index].long_name;
            break;

          case fields.country: fieldsForState.country = addrComps[index].long_name;
            break;

          case fields.postalcode: fieldsForState.postalcode = addrComps[index].long_name;
            break;

          default:
        }
      });
      this.setState({ fieldsForState, showResult: true });
    }
    else {
      console.log("It is not okay.")
    }
  }


  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }


  handleScriptError() {
    this.setState({ scriptError: true })
  }


  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }



  render() {
    const { scriptLoaded } = this.state;
    const { id, placeholder, label } = this.props;
    return (
      [!scriptLoaded && <Script
        url={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M&libraries=places`}
        onCreate={this.handleScriptCreate.bind(this)}
        onError={this.handleScriptError.bind(this)}
        onLoad={this.handleScriptLoad.bind(this)}
      />,
      <div id="autoCompleteDiv" className={`address ${this.state.showResult ? "showFields" : ""}`}>
        <div className="addressInput">
          <input type="search" className="hospitalInput" id={id} placeholder="Hospital Name" ref={ele => {
            this.searchInput = ele;
            (ele || {}).onsearch = this.handleSearchClear
          }} />
        </div>
        <div className="addressFields">
          {this.renderFields()}
        </div>
      </div>
      ]
    )
  }
}
GoogleAutoComplete.defaultProps = {
  fields: {
    streetAddress: "route",
    streetAddress2: "administrative_level_4",
    floorNumber: "Floor #",
    roomNumber: "Room #",
    locality: "locality",
    cityOrState: "administrative_area_level_1",
    postalcode: "postal_code",
    country: "country",
  },
  callbackFunction: f => f
}
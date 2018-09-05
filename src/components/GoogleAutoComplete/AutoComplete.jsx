import React, { Component } from 'react';
// import { connect } from 'react-redux';

import '../../styles/main.css';

//Autocomeplete Api

import PlacesAutocomplete from 'react-places-autocomplete';
  
  class AutoComplete extends Component {
    constructor(props) {
      super(props);
      this.state = { address: '' };
    }
  
    handleChange = address => {
      this.setState({ address });
    };
  
    render() {

      return (
          
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places',
                })}
              />
              <div>
                {loading && <div>Loading...</div>}
                
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                   {JSON.stringify(suggestions)}
                    {/* {JSON.stringify(suggestion)} */}
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
                <div >
                      <div>
                        <img
                        className="Google_image"
                        alt='powerbygoogle'
                          src={require('../../Image/powered_by_google_default.png')}
                        />
                      </div>
                    </div>
                  </div>
              </div>
          )}
        </PlacesAutocomplete>
      );
      
    }
   
  }

export default AutoComplete
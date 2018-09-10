import React, { Component } from 'react';
import { connect } from 'react-redux';

///Google map
import { Map,  Marker, GoogleApiWrapper } from 'google-maps-react';

//action
import {GET_MAP} from '../../redux/actions/googleMapAction'

//css
import '../../styles/googleMap.css'

const mapStateToProps = state => ({

});

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {},
            selectedPlace: {},
            latLng: {
                lat: 38.964748,
                lng: -94.579535,
            },
            zoom: 4.3,
        };

    }

    componentDidMount() {
        console.log('did this run?')
        this.props.dispatch({ type: GET_MAP.GET });
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            activeMarker: marker,
        });
    }

    // handle = (props) => {
    //     console.log('click')
    //     this.props.dispatch({ type: GET_MAP.GET });
    // }

    render() {
        console.log('whatisthisstatehere',this.props)
        return (
            <div className="mapContainer">
                <button onClick={this.handle}>
                Test  button
            </button>
            <Map
                onClick={this.onMapClick}
                google={this.props.google}
                zoom={this.state.zoom}
                initialCenter={this.state.latLng}
            >
            </Map>
        
            </div>
        )
    }
}

const connectToGoogleMaps = GoogleApiWrapper({
    // apiKey: ('AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M')
})(MapContainer)

export default (connect(mapStateToProps)(connectToGoogleMaps))
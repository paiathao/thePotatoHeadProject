import React, { Component } from 'react';
import { connect } from 'react-redux';

///Google map
import { Map,  Marker, GoogleApiWrapper } from 'google-maps-react';

//css
import '../../styles/googleMap.css'

const mapStateToProps = state => ({

});

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: true,
            search: '',
            vendor: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            latLng: {
                lat: 38.964748,
                lng: -94.579535,
            },
            zoom: 4.3,
        };

    }

    render() {
        return (
            <div className="mapContainer">
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
    apiKey: ('AIzaSyAfrUvtgh7j4JKGW6bkFPspZ4ZZ8uqlE-M')
})(MapContainer)

export default (connect(mapStateToProps) (connectToGoogleMaps))
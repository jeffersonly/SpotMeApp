import React, { Component } from 'react';
import { Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { View } from 'native-base';
import { connect } from 'react-redux';

// NOTE: need to be enabled in google api for map
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

import SearchResults from './SearchResults';
import SearchBox from './SearchBox';
import {
  locationChanged, 
  getCurrentLocation,
  getInputData,
  getAddressPredictions,
  getSelectedAddress,
  fetchSanJoseAPI
} from '../actions';

class MapScreen2 extends Component {

    componentWillMount() {
        this.props.getCurrentLocation;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.currentLocation.latitude && (
                    <MapView
                       provider={PROVIDER_GOOGLE}
                       style={styles.map}
                       region={this.props.currentLocation}
                    >
                        <MapView.Marker
                        coordinate={this.props.currentLocation}
                        title={this.props.sanjose.garageName}
                        description={this.props.sanJose.garageAvailable}
                        /> 
                    </MapView>
                )}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
};

const mapStateToProps = ({ locRed }) => {
    const {
        location,
        currentLocation,
        inputData,
        predictions,
        sanjose
    } = locRed;
    return { location, currentLocation, inputData, predictions, sanjose };
};

const mapActionCreators = {
    locationChanged,
    getCurrentLocation,
    getInputData,
    getAddressPredictions,
    getSelectedAddress,
    fetchSanJoseAPI
};

export default connect(mapStateToProps, mapActionCreators)(MapScreen2);

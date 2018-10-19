import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SearchBox from './SearchBox';

//Dark Map Styles not being applied for some reason, will look into it in the future
import DarkMapStyles from '../MapStyle/DarkMapStyles.json';

class MapScreen extends Component {
    //Need constructor to initialize state and regionChange,
    //otherwise will get type errors(not a function) 
    constructor() {
        super();
        this.state = {
            region: {
                latitude: 37.3382082,
                longitude: -121.8863286,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            },
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }
    //Sets the initial location that is loaded (currently set to San Jose)
    getInitialState() {
        return {
            region: {
                latitude: 37.3382082,
                longitude: -121.8863286,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    //renders the map view
    //renders markers in map view
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    customMapStyle={DarkMapStyles}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                > 
                <MapView.Marker
                    coordinate={{
                        latitude: 37.339222,
                        longitude: -121.880724,
                    }}
                    //Can later pull title and description from API when implemented
                    title={'SJSU North Parking Garage'}
                    description={'The best parking garage! Sample: Spots Filled: 277/450'}
                />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  });

export default MapScreen;

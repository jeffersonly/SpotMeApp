import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

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
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    //renders the map view
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                />
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

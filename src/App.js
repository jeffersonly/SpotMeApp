import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.map}
            region={{
            latitude: 37.3382082,
            longitude: -121.8863286,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
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

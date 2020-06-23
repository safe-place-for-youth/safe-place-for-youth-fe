import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.screen}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%'
  }
});

export default MapScreen;

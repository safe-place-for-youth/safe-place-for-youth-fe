import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fetchAllPlaces } from '../utils/fetchData';

const MapScreen = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchAllPlaces()
      .then(res => setPlaces(res));
  }, []);

  const markers = places.map(({latitude, longitude, category, name}) => (
    <Marker coordinate={{ latitude, longitude}} key={name}>
      <MapView.Callout tooltip style={styles.customView}>
        <View style={styles.calloutText}>
          <Text>{category}</Text>
        </View>
      </MapView.Callout>
    </Marker>
    ))

  return (
    <View style={styles.screen}>
      <MapView 
        style={styles.map} 
        provider='google' 
        initialRegion={{
          latitude: 45.512794,
          longitude: -122.679565,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {markers}
      </MapView>
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

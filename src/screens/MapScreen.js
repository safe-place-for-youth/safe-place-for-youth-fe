import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fetchAllPlaces } from '../utils/fetchData';
import BodyText from '../components/BodyText';

const MapScreen = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => setPlaces(fetchedPlaces));
  }, []);

  const markers = places.map(({latitude, longitude, color, name}) => (
    <Marker coordinate={{ latitude, longitude}} pinColor={color} key={name}>
      <MapView.Callout tooltip style={styles.customView}>
        <View style={styles.callout}>
          <BodyText style={{color: color}}>{`${name.slice(0, 25)}...`}</BodyText>
        </View>
      </MapView.Callout>
    </Marker>
  ));

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
    alignItems: 'center'
  },
  callout: {
    backgroundColor: 'white',
    opacity: 0.8,
    width: 130,
    padding: 10,
    borderRadius: 10
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%'
  }
});

export default MapScreen;

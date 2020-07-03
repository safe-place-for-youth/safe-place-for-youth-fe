import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BodyText from '../components/BodyText';
import BottomShape from '../components/BottomShape';
import TitleText from '../components/TitleText';
import { fetchAllPlaces } from '../utils/fetchData';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => setPlaces(fetchedPlaces));
  }, []);

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestPermissionsAsync();
      if(status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      console.log(latitude, longitude, 'coords');
      // setLocation(location);
    })();
  });

  let text = 'Waiting...';
  if(errorMsg) {
    text = errorMsg;
  };

  const handleMarkerPress = name => {
    setSelectedPlace(name);
  };

  const markers = places.map(({latitude, longitude, color, name}) => (
    <Marker 
      onPress={() => handleMarkerPress(name)} 
      coordinate={{ latitude, longitude}} 
      pinColor={color} 
      key={name}
    >
      <MapView.Callout tooltip style={styles.customView}>
        <View style={styles.callout}>
          <BodyText>Your current location is {latitude}</BodyText>
          <BodyText style={{ color }}>{`${name.slice(0, 25)}...`}</BodyText>
        </View>
      </MapView.Callout>
    </Marker>
  ));

  return (
    <View style={styles.screen}>
{/* If the user granted access to location data, render map in user's location */}
      {/* {latitude !== 0 
        ? <MapView 
            style={styles.map} 
            provider='google' 
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            {markers}
            {selectedPlace && <BottomShape selectedPlace={selectedPlace} />}
          </MapView>

// Otherwise, render map using default view of Multnomah County
        : <MapView 
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
            {selectedPlace && <BottomShape selectedPlace={selectedPlace} />}
          </MapView>
      } */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  callout: {
    width: 130,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    opacity: 0.9
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

export default MapScreen;

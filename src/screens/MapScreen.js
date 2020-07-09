import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import BodyText from '../components/BodyText';
import BottomShape from '../components/BottomShape';
import { fetchAllPlaces } from '../utils/fetchData';

const MapScreen = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [latitude, setLatitude] = useState(45.512794);
  const [longitude, setLongitude] = useState(-122.679565);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => setPlaces(fetchedPlaces));
  }, []);

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestPermissionsAsync();
      if(status !== 'granted') {
        setErrorMsg('Location permission not granted');
      } else {
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(() => location.coords.latitude);
        setLongitude(() => location.coords.longitude);
      };
    })();
  });

  if(errorMsg) {
    console.log(errorMsg);
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
          <BodyText style={{ color }}>{`${name.slice(0, 25)}...`}</BodyText>
        </View>
      </MapView.Callout>
    </Marker>
  ));

  return (
    <View style={styles.screen}>
      <MapView 
          style={styles.map} 
          provider='google' 
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}
        >
          {markers}
          {selectedPlace && <BottomShape selectedPlace={selectedPlace} />}
        </MapView>
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

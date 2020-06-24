import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BodyText from '../components/BodyText';
import BottomShape from '../components/BottomShape';
import TitleText from '../components/TitleText';
import { fetchAllPlaces } from '../utils/fetchData';

const MapScreen = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => setPlaces(fetchedPlaces));
  }, []);

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
        initialRegion={{
          latitude: 45.512794,
          longitude: -122.679565,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {markers}
        {selectedPlace && <BottomShape>
          <View style={styles.textContainer}>
            <TitleText style={styles.titleText}>{selectedPlace}</TitleText>
            <BodyText style={styles.bodyText}>Open until 5:00 pm</BodyText>
          </View>
        </BottomShape>}
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
    height: '100%'
  },
  textContainer: {
    position: 'relative',
    left: '4%',
    bottom: '-130%',
    width: '65%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10
  },
  bodyText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default MapScreen;

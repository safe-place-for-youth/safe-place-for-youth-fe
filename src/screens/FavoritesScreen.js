import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchAllPlaces } from '../utils/fetchData';

const FavoritesScreen = () => {
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState({});
  useEffect(() => {
    fetchAllPlaces()
      .then(res => {
        setPlaces(res);
        setPlace(res[0]);
      });
  }, []);
  console.log(place.name);
  return (
    <View style={styles.screen}>
      <Text>An example of an actual place is: {place.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchPlace } from '../utils/fetchData';

const DetailScreen = ({ navigation }) => {
  const [place, setPlace] = useState({});

  useEffect(() => {
    fetchPlace(navigation.getParam('placeId'))
      .then(fetchedPlace => setPlace(fetchedPlace));
  }, []);

  return (
    <View style={styles.screen}>
      <Text>This is the Detail Screen</Text>
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

export default DetailScreen;

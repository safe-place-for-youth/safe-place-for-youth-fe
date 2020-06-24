import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchPlace } from '../utils/fetchData';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import OpenText from '../components/OpenText';
import CustomButton from '../components/CustomButton';

const DetailScreen = ({ navigation }) => {
  const [place, setPlace] = useState({});

  useEffect(() => {
    fetchPlace(navigation.getParam('placeId'))
      .then(fetchedPlace => setPlace(fetchedPlace));
  }, []);
  console.log(place);

  return (
    <View style={styles.screen}>
      <TitleText style={{ color: place.color }}>{place.name}</TitleText>
      <BodyText style={styles.address}>{place.address?.streetAddress}</BodyText>
      <BodyText style={styles.address}>{place.address?.city}, {place.address?.state} {place.address?.zipcode}</BodyText>
      <OpenText isOpen={true} time='1700' />
      <View>
        <CustomButton 
          buttonText='Get Hours'
          color={place.color}
         
        />
        <CustomButton 
          buttonText='Get Directions'
          color={place.color}
         
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  address: {
    fontSize: 18
  }
});

export default DetailScreen;

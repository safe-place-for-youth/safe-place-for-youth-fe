import React, { useState, useEffect } from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import { fetchPlace } from '../utils/fetchData';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import OpenText from '../components/OpenText';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';

const DetailScreen = ({ navigation }) => {
  const [place, setPlace] = useState({});

  useEffect(() => {
    fetchPlace(navigation.getParam('placeId'))
    .then(fetchedPlace => setPlace(fetchedPlace))
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.contentContainer}>
        <TitleText style={{ color: place.color, fontSize: 26 }}>{place.name}</TitleText>
        <View>
          <BodyText style={styles.address}>{place?.streetAddress}</BodyText>
          <BodyText style={styles.address}>{place?.city}, {place?.state} {place?.zipcode}</BodyText>
        </View>
        <OpenText isOpen={true} time='1700' />
        <View style={styles.buttonContainer}>
          <CustomButton
            style={styles.button}
            buttonText='Get Hours'
            color={place.color}
          />
          <CustomButton
            style={styles.button}
            buttonText='Get Directions'
            color={place.color}
            onPress={() => Linking.openURL(`https://www.google.com/maps?daddr=${place?.streetAddress}+${place?.city}+${place?.state}+${place?.zipcode}`)}
          />
        </View>
      </View>
      <View style={styles.blueThing}>
        <View style={styles.contactContainer}>
          <BodyText style={{...styles.contactText, textDecorationLine: 'underline'}}>Contact</BodyText>
          <TitleText style={{...styles.contactText, fontSize: 26}}>Tabitha Jensen</TitleText>
          <BodyText style={styles.contactText}>Deputy Director</BodyText>
          <View style={styles.buttonContainer}>
            <CustomButton
              style={styles.button}
              buttonText='Call'
              onPress={() => {}}
            />
            <CustomButton
              style={styles.button}
              buttonText='Email'
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

DetailScreen.navigationOptions = {
  headerTitle: () => null,
  headerStyle: {
    shadowColor: 'transparent'
  },
  headerTintColor: Colors.accentColor
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  contentContainer: {
    flex: 3,
    width: '80%',
    height: '50%',
    justifyContent: 'space-around',
    marginVertical: 30
  },
  address: {
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  blueThing: {
    flex: 2.3,
    backgroundColor: Colors.primaryColor,
    height: 400,
    width: 430,
    borderTopLeftRadius: 250,
    borderTopRightRadius: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactContainer: {
    width: '70%',
    height: '100%',
    paddingTop: 40,
    justifyContent: 'space-around'
  },
  contactText: {
    color: 'white',
    fontSize: 16
  }
});

export default DetailScreen;

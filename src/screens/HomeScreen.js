import React, { useState, useEffect } from 'react';
import { View, ImageBackground, FlatList, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';
import HeadingText from '../components/TitleText';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import { fetchAllPlaces } from '../utils/fetchData';

const HomeScreen = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => fetchedPlaces.slice(0, 5))
      .then(slicedPlaces => setPlaces(slicedPlaces));
  }, []);
  
  const renderPlaceCard = placeData => (
    <Card 
      placeName={placeData.item.name} 
      openStatus="Open until 5:00 pm" 
      style={styles.card}
    />
  );

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <ImageBackground 
          source={require('../../assets/shapes/white-concave-shape-short.png')} 
          style={styles.image}
        >
          <View style={styles.headingContainer}>
            <BodyText style={styles.bodyText}>find your</BodyText>
            <HeadingText style={styles.titleText}>Safe Place</HeadingText>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
          <BodyText style={{...styles.bodyText, color: 'white' }}>nearby</BodyText>
          <FlatList
            keyExtractor={item => item._id}
            data={places}
            horizontal={true}
            renderItem={renderPlaceCard}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryColor
  },
  titleContainer: {
    flex: 2.3,
    width: '100%',
    height: '100%'
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    paddingBottom: '22%'
  },
  headingContainer: {
    alignItems: 'center'
  },
  bodyText: {
    fontSize: 22
  },
  titleText: {
    letterSpacing: 1.5
  },
  contentContainer: {
    flex: 1,
    width: '100%'
  },
  listContainer: {
    paddingHorizontal: 30,
    paddingTop: 20
  },
  card: {
    marginRight: 30,
    marginTop: 10
  }
});

export default HomeScreen;

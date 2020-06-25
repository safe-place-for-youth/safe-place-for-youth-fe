import React, { useState, useEffect } from 'react';
import { 
  View, 
  ImageBackground, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

import Card from '../components/Card';
import BodyText from '../components/BodyText';
import HeadingText from '../components/TitleText';
import Colors from '../constants/Colors';
import { fetchAllPlaces } from '../utils/fetchData';

const HomeScreen = ({ navigation }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => fetchedPlaces.slice(0, 5))
      .then(nearestPlaces => setPlaces(nearestPlaces));
  }, []);
  
  const renderPlaceCard = placeData => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate({ routeName: 'Detail', params: {
          placeId: placeData.item._id
        }});
      }}
      style={{...styles.card, marginLeft: placeData.index === 0 ? 20 : 0}}
      >
        <Card 
          placeName={placeData.item.name} 
          isOpen={true}
          time='1700'
        />
      </TouchableOpacity>
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
          <BodyText style={{...styles.bodyText, color: 'white', marginLeft: 20 }}>nearby</BodyText>
          <FlatList
            keyExtractor={item => item._id}
            data={places}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
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
    paddingTop: 20
  },
  card: {
    marginRight: 20,
    marginTop: 10
  }
});

export default HomeScreen;

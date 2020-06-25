import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  View, 
  StyleSheet, 
  TextInput 
} from 'react-native';

import CardList from '../components/CardList';
import { fetchAllPlaces } from '../utils/fetchData';
import RadioButtonList from '../components/RadioButtonList';
import Colors from'../constants/Colors';

const ListScreen = ({ navigation }) => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [category, setCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => {
        setPlaces(fetchedPlaces);
        setFilteredPlaces(fetchedPlaces);
      });
  }, []);

  useEffect(() => {
    const filteredElements = places.filter(place => place.category === category);
    setFilteredPlaces(filteredElements);
  }, [category])

  return (
    <LinearGradient style={styles.screen} colors={[Colors.accentColor, Colors.primaryColor]}>
      <View style={styles.shape}>
        <View style={styles.searchContainer} >
          <TextInput 
            onChangeText={(newValue) => setSearchInput(newValue)}
            autoCapitalize='none'
            autoCorrect={false}
            value={searchInput}
            style={styles.searchInput}
            placeholder='Search'
            placeholderTextColor='white'
          />
          <RadioButtonList category={category} setCategory={setCategory} />
        </View>
      </View>
      <View style={styles.list}>
        <CardList places={filteredPlaces} navigation={navigation} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shape: {
    flex: 1.9,
    backgroundColor: 'white',
    width: 430,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '80%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    color: 'white',
    backgroundColor: Colors.primaryColor,
  },
  list: {
    flex: 4,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  }
});

export default ListScreen;

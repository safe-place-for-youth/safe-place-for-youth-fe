import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { fetchAllPlaces } from '../utils/fetchData';
import Colors from '../constants/Colors';

const ListScreen = () => {
  const [places, setPlaces] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.shape}>
        <TextInput 
          onChangeText={(newValue) => setSearchInput(newValue)}
          autoCapitalize='none'
          autoCorrect={false}
          value={searchInput}
          style={styles.searchInput}
          placeholder='Search'
        />
      </View>
      <View style={styles.list}>

      </View>
      <Text>This is the List Screen OR IS IT? IT IS.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor
  },
  shape: {
    flex: 1.5,
    backgroundColor: 'white',
    width: 430,
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    width: '80%',
    margin: 10,
    padding: 5,
    borderWidth: 30,
    borderColor: 'white',
    color: 'white',
    backgroundColor: Colors.primaryColor,
    // shadowColor: Colors.accentColor,
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    // overflow: 'hidden',
  },
  list: {
    flex: 4
  }
});

export default ListScreen;

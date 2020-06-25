import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  View, 
  StyleSheet, 
  TextInput 
} from 'react-native';

import CardList from '../components/CardList';
import RadioButtonList from '../components/RadioButtonList';
import Colors from'../constants/Colors';
import { useGetPlaces } from '../hooks/getPlaces';

const ListScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');
  const { filteredPlaces, category, setCategory } = useGetPlaces();

  return (
    <LinearGradient style={styles.screen} colors={[Colors.accentColor, Colors.primaryColor]}>
      <View style={styles.shape}>
        <View style={styles.queryContainer} >
          <View style={styles.searchContainer}>
            <TextInput 
              onChangeText={(newValue) => setSearchInput(newValue)}
              autoCapitalize='none'
              autoCorrect={false}
              value={searchInput}
              style={styles.searchInput}
              placeholder='Search'
              placeholderTextColor='white'
            />
          </View>
          <View style={styles.radioButtonContainer}>
            <RadioButtonList category={category} setCategory={setCategory} />
          </View>
        </View>
      </View>
      <View style={styles.placeList}>
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
  queryContainer: {
    flex: 1,
    width: '88%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchContainer: {
    width: '88%',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 25
  },
  radioButtonContainer: {
    flex: 1,
  },
  searchInput: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    color: 'white',
    backgroundColor: Colors.primaryColor
  },
  placeList: {
    flex: 4,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  }
});

export default ListScreen;

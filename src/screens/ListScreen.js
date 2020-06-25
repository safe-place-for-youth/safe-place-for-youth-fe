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

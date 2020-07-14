import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  View, 
  TextInput,
  ImageBackground, 
  StyleSheet, 
} from 'react-native';

import CardList from '../components/CardList';
import RadioButtonList from '../components/RadioButtonList';
import Colors from'../constants/Colors';
import { useGetPlaces } from '../hooks/getPlaces';

const ListScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');
  const { nearestPlaces, filteredPlaces, category, setCategory } = useGetPlaces();

  return (
    <LinearGradient style={styles.screen} colors={[Colors.accentColor, Colors.primaryColor]}>
      <View style={styles.headerContainer}>
        <ImageBackground 
            source={require('../../assets/shapes/white-concave-shape-shorter-yet.png')} 
            style={styles.image}
          >
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
          </ImageBackground>
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
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  headerContainer: {
    flex: 1.4,
    width: '100%',
    zIndex: 3
  },
  image: {
    width: '100%',
    height: '120%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',    
    paddingBottom: '15%',
  },
  queryContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  searchContainer: {
    width: '88%',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '6%'
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
    alignItems: 'center'
   }
});

export default ListScreen;

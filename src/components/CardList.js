import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import LargeCard from './LargeCard';

const CardList = ({ places, navigation }) => {
  const renderPlaceCard = placeData => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate({ routeName: 'Detail', params: {
          placeId: placeData.item._id
        }});
      }}
    >
      <LargeCard 
        placeName={placeData.item.name} 
        isOpen={true}
        time='1700'
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
          keyExtractor={item => item._id}
          data={places}
          renderItem={renderPlaceCard}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '85%'
  }
});

export default CardList;

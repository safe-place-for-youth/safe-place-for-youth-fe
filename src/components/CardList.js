import React from 'react';
import { 
  StyleSheet, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import LargeCard from './LargeCard';
import { useGetHoursString } from '../hooks/getHoursString';
import { getOpenStatus } from '../utils/getOpenStatus';

const CardList = ({ places, navigation }) => {
  const { currentTime, openingHoursRecord, closingHoursRecord } = useGetHoursString();

  const renderPlaceCard = placeData => {
    const { item, index } = placeData;
    const { isOpen, closingTimeData} = getOpenStatus(item, currentTime, openingHoursRecord, closingHoursRecord);
    return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate({ routeName: 'Detail', params: {
          placeId: item._id,
          isOpen,
          closingTime: closingTimeData
        }});
      }}
    >
      <LargeCard 
        placeName={item.name} 
        isOpen={isOpen}
        closingTime={closingTimeData}
        index={index}
        // distance={item.distance.toFixed(1)}
      />
    </TouchableOpacity>
  )};

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

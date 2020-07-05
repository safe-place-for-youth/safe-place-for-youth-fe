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
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => fetchedPlaces.slice(0, 5))
      .then(nearestPlaces => setPlaces(nearestPlaces));
  }, []);

  // get current date
  const currentDate = new Date()
  // store current date in new variable
  const today = currentDate;
  // get current time in ms
  const currentTime = today.getTime();
  // get current day of week as number (0-6)
  const dayOfWeekAsNumber = today.getDay();
  // convert to day (Sunday - Saturday)
  const weekdayFactory = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }

  const dayOfWeekAsString = weekdayFactory[dayOfWeekAsNumber];
  const dayOfWeekLowerCase = dayOfWeekAsString.toLowerCase();

  // get string that matches column in data
  const openHoursRequest = `${dayOfWeekLowerCase}_open`;
  const closeHoursRequest = `${dayOfWeekLowerCase}_close`;
  
  const renderPlaceCard = placeData => {
    console.log(placeData.item.hours)

    const openingTimeData = '9:00 am';
    const closingTimeData = '5:00 pm';
    /*
    // find opening hours for dayOfWeekAsString
    const openingData = placeData.item.hours[openHoursRequest];
    // find closing hours for that day
    const closingData = placeData.item.hours[closeHoursRequest];
*/

    // get hours and minutes
    const getHoursAndMinutes = timeData => {
      if(timeData === 'closed') {
        const hours = 0;
        const minutes = 0;
        return {hours, minutes};
      }

      const [time, modifier] = timeData.split(' ');
      const [stringHours, stringMinutes] = time.split(':');
      
      // address modifier deviations (punctuation, capitalization)
      
      let hours = parseInt(stringHours, 10);
      const minutes = parseInt(stringMinutes, 10);

      if(hours === 12 && modifier === 'am') {
        hours = 0;
      };
      
      if(modifier === 'pm') {
        hours = hours + 12;
      };

      return {hours, minutes};
    };

    const { hours: openingHours, minutes: openingMinutes } = getHoursAndMinutes(openingTimeData);

    const {hours: closingHours, minutes: closingMinutes} = getHoursAndMinutes(closingTimeData);
  
    // set opening and closing times for current day in ms
    const openingTimeToday = new Date();
    openingTimeToday.setHours(openingHours, openingMinutes);
    
    const closingTimeToday = new Date();
    closingTimeToday.setHours(closingHours, closingMinutes);

    // compare current time to opening and closing times
    const openStatus = currentTime >= openingTimeToday && currentTime < closingTimeToday ? true : false;
    
    // if open set open state and render closing time in original string format
    setIsOpen(openStatus);
    
    return (
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
          isOpen={isOpen}
          closingTime={closingTimeData}
        />
      </TouchableOpacity>
  )};

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

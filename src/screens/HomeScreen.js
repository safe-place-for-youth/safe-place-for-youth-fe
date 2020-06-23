import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';
import HeadingText from '../components/TitleText';
import Colors from '../constants/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <BodyText style={styles.bodyText}>find your</BodyText>
        <HeadingText style={styles.titleText}>Safe Place</HeadingText>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <BodyText style={styles.whiteBodyText}>nearby</BodyText>
          <View style={styles.card}>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 50
  },
  bodyText: {
    fontSize: 20
  },
  titleText: {
    letterSpacing: 1.5
  },
  contentContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: Colors.primaryColor
  },
  content: {
    padding: 20,
  },
  card: {
    width: 160,
    height: 120,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  whiteBodyText: {
    color: 'white',
    fontSize: 20
  }
});

export default HomeScreen;

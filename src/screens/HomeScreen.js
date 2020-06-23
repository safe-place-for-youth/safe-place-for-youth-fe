import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';
import HeadingText from '../components/TitleText';
import Colors from '../constants/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <ImageBackground 
          source={require('../../assets/shapes/white-concave-shape-short.png')} 
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <BodyText style={styles.bodyText}>find your</BodyText>
            <HeadingText style={styles.titleText}>Safe Place</HeadingText>
          </View>
        </ImageBackground>
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
    alignItems: 'center',
    backgroundColor: Colors.primaryColor
  },
  titleContainer: {
    flex: 2,
    width: '100%',
    height: '100%'
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    paddingBottom: '25%'
  },
  textContainer: {
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
  content: {
    paddingHorizontal: 30,
    paddingTop: 15
  },
  card: {
    width: 180,
    height: 100,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  whiteBodyText: {
    color: 'white',
    fontSize: 22,
    paddingBottom: 10
  }
});

export default HomeScreen;

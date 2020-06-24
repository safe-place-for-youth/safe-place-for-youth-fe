import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const BottomShape = ({ children, style, selectedPlace }) => (
  <View style={{...styles.shape, style}}>
    <View style={styles.textContainer}>
      <TitleText style={styles.titleText}>{selectedPlace}</TitleText>
      <BodyText style={styles.bodyText}>Open until 5:00 pm</BodyText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  shapeContainer: {
    flex: 1  
  },
  shape: {
    position: 'absolute',
    left: '-17%',
    bottom: '-30%',
    width: '135%',
    height: '60%',
    backgroundColor: Colors.primaryColor,
    borderTopLeftRadius: 250,
    borderTopRightRadius: 250,
  },
  textContainer: {
    position: 'relative',
    bottom: '-132%',
    left: '4%',
    width: '65%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10
  },
  bodyText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default BottomShape;

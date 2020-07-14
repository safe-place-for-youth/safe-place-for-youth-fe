import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TitleText from './TitleText';
import OpenText from './OpenText';
import ClosedText from './ClosedText';
import Colors from '../constants/Colors';

const Card = ({ placeName, isOpen, closingTime, style, distance }) => (
  <ScrollView>
    <TitleText style={styles.distance}>{distance} mi</TitleText>
  <View style={{ ...styles.card, ...style }}>
    <TitleText style={styles.heading}>{placeName}</TitleText>
    {isOpen ? <OpenText closingTime={closingTime} /> : <ClosedText />}
  </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 100,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  heading: {
    fontSize: 14
  },
  distance: {
    fontSize: 14,
    textAlign: 'right',
    color: 'white',
  }
});

export default Card;

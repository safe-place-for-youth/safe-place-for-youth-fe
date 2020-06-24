import React from 'react';
import { View, StyleSheet } from 'react-native';
import TitleText from './TitleText';
import OpenText from './OpenText';
import ClosedText from './ClosedText';

const Card = ({ placeName, isOpen, time, style }) => (
  <View style={{ ...styles.card, ...style }}>
    <TitleText style={styles.heading}>{placeName}</TitleText>
    {isOpen ? <OpenText time={time} /> : <ClosedText />}
  </View>
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
  }
});

export default Card;

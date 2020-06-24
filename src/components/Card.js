import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleText from './TitleText';
import BodyText from './BodyText';

const Card = ({ placeName, openStatus, style }) => (
  <View style={{ ...styles.card, ...style }}>
    <TitleText style={styles.heading}>{placeName}</TitleText>
    <BodyText>{openStatus}</BodyText>
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

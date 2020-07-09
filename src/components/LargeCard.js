import React from 'react';
import { View, StyleSheet } from 'react-native';
import TitleText from './TitleText';
import OpenText from './OpenText';
import ClosedText from './ClosedText';

const LargeCard = ({ placeName, isOpen, closingTime, index, style }) => (
  <View style={{ ...styles.card, ...style, marginTop: index === 0 ? 90 : 30  }}>
    <TitleText style={styles.heading}>{placeName}</TitleText>
    {isOpen ? <OpenText closingTime={closingTime} /> : <ClosedText />}
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 110,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  heading: {
    fontSize: 16
  }
});

export default LargeCard;

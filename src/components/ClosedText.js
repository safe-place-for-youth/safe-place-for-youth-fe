import React from 'react';
import { StyleSheet } from 'react-native';
import BodyText from './BodyText';

const ClosedText = () => <BodyText style={styles.closedText}>Closed</BodyText>;

const styles = StyleSheet.create({
  closedText: {
    fontFamily: 'poppins-bold',
    color: 'red'
  }
});

export default ClosedText;

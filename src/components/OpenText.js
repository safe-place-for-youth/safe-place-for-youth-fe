import React from 'react';
import { StyleSheet } from 'react-native';
import BodyText from './BodyText';

const OpenText = ({ closingTime }) => <BodyText><BodyText style={styles.openText}>Open</BodyText> until {closingTime}</BodyText>;

const styles = StyleSheet.create({
  openText: {
    fontFamily: 'poppins-bold',
    color: '#72BF47'
  }
});

export default OpenText;

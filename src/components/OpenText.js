import React from 'react';
import { StyleSheet } from 'react-native';
import BodyText from './BodyText';

const OpenText = ({ time }) => {
  let hours = time.slice(0, 2);
  const minutes = time.slice(2, 4);
  const amOrPm = (hours >= 12) ? 'pm' : 'am';
  hours = (hours % 12) || 12;
  const parsedTime = `${hours}:${minutes} ${amOrPm}`;

  return <BodyText><BodyText style={styles.openText}>Open</BodyText> until {parsedTime}</BodyText>
};

const styles = StyleSheet.create({
  openText: {
    fontFamily: 'poppins-bold',
    color: '#72BF47'
  }
});

export default OpenText;

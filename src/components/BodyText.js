import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const BodyText = ({ style, children}) => <Text style={{ ...styles.text, ...style }}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
    color: Colors.accentColor
  }
});

export default BodyText;

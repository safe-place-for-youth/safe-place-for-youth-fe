import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const TitleText = ({ style, children}) => <Text style={{ ...styles.title, ...style }}>{children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'poppins-bold',
    fontSize: 30,
    color: Colors.accentColor
  }
});

export default TitleText;

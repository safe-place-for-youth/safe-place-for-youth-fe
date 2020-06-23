import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const TitleText = props => {
  return <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'poppins-bold',
    fontSize: 30,
    color: Colors.accentColor
  }
});

export default TitleText;

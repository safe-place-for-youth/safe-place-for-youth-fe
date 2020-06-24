import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const BottomShape = ({ children, style }) => <View style={{...styles.shape, style}}>{children}</View>;

const styles = StyleSheet.create({
  shapeContainer: {
    flex: 1  
  },
  shape: {
    position: 'absolute',
    left: '-17%',
    bottom: '-30%',
    width: '135%',
    height: '60%',
    backgroundColor: Colors.primaryColor,
    borderTopLeftRadius: 250,
    borderTopRightRadius: 250,
  },
});

export default BottomShape;

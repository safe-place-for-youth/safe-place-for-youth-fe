import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';

const RadioButton = ({ filterData, category, setCategory }) => {
  const activeStyle = {
    ...styles.radioButton, 
    backgroundColor: filterData.item.color, 
    color: 'white', 
    borderColor: filterData.item.color, 
    marginLeft: filterData.index === 0 ? 20 : 0
  };
 
  const inactiveStyle = {
    ...styles.radioButton, 
    backgroundColor: 'white', 
    color: filterData.item.color,
    borderColor: filterData.item.color,
    marginLeft: filterData.index === 0 ? 20 : 0 
  };

  const radioButtonStyle = (category === filterData.item.category) ? activeStyle : inactiveStyle;

  return (
    <TouchableWithoutFeedback onPress={() => setCategory(filterData.item.category)}>
      <View style={styles.radioButtonContainer}>
        <BodyText style={radioButtonStyle}>{filterData.item.category}</BodyText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    borderWidth: 2,
    borderRadius: 20, 
    paddingVertical: 5, 
    paddingHorizontal: 20,
    marginHorizontal: 15,
    overflow: 'hidden' 
  }
});

export default RadioButton;

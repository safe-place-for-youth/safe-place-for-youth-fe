import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import BodyText from '../components/BodyText';

const CustomButton = ({ buttonText, color }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <BodyText style={styles.buttonText}>{buttonText}</BodyText>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20
  },
  buttonText: {
    color: '#FFF'
  }
});

export default CustomButton;
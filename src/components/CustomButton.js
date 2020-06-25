import React from 'react';
import { 
  View, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import BodyText from '../components/BodyText';

const CustomButton = ({ buttonText, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} >
      <View style={{ ...styles.button, backgroundColor: color, borderWidth: color ? null : 1 }}>
        <BodyText style={styles.buttonText}>{buttonText}</BodyText>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderColor: 'white',
  },
  buttonText: {
    color: '#FFF'
  }
});

export default CustomButton;

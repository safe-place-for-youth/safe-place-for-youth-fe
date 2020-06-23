import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens();

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomeScreen;

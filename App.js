import React from 'react';
import PlacesNavigator from './src/navigation/PlacesNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  return <PlacesNavigator />
};

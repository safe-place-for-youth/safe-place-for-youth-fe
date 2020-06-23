import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import PlacesNavigator from './src/navigation/PlacesNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-sans-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'transat-bold': require('./assets/fonts/Transat-Bold.ttf'),
    'futura-bold': require('./assets/fonts/Futura-Bold.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.otf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.otf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <PlacesNavigator />
};

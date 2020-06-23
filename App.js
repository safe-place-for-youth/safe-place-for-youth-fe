import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { fetchFonts } from './src/utils/fetchFonts';
import PlacesNavigator from './src/navigation/PlacesNavigator';

enableScreens();

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

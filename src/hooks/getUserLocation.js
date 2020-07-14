import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGetUserLocation = () => {
  const [userLatitude, setUserLatitude] = useState(45.512794);
  const [userLongitude, setUserLongitude] = useState(-122.679565);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async() => {
      let { status } = await Location.requestPermissionsAsync();
      if(status !== 'granted') {
        setErrorMsg('Location permission not granted');
      } else {
        let location = await Location.getCurrentPositionAsync({});
        setUserLatitude(() => location.coords.latitude);
        setUserLongitude(() => location.coords.longitude);
      };
    })();
  });
  console.log('user location', userLatitude, userLongitude)
  return { userLatitude, userLongitude, errorMsg };
};


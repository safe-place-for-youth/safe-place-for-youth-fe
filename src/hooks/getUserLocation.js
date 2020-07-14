import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGetUserLocation = () => {
  const [userLatitude, setLatitude] = useState(45.512794);
  const [userLongitude, setLongitude] = useState(-122.679565);
  const [errorMsg, setErrorMsg] = useState(null);
  
  useEffect(() => {
    (async() => {
      let { status } = await Location.requestPermissionsAsync();
      if(status !== 'granted') {
        setErrorMsg('Location permission not granted');
      } else {
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(() => location.coords.latitude);
        setLongitude(() => location.coords.longitude);
      };
    })();
  });

  return { userLatitude, userLongitude, errorMsg };
};


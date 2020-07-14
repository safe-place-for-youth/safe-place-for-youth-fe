import { useState, useEffect } from 'react';
import { fetchAllPlaces, fetchNearestPlaces } from '../utils/fetchData';
import { useGetUserLocation } from './getUserLocation';

export const useGetPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [nearestPlaces, setNearestPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [category, setCategory] = useState('');
  const { userLatitude, userLongitude } = useGetUserLocation();

  useEffect(() => {
    fetchAllPlaces()
      .then(fetchedPlaces => {
        setPlaces(fetchedPlaces);
        setFilteredPlaces(fetchedPlaces);
      });
  }, []);

  useEffect(() => {
    fetchNearestPlaces(userLatitude, userLongitude)
      .then(fetchedPlaces => fetchedPlaces.slice(0, 5))
      .then(nearestPlaces => setNearestPlaces(nearestPlaces));
  }, []);

  useEffect(() => {
    const filteredElements = nearestPlaces.filter(place => place.category === category);
    
    setFilteredPlaces(filteredElements);
  }, [category]);

  return { places, nearestPlaces, filteredPlaces, category, setCategory }
}

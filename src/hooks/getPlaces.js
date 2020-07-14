import { useState, useEffect } from 'react';
import { fetchAllPlaces } from '../utils/fetchData';

export const useGetPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [nearestPlaces, setNearestPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [category, setCategory] = useState('');

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

import { useState, useEffect } from 'react';
import { fetchAllPlaces } from '../utils/fetchData';

export const useGetPlaces = () => {
  const [places, setPlaces] = useState([]);
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
    const filteredElements = places.filter(place => place.category === category);
    
    setFilteredPlaces(filteredElements);
  }, [category]);

  return { filteredPlaces, category, setCategory }
}

import { API_URL } from 'react-native-dotenv';

export const fetchAllPlaces = () => {
  return fetch(`${API_URL}api/v1/places`)
    .then(res => res.json())
    .catch((error) => {console.error(error)});
}
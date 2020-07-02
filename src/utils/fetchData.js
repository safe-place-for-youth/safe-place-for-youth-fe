import { API_KEY } from 'react-native-dotenv';
import { colorCategories } from '../constants/Colors';

// export const fetchAllPlaces = () => {
//   return fetch(`${API_URL}/api/v1/places`)
//     .then(res => res.json())
//     .then(places => places.map(place => {
//       const colorObj = colorCategories.find(obj => obj.category === place.category);
//       return {
//         ...place,
//         color: colorObj.color
//       }
//     }))
//     .catch((error) => {console.error(error)});
// };

// export const fetchPlace = id => {
//   return fetch(`${API_URL}/api/v1/places/${id}`)
//     .then(res => res.json())
//     .then(place => {
//       const colorObj = colorCategories.find(obj => obj.category === place.category);
//       return {
//         ...place,
//         color: colorObj.color
//       }
//     })
//     .catch((error) => {console.error(error)});
// };

export const fetchAllPlaces = () => {
  return fetch(`${API_KEY}`)
    .then(res => res.json())
    .then(places => places.map(place => {
      const colorObj = colorCategories.find(obj => obj.category === place.category);
      return {
        ...place,
        color: colorObj.color
      }
    }))
    .catch((error) => {console.error(error)});
};

export const fetchPlace = id => {
  return fetch(`${API_URL}/api/v1/places/${id}`)
    .then(res => res.json())
    .then(place => {
      const colorObj = colorCategories.find(obj => obj.category === place.category);
      return {
        ...place,
        color: colorObj.color
      }
    })
    .catch((error) => {console.error(error)});
};

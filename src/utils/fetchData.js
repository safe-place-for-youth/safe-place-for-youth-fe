import { API_URL, API_KEY } from 'react-native-dotenv';
import { colorCategories } from '../constants/Colors';

// export const fetchPlace = id => {
//   return fetch(`${API_URL}/api/v1/places/${id}`)
//     .then(res => res.json())
//     .then(res => console.log(res, 'places'))
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
  return fetch(`https://api.airtable.com/v0/appm2DPTBMOxDyjCJ/Safe%20Places?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(res => res.records)
    .then(places => places.map(place => {
      const colorObj = colorCategories.find(obj => obj.category === place.fields.category);
      return {
        _id: place.id,
        ...place.fields,
        color: colorObj.color
      };
    }))
    .catch((error) => {console.error(error)});
};

export const fetchPlace = id => {
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: `${API_KEY}`}).base('appm2DPTBMOxDyjCJ');

  const place = base('Safe Places').find(`${id}`, function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record._rawJson.fields);

  const colorObj = colorCategories.find(obj => obj.category === place.rawJson.fields.category);

  return {
    ...place.rawJson.fields,
    color: colorObj.color
  }

});
  // return fetch(`${API_URL}/api/v1/places/${id}`)
  //   .then(res => res.json())
  //   .then(place => {
  //     const colorObj = colorCategories.find(obj => obj.category === place.category);
  //     return {
  //       ...place,
  //       color: colorObj.color
  //     }
  //   })
  //   .catch((error) => {console.error(error)});
};
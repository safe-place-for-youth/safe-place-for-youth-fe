import { API_URL, API_KEY, AT_URL } from 'react-native-dotenv';
import { colorCategories } from '../constants/Colors';
import Airtable from 'airtable';

const base = new Airtable({apiKey: `${API_KEY}`}).base('appm2DPTBMOxDyjCJ');

export const fetchAllPlaces = async() => {
  const places = await base('Safe Places')
    .select({ maxRecords: 25, view: 'Grid view'})
    .all();
  console.log(places[0]._rawJson.fields);
  return places.map(place => {
    const colorObj = colorCategories.find(obj => obj.category === place._rawJson.fields.category);
      
    return {
      ...place._rawJson.fields,
      color: colorObj.color
    };
  })
}

// export const fetchAllPlaces = async() => {
//   const places = await base('Safe Places').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 25,
//     view: "Grid view"
//   }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     records.map(place => {
//       const colorObj = colorCategories.find(obj => obj.category === place._rawJson.fields.category);
      
//       return {
//         ...place._rawJson.fields,
//         color: colorObj.color
//       };
//     });
//     fetchNextPage();
//   });
//   console.log(places, 'outside places');
//   return places;
// };

// export const fetchAllPlaces = () => {
//   return fetch(`https://api.airtable.com/v0/appm2DPTBMOxDyjCJ/Safe%20Places?api_key=${API_KEY}`)
//     .then(res => res.json())
//     .then(res => res.records)
//     .then(places => places.map(place => {
//       const colorObj = colorCategories.find(obj => obj.category === place.fields.category);
//       return {
//         _id: place.id,
//         ...place.fields,
//         color: colorObj?.color
//       };
//     }))
//     .catch((error) => {console.error(error)});
// };

export const fetchPlace = async(id) => {
  const place = await base('Safe Places').find(id);

  const colorObj = colorCategories.find(obj => obj.category === place?._rawJson.fields.category);

  return {
    ...place?._rawJson.fields,
    color: colorObj.color
  }
};

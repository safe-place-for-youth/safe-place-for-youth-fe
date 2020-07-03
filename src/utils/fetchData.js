import { API_URL, API_KEY, AT_URL } from 'react-native-dotenv';
import { colorCategories } from '../constants/Colors';
import Airtable from 'airtable';

const base = new Airtable({apiKey: `${API_KEY}`}).base('appm2DPTBMOxDyjCJ');

// export const fetchAllPlaces = () => {
//   return base('Safe Places').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 25,
//     view: "Grid view"
//   }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
//     records.map(place => {
//       const colorObj = colorCategories.find(obj => obj.category === place._rawJson.fields.category);
//       console.log(place._rawJson.fields);
//       return {
//         ...place._rawJson.fields,
//         color: colorObj.color
//       };
//     });
//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

//   }, function done(err) {
//       if (err) { console.error(err); return; }
//   });
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
        color: colorObj?.color
      };
    }))
    .catch((error) => {console.error(error)});
};

// export const fetchPlace = async(id) => {
//   const result = await base('Safe Places').find(id, function(err, record) {
//     if (err) { console.error(err); return; }

//     const colorObj = colorCategories.find(obj => obj.category === record?._rawJson.fields.category);

//     console.log({
//       ...record?._rawJson.fields,
//       color: colorObj.color
//     }, 'inner result');

//     return {
//       ...record?._rawJson.fields,
//       color: colorObj.color
//     }
//   });
//   console.log(result, 'outer result');
//   return result;
// };

export const fetchPlace = async(id) => {
  const place = await base('Safe Places').find(id);

  const colorObj = colorCategories.find(obj => obj.category === place?._rawJson.fields.category);

  return {
    ...place?._rawJson.fields,
    color: colorObj.color
  }
};

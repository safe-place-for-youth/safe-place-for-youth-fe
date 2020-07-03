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

export const fetchPlace = async(id) => {
  const place = await base('Safe Places').find(id);

  const colorObj = colorCategories.find(obj => obj.category === place?._rawJson.fields.category);

  return {
    ...place?._rawJson.fields,
    color: colorObj.color
  }
};

import { API_URL, API_KEY, AT_URL, MAPS_API_KEY } from 'react-native-dotenv';
import { colorCategories } from '../constants/Colors';
import Airtable from 'airtable';

const base = new Airtable({apiKey: `${API_KEY}`}).base('appm2DPTBMOxDyjCJ');

export const fetchAllPlaces = async() => {
  const places = await base('Safe Places')
    .select({ maxRecords: 50, view: 'Grid view'})
    .all();
  return places.map(place => {
    const colorObj = colorCategories.find(obj => obj.category === place._rawJson.fields.category);
      
    return {
      ...place._rawJson.fields,
      color: colorObj.color
    };
  })
};

export const fetchPlace = async(id) => {
  const place = await base('Safe Places').find(id);
  const { category } = place._rawJson.fields;

  const colorObj = colorCategories.find(obj => obj.category === category);

  return {
    ...place._rawJson.fields,
    color: colorObj.color
  }
};

export const fetchNearestPlaces = async(lat, long) => {
  await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1000&type=point_of_interest&keyword=divvy&key=${API_KEY}`)
};
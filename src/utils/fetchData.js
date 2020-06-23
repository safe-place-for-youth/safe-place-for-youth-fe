export const fetchAllPlaces = () => {
  return fetch('https://safe-place-for-youth-be.herokuapp.com/api/v1/places')
    .then(res => res.json())
    .catch((error) => {console.error(error)});
}
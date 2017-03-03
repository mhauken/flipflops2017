const EARTH_RADIUS = 6371;
const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
}

const rad2deg = (radians) => {
  return radians * 180 / Math.PI;
};

const calculcateDistanceBetweenLocations = (location1, location2) => {
  const dLat = deg2rad(location2.lat - location1.lat);
  const dLon = deg2rad(location2.lng - location1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(location1.lat)) * Math.cos(deg2rad(location2.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c * 1000;
}

const calculcateZoom = (location1, location2) => {
  const distance = calculcateDistanceBetweenLocations(location1, location2);
  return Math.floor(25 - Math.log2(distance));
}

const calculateGeoMidpoint = (location1, location2) => {
  const dLon = deg2rad(location2.lng - location1.lng);
  const lat1 = deg2rad(location1.lat);
  const lat2 = deg2rad(location2.lat);
  const lon1 = deg2rad(location1.lng);

  const bx = Math.cos(lat2) * Math.cos(dLon);
  const by = Math.cos(lat2) * Math.sin(dLon);
  const lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + bx) * (Math.cos(lat1) + bx) + by * by));
  const lon3 = lon1 + Math.atan2(by, Math.cos(lat1) + bx);

  return {lat: rad2deg(lat3), lng: rad2deg(lon3)};
}

const getGeolocationDataForMap = (location1, location2) => {
  return { midpoint: calculateGeoMidpoint(location1, location2), zoom: calculcateZoom(location1, location2) };
}

export default getGeolocationDataForMap;
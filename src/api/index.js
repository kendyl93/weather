import axios from 'axios';

const API_KEY = 'dcc5b65560b4c5a817bd29988271028e';

const ENDPOINT_BASE_URL = `http://api.openweathermap.org/data/2.5`;

export const getCityData = async (cityName) =>
  await axios(`${ENDPOINT_BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}`);
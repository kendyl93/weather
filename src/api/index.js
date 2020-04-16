import axios from 'axios';

const API_KEY = 'dcc5b65560b4c5a817bd29988271028e';

const ENDPOINT_BASE_URL = `http://api.openweathermap.org/data/2.5`;

export const getCityData = async (cityName) => {
  try {
    return await axios(
      `${ENDPOINT_BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}`,
    );
  } catch (error) {
    console.error(error);
  }

  return false;
};

export const get5DaysForecastByCityId = async (cityId) => {
  try {
    return await axios(
      `${ENDPOINT_BASE_URL}/forecast?id=${cityId}&cnt=5&appid=${API_KEY}`,
    );
  } catch (error) {
    console.error(error);
  }

  return false;
};

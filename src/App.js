import React, { useState } from 'react';
import './App.css';
import City from './City';
import { any } from './utils/array';
import { getCityData } from './api';

const getData = async (cityName) => {
  try {
    const result = await getCityData(cityName);

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

const RenderCities = ({ cities }) => {
  return (
    any(cities) &&
    cities.map(({ name, country, sunrise, sunset }) => (
      <City
        key={name}
        name={name}
        country={country}
        sunrise={sunrise}
        sunset={sunset}
      />
    ))
  );
};

const App = () => {
  const [data, setData] = useState();
  const [cityName, setCityName] = useState('London');
  const [cities, setCities] = useState([]);

  const handleCityName = ({ target: { value } }) => setCityName(value);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const cityData = await getData(cityName);

    setData(cityData);
    setCities([...cities, cityData?.city]);
  };

  return (
    <div className="App">
      <header className="App-header">Weather tracker</header>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={cityName}
          onChange={handleCityName}
          placeholder="i.e. London"
        />
        <button type="submit">Get</button>
      </form>
      <RenderCities cities={cities} />
      {console.log({ data })}
    </div>
  );
};

export default App;

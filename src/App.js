import React, { useState } from 'react';
import './App.css';
import City from './City';
import { any } from './utils/array';
import { getCityData } from './api';
import { cityAlreadyFetched } from './helpers';
import Hint from './Hint';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
  const [hint, setHint] = useState('');

  const handleCityName = ({ target: { value } }) => setCityName(value);

  const onFormSubmit = async (event) => {
    setHint();
    event.preventDefault();
    event.stopPropagation();
    const cityData = await getData(cityName);

    setData(cityData);

    const maybeAlreadyFetched = cityAlreadyFetched(cities)(cityData);

    if (maybeAlreadyFetched) {
      return setHint(`${cityName} data already fetched!`);
    }

    setCities([...cities, cityData?.city]);
  };

  return (
    <Container className="App">
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
      {hint && <Hint>{hint}</Hint>}
      <Row xs={2} md={5}>
        <RenderCities cities={cities} />
      </Row>
      {console.log({ data })}
    </Container>
  );
};

export default App;

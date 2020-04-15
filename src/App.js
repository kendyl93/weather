import React, { useState } from 'react';
import City from './Components/City';
import { any } from './utils/array';
import { getCityData } from './api';
import { cityAlreadyFetched } from './helpers';
import Hint from './UI/Hint';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CityForm from './Components/CityForm';
import Header from './UI/Header';
import Spinner from './UI/Spinner';

import './App.scss';

const getData = async (cityName) => {
  try {
    const result = await getCityData(cityName);

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

const RenderCities = ({ cities }) =>
  any(cities) &&
  cities.map(({ name, country, sunrise, sunset }) => (
    <City
      key={name}
      name={name}
      country={country}
      sunrise={sunrise}
      sunset={sunset}
    />
  ));

const App = () => {
  const [data, setData] = useState(undefined);
  const [cityName, setCityName] = useState('London');
  const [isLoading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [hint, setHint] = useState();

  const handleCityName = ({ target: { value } }) => setCityName(value);

  const onFormSubmit = async (event) => {
    setData(null);
    setHint();
    event.preventDefault();
    event.stopPropagation();

    try {
      const cityData = await getData(cityName);

      setData(cityData);

      const maybeAlreadyFetched = cityAlreadyFetched(cities)(cityData);

      if (maybeAlreadyFetched) {
        return setHint({
          message: `${cityName} data already fetched!`,
          variant: 'warning',
        });
      }

      setCities([...cities, cityData?.city]);
    } catch (error) {
      setHint({ message: 'Something went wrong', variant: 'danger' });
    }
  };

  return (
    <Container className="row-spacing">
      <Header Tag="h1">Weather tracker</Header>
      <CityForm
        onFormSubmit={onFormSubmit}
        handleCityName={handleCityName}
        cityName={cityName}
      />
      {hint && <Hint hint={hint} />}
      {data === null && <Spinner />}
      <Row xs={2} md={5}>
        <RenderCities cities={cities} />
      </Row>
      {console.log({ data })}
    </Container>
  );
};

export default App;

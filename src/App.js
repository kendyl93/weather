import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import City from './Components/City';
import any from './utils/array';
import { getCityData } from './api';
import { cityAlreadyFetched } from './helpers';
import { showMin, showMax, showMean, showMode } from './utils/math';
import Hint from './UI/Hint';
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

  return false;
};

const RenderCities = ({ cities }) =>
  any(cities) &&
  cities.map(({ city, list }) => {
    const { id, name, country, sunrise, sunset } = city;
    const temperatures = list.map(({ main: { temp } }) => temp - 273.15);
    const minTemperature = showMin(temperatures);
    const maxTemperature = showMax(temperatures);
    const meanTemperature = showMean(temperatures);
    const modeTemperature = showMode(temperatures).mode;

    return (
      <City
        key={name}
        name={name}
        cityId={id}
        country={country}
        sunrise={sunrise}
        sunset={sunset}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
        meanTemperature={meanTemperature}
        modeTemperature={modeTemperature}
      />
    );
  });

const App = () => {
  const [data, setData] = useState(undefined);
  const [cityName, setCityName] = useState('');
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

      return setCities([
        ...cities,
        { city: cityData?.city, list: cityData?.list },
      ]);
    } catch (error) {
      setHint({ message: 'Something went wrong', variant: 'danger' });
    }

    return false;
  };

  useEffect(() => {
    if (cities.length > 0) {
      localStorage.setItem('cities', JSON.stringify(cities));
    }
  }, [cities]);

  useEffect(() => {
    setCities(JSON.parse(localStorage.getItem('cities') || '[]'));
  }, []);

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
      {console.log({ cities })}
    </Container>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Header from '../UI/Header';

import { fromUnixTimestampToDate } from '../utils/date';

const CityWrapper = styled.div`
  background-color: #eaeaea;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 32px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e2e2e2;
  }
`;

const RestInfo = styled.div`
  color: black;
`;

const TemperaturesWrapper = styled.div`
  margin-bottom: 32px;
`;

const formatWithCelcius = (data) => (
  <span>
    <span>{data}</span>
    <span>&deg;C</span>
  </span>
);

const City = ({
  cityId,
  name,
  country,
  sunrise,
  sunset,
  minTemperature,
  maxTemperature,
  meanTemperature,
  modeTemperature,
}) => {
  const sunriseDate = fromUnixTimestampToDate(sunrise);
  const sunsetDate = fromUnixTimestampToDate(sunset);

  return (
    <Col>
      <CityWrapper>
        <Link to={`/forecast/${cityId}`}>
          <Header Tag="h4">
            {name} - {country}
          </Header>
          <RestInfo>
            <TemperaturesWrapper>
              <div>min: {formatWithCelcius(minTemperature)}</div>
              <div>max: {formatWithCelcius(maxTemperature)}</div>
              <div>mean: {formatWithCelcius(meanTemperature)}</div>
              <div>mode: {formatWithCelcius(modeTemperature)}</div>
            </TemperaturesWrapper>
            <div>
              <div>Sunrise: {sunriseDate.toLocaleTimeString()}</div>
              <div>Sunset: {sunsetDate.toLocaleTimeString()}</div>
            </div>
          </RestInfo>
        </Link>
      </CityWrapper>
    </Col>
  );
};

export default City;

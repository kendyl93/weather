import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Header from '../UI/Header';

import fromUnixTimestampToDate from '../utils/date';

const CityWrapper = styled.div`
  border: solid 1px;
  padding: 8px;
  border-radius: 16px;
`;

const City = ({ cityId, name, country, sunrise, sunset }) => {
  const sunriseDate = fromUnixTimestampToDate(sunrise);
  const sunsetDate = fromUnixTimestampToDate(sunset);

  return (
    <Col>
      <CityWrapper>
        <Link to={`/forecast/${cityId}`}>
          <Header Tag="h4">
            {name} - {country}
          </Header>
          <div>Sunrise: {sunriseDate.toLocaleTimeString()}</div>
          <div>Sunset: {sunsetDate.toLocaleTimeString()}</div>
        </Link>
      </CityWrapper>
    </Col>
  );
};

export default City;

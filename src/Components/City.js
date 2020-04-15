import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Header from '../UI/Header';

import fromUnixTimestampToDate from '../utils/date';

const CityWrapper = styled.div`
  border: solid 1px;
  padding: 8px;
  border-radius: 16px;
`;

const City = ({ name, country, sunrise, sunset }) => {
  const sunriseDate = fromUnixTimestampToDate(sunrise);
  const sunsetDate = fromUnixTimestampToDate(sunset);

  return (
    <Col>
      <CityWrapper>
        <Header Tag="h4">
          {name} - {country}
        </Header>
        <div>Sunrise: {sunriseDate.toLocaleTimeString()}</div>
        <div>Sunset: {sunsetDate.toLocaleTimeString()}</div>
      </CityWrapper>
    </Col>
  );
};

export default City;

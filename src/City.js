import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';

const CityWrapper = styled.div`
  border: solid 1px;
  padding: 8px;
  border-radius: 16px;
`;

const City = ({ name, country, sunrise, sunset }) => {
  return (
    <Col>
      <CityWrapper>
        <h4>
          {name} - {country}
        </h4>
        <div>Sunrise: {new Date(sunrise).toString()}</div>
        <div>Sunset: {new Date(sunset).toString()}</div>
      </CityWrapper>
    </Col>
  );
};

export default City;

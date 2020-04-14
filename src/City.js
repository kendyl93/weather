import React from 'react';
import styled from 'styled-components';

const CityWrapper = styled.div`
  border: solid 1px;
`;

const City = ({ name, country, sunrise, sunset }) => {
  return (
    <CityWrapper>
      <h4>
        {name} - {country}
      </h4>
      <div>sunrise: {new Date(sunrise).toString()}</div>
      <div>{new Date(sunset).toString()}</div>
    </CityWrapper>
  );
};

export default City;
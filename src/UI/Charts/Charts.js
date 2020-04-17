import React from 'react';
import styled from 'styled-components';
import TemperatureChart from '../../Components/TemperatureChart';
import HumidityChart from '../../Components/HumidityChart';

const ChartsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 60px 0;

  > div {
    margin: 0 32px;
  }
`;

const Charts = ({ data }) => (
  <ChartsWrapper>
    <TemperatureChart data={data} />
    <HumidityChart data={data} />
  </ChartsWrapper>
);

export default Charts;

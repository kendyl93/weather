import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';
import styled from 'styled-components';
import any from '../utils/array';
import { getFormattedDateTime } from '../utils/date';
import { showMin, showMax } from '../utils/math';

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

const temperaturesData = (data) =>
  any(data) &&
  data.map(({ dateTime, temperature }) => ({
    x: getFormattedDateTime(dateTime),
    y: temperature,
  }));

const humidityData = (data) =>
  any(data) &&
  data.map(({ dateTime, humidity }) => ({
    x: getFormattedDateTime(dateTime),
    y: humidity,
  }));

const calculateYDomain = (data) => {
  const minValue = showMin(data);
  const maxValue = showMax(data);

  return [minValue, maxValue];
};

const byY = ({ y }) => y;

const Charts = ({ data }) => {
  const temperatureDataToDisplay = temperaturesData(data);
  const temperatures = temperatureDataToDisplay.map(byY);
  const yTemperatureDomain = calculateYDomain(temperatures);

  const humidityDataToDisplay = humidityData(data);
  const humidity = humidityDataToDisplay.map(byY);
  const yHumidityDomain = calculateYDomain(humidity);

  return (
    <ChartsWrapper>
      <XYPlot
        xType="ordinal"
        width={300}
        height={300}
        yDomain={yTemperatureDomain}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-15} title="Time" />
        <YAxis title="Degrees(&deg;C)" />
        <LineSeries
          data={temperatureDataToDisplay}
          style={{ strokeWidth: 3 }}
        />
      </XYPlot>
      <XYPlot
        xType="ordinal"
        width={300}
        height={300}
        yDomain={yHumidityDomain}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-15} title="Time" />
        <YAxis title="Himidity(%)" />
        <LineSeries data={humidityDataToDisplay} style={{ strokeWidth: 3 }} />
      </XYPlot>
    </ChartsWrapper>
  );
};

export default Charts;

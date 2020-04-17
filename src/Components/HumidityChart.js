import React from 'react';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import { getFormattedDateTime } from '../utils/date';
import any from '../utils/array';
import calculateYDomain from '../utils/charts';
import byY from '../UI/Charts/helpers';

const humidityData = (data) =>
  any(data) &&
  data.map(({ dateTime, humidity }) => ({
    x: getFormattedDateTime(dateTime),
    y: humidity,
  }));

const TemperatureChart = ({ data }) => {
  const humidityDataToDisplay = humidityData(data);
  const humidity = humidityDataToDisplay.map(byY);
  const yHumidityDomain = calculateYDomain(humidity);

  return (
    <XYPlot xType="ordinal" width={300} height={300} yDomain={yHumidityDomain}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-15} title="Time" />
      <YAxis title="Humidity (%)" />
      <LineSeries data={humidityDataToDisplay} style={{ strokeWidth: 3 }} />
    </XYPlot>
  );
};

export default TemperatureChart;

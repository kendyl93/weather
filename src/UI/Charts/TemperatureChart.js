import React from 'react';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import { getFormattedDateTime } from '../../utils/date';
import any from '../../utils/array';
import calculateYDomain from '../../utils/charts';
import byY from './helpers';

const temperaturesData = (data) =>
  any(data) &&
  data.map(({ dateTime, temperature }) => ({
    x: getFormattedDateTime(dateTime),
    y: temperature,
  }));

const TemperatureChart = ({ data }) => {
  const temperatureDataToDisplay = temperaturesData(data);
  const temperatures = temperatureDataToDisplay.map(byY);
  const yTemperatureDomain = calculateYDomain(temperatures);

  return (
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
      <LineSeries data={temperatureDataToDisplay} style={{ strokeWidth: 3 }} />
    </XYPlot>
  );
};

export default TemperatureChart;

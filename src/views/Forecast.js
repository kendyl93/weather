import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../UI/Header';
import { get5DaysForecastByCityId } from '../api';
import { fromUnixTimestampToDate } from '../utils/date';
import { kelvinToCelcius } from '../utils/math';
import any from '../utils/array';
import Charts from '../UI/Charts';

const Forecast = () => {
  const { cityId } = useParams();
  const [cityData, setCityData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await get5DaysForecastByCityId(cityId);
        setCityData(result);
      } catch (error) {
        console.error(error);
      }
      return false;
    };

    fetchData();
  }, []);

  const transformData = cityData?.data?.list.map(
    ({ dt, main: { humidity, temp } }) => ({
      dateTime: fromUnixTimestampToDate(dt),
      temperature: kelvinToCelcius(temp),
      humidity,
    }),
  );

  return (
    <Container>
      <Row>
        <Header Tag="h1">
          Forecast for {cityData && cityData.data.city?.name}
        </Header>
      </Row>
      <Row>{any(transformData) && <Charts data={transformData} />}</Row>
    </Container>
  );
};

export default Forecast;

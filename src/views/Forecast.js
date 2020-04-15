import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../UI/Header';
import { getCityDataByCityId } from '../api';

const Forecast = () => {
  const { cityId } = useParams();
  const [cityData, setCityData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCityDataByCityId(cityId);
        setCityData(result);
      } catch (error) {
        console.error(error);
      }
      return false;
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Header Tag="h1">
          Forecast for {cityData && cityData.data.city?.name}
        </Header>
      </Row>
    </Container>
  );
};

export default Forecast;

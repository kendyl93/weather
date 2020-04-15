import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormWrapper = styled.div`
  form {
    display: flex;

    .form-control {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .btn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

const CityForm = ({ onFormSubmit, handleCityName, cityName }) => (
  <FormWrapper>
    <Form onSubmit={onFormSubmit}>
      <Form.Control
        type="text"
        value={cityName}
        onChange={handleCityName}
        placeholder="i.e. London"
      />
      <Button variant="primary" type="submit">
        Show Weather
      </Button>
    </Form>
  </FormWrapper>
);

export default CityForm;

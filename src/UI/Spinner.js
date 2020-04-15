import React from 'react';
import styled from 'styled-components';
import { Spinner as SpinnerBS } from 'react-bootstrap';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = ({ variant = 'primary' }) => (
  <SpinnerWrapper>
    <SpinnerBS animation="border" variant={variant} />
  </SpinnerWrapper>
);

export default Spinner;

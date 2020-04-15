import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Hint = ({ hint }) => {
  const { message, variant } = hint;

  return <Alert variant={variant}>{message}</Alert>;
};

export default Hint;

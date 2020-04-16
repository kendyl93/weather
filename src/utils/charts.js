import { showMin, showMax } from './math';

const calculateYDomain = (data) => {
  const minValue = showMin(data);
  const maxValue = showMax(data);

  return [minValue, maxValue];
};

export default calculateYDomain;

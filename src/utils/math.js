const roundTo2Decimals = (value) =>
  Math.round((value + Number.EPSILON) * 100) / 100;

export const showMin = (data) => {
  const minValue = Math.min(...data);

  return roundTo2Decimals(minValue);
};

export const showMax = (data) => {
  const maxValue = Math.max(...data);

  return roundTo2Decimals(maxValue);
};

const sum = (a, b) => a + b;

const sumValues = (values) => values.reduce(sum, 0);

export const showMean = (data) => {
  const countData = data.length;
  if (countData === 0) {
    return 0;
  }

  const dataSum = sumValues(data);
  if (dataSum === 0) {
    return 0;
  }

  return roundTo2Decimals(dataSum / countData);
};

const increment = (value) => 1 + value;

export const showMode = (data) => {
  const initialValues = { mode: null, modeFreq: 0, numMap: {} };

  return data.reduce((current, num) => {
    const { numMap } = current;
    const numberExist = num in numMap;

    const freq = numberExist ? increment(numMap[num]) : (numMap[num] = 1);

    if (freq > current.modeFreq && freq > 1) {
      // eslint-disable-next-line no-param-reassign
      current.modeFreq = freq;
      // eslint-disable-next-line no-param-reassign
      current.mode = roundTo2Decimals(num);
    }
    return current;
  }, initialValues);
};

export const kelvinToCelcius = (value) => roundTo2Decimals(value - 273.15);

const fromKelvinsToCelcius = value => Math.round(value - 273.15);

export const calculateDataToCelcius = data => data.map(fromKelvinsToCelcius)
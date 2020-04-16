export const fromUnixTimestampToDate = (dateTime) => {
  const unixTimestamp = new Date(dateTime).getTime();

  return new Date(unixTimestamp * 1000);
};

export const getFormattedDateTime = (dateTime) => {
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  const hoursToDisplay = `${hours}`.length === 1 ? `0${hours}` : hours;
  const minutesToDisplay = `${minutes}`.length === 1 ? `0${minutes}` : minutes;

  return `${year}-${month}-${day} ${hoursToDisplay}:${minutesToDisplay}`;
};

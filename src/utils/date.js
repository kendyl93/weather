export const fromUnixTimestampToDate = (dateTime) => {
  const unixTimestamp = new Date(dateTime).getTime();

  return new Date(unixTimestamp * 1000);
};

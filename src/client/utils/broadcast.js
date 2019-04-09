export const REQUEST_CITY = "REQUEST_CITY";

export const requestCity = (cityName) => ({
  type: REQUEST_CITY,
  filter: cityName
});


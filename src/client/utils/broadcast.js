export const REQUEST_CITY = "REQUEST_CITY";
export const INFORMATION_GRANT = "INFORMATION_GRANT";

export const requestCity = (cityName, peerId) => ({
  type: REQUEST_CITY,
  filter: cityName,
  sender: peerId
});

export const grantInformation = (information, grantedTo) => ({
  type: INFORMATION_GRANT,
  information,
  grantedTo
});


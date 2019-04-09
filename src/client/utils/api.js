export const post = (url, data) => {
  return fetch(url, {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
};

export const get = (url, data) => {
  return fetch(url, {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
    }
  }).then(res=>res.json());
};

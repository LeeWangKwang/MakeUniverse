const axios = require("axios");

export function get(url, params, resFunc) {
  axios
    .get(url, { params })
    .then(response => {
      resFunc(response);
    })
    .catch(error => {
      console.log("api call error : " + error);
    })
    .then(() => {});
}

export function post(url, params, resFunc) {
  axios
    .post(url, params)
    .then(response => {
      resFunc(response);
    })
    .catch(error => {
      console.log("api post error : " + error);
    });
}

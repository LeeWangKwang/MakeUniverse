const axios = require("axios");
const api = "http://10.10.0.105:8808";

export function get(url, params, resFunc) {
  axios
    .get(api + url, { params })
    .then(response => {
      resFunc(response.data);
    })
    .catch(error => {
      console.log("api call error : " + error);
    })
    .then(() => {});
}

export function post(url, params, resFunc) {
  axios
    .post(api + url, params)
    .then(response => {
      resFunc(response.data);
    })
    .catch(error => {
      console.log("api post error : " + error);
    });
}

const axios = require("axios");
const api = "https://nzm3ryv4qb.execute-api.us-west-1.amazonaws.com/dev/get";

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

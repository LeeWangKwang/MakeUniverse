import loginPageStyle from "./assets/jss/material-kit-react/views/loginPage";

const axios = require("axios");
const transport = axios.create({
  withCredentials: true
})

// const api = "https://nzm3ryv4qb.execute-api.us-west-1.amazonaws.com/dev/get";
const api = 'https://corgi.codechain.io/new-console/api/'

export function get(url, params, resFunc) {
  transport
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
  transport
    .post(api + url, params)
    .then(response => {
      resFunc(response.data);
      console.log(response)
      console.log(response.data)
    })
    .catch(error => {
      console.log("api post error : " + error);
    });
}

// export function resetCookie(url, params, resFunc) {
//   axios
//     .get(api, {
//       headers: {
//         Cookie: "cookie1=value; cookie2=value; cookie3=value;"
//       }
//     }).then(response => {
//       console.log(response);
//     });
// }

export function kodeBox(url, params, resFunc) {
  let api = 'https://r1it7wjcz8.execute-api.ap-northeast-1.amazonaws.com/dev/'
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
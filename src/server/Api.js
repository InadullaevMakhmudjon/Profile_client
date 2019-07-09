import axios from 'axios';

export function execute(promise) {
  return new Promise((resolve, reject) => {
    promise.then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(new Error(`${err}`));
    });
  });
}

export const AXIOS = axios.create({
  baseURL: 'http://localhost:3031/api/',
});

export default () => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return AXIOS;
};

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

export const Axios = () => axios.create({
  baseURL: 'http://192.168.0.103:3031/api',
  defaults: {
    headers: {
      common: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  },
});

export default Axios;

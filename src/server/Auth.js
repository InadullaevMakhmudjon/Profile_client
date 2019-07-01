import Api, { execute } from './Api';

export default {
  about: () => new Promise((resolve, reject) => {
    Api().get('/auth/').then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(new Error(`${err}`));
    });
  }),
  login: ({ username, password }) => new Promise((resolve, reject) => {
    Api().post('/auth/login', { username, password })
      .then((response) => {
        resolve(response.data.token);
      }).catch((err) => {
        reject(new Error(`${err}`));
      });
  }),
  register: ({
    name, email, password, username,
  }) => execute(Api().post('/auth/register', {
    name, email, password, username,
  })),
};

import Api, { execute, AXIOS } from './Api';

export default {
  about: () => execute(Api().get('auth/')),
  login: ({ username, password }) => new Promise((resolve, reject) => {
    AXIOS.post('/auth/login', { username, password })
      .then((response) => {
        resolve(response.data.token);
      }).catch((err) => {
        reject(new Error(`${err}`));
      });
  }),
  register: ({
    name, email, password, username,
  }) => execute(AXIOS.post('/auth/register', {
    name, email, password, username,
  })),
};

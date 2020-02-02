import axios from 'axios';

export const requestAdapter = (() => {
  const API_ORIGIN = 'http://localhost:1337';
  const API_TIMEOUT = 3000;

  return axios.create({
    baseURL: API_ORIGIN,
    timeout: API_TIMEOUT,
  });
})();

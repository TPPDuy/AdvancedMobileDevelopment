import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.itedu.me',
  timeout: 5000,

});

const api = {
  get: (url, params) => instance.get(`${url}`, params),
  post: (url, data, config) => instance.post(`${url}`, data, config),
};

export default api;

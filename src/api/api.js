/* eslint-disable no-undef */
import { getUserInfo } from '../storage/Storage';
import { isEmptyObject, objectToQueryString } from '../utils/CommonUtils';

// const instance = axios.create({
//   baseURL: 'https://api.itedu.me',
// });

const host = 'https://api.itedu.me';
const authType = 'Bearer';

// const api = {
//   get: (url) => instance.get(`${url}`),
//   post: (url) => instance.post(`${url}`),
//   postWithConfig: (url, config) => instance.post(`${url}`, config),
//   getWithConfig: (url, config) => instance.get(`${url}`, config),
// };

const request = async (url, data, config, method = 'GET') => {
  let newUrl = url;
  const newData = data;
  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (config) options = { ...options, ...config };

  if (newData && !isEmptyObject(newData)) {
    if (method === 'GET') {
      // eslint-disable-next-line no-param-reassign
      newUrl += `?${objectToQueryString(newData)}`;
    } else {
      options.body = JSON.stringify(newData);
    }
  }

  const user = await getUserInfo();
  if (user) {
    const accessToken = user.token;

    if (accessToken) {
      options.headers.Authorization = `${authType} ${accessToken}`;
    }
  }
  try {
    const response = await fetch(host + newUrl, options);
    if (response.status === 200) {
      const body = await response.json();
      console.log('response success: ', body);
      return body;
    }
    const body = await response.json();
    console.log('response error: ', body);
    return null;
  } catch (e) {
    console.log('error', e);
    return null;
  }
};

const get = (url, params) => request(url, params);
const post = (url, data, config) => request(url, data, config, 'POST');

export default {
  get,
  post,
};

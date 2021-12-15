/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const instance = axios.create();

const getBaseUrl = async () => {
  let url;
  const requestUrl = `${window.location.href.substring(0, window.location.href.lastIndexOf('gui-service/'))}gui-service/`;
  const res = await axios.get(`${requestUrl}env.json`).then((results) => {
    url = results.data.REACT_APP_AUTH_URL;
  }).catch((response) => {
    console.error(response);
  });
  return url;
};

instance.interceptors.request.use(
  async (config) => {
    const conf = config;
    const url = await getBaseUrl();
    conf.baseURL = url;
    return conf;
  }, (error) => Promise.reject(error),
);

export default instance;

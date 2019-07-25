import axiosFactory from 'axios';

const axios = axiosFactory.create({
  baseURL: process.env.VUE_APP_API_ORIGIN,
});

export default axios;

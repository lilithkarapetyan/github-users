import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/users',
  timeout: 1000
});

axiosInstance.interceptors.response.use(response => response, (error) => {
  console.log(error);
  return Promise.reject(error);
});

export default axiosInstance;
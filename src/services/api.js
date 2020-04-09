import axios from 'axios';
import { getAuthentication } from './auth';

const api = axios.create({
  baseURL: "http://localhost:8080",
  mode: "no-cors"
})


api.interceptors.request.use(async config => {
  const authentication = getAuthentication();
  if (authentication) {
    config.headers.Authorization = `${authentication.type} ${authentication.token}`
  }

  return config
});

export default api;
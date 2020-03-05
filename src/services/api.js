import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080",
  mode: "no-cors"
})

export default api;
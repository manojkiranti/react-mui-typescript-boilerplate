import axios from "axios";
let baseEndpoint = '';

if(import.meta.env.DEV) {
  baseEndpoint = `${import.meta.env.VITE_API_URL_DEV}`;
}
if(import.meta.env.PROD) {
  baseEndpoint = `${import.meta.env.VITE_API_URL_PROD}`;
}
const instance = axios.create({
    baseURL: baseEndpoint,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    timeout: 50000 // request timeout
  });
  
instance.interceptors.request.use((config) => {
    return config
})

export default instance;

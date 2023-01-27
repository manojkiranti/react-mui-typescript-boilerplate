import axios from "axios";

let baseUrl="https://bankgenie.dghub.io";

const baseEndpoint = `${baseUrl}/api/v1/`;
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

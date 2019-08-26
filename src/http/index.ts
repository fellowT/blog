import axios, {AxiosInstance ,AxiosRequestConfig, AxiosResponse,AxiosError} from 'axios'
// create axios instance
const http: AxiosInstance = axios.create({
  timeout: 10000
})
// Add a request interceptor
http.interceptors.request.use( (config: AxiosRequestConfig ) => {
  // Do something before request is sent
  return config;
}, (error: AxiosError) =>{
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use( (response: AxiosResponse) => {
  // Do something with response data
  return response;
},  (error: AxiosError) =>{
  // Do something with response error
  return Promise.reject(error);
});
export default http
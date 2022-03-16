import axios from "axios";

const instance = axios.create({

  baseURL: process.env.REACT_APP_BASE_URL
});


instance.interceptors.request.use(function (config) {
 
  if (localStorage.getItem("user_data") !== null) {
    const token = `Bearer ${JSON.parse(localStorage.getItem("user_data")).token}`;
    config.headers.authorization = token;
  }
  return config;

}, function (error) {

  return Promise.reject(error);
  
});


instance.interceptors.response.use(function (response) {
  
  return response;
}, function (error) {

  return Promise.reject(error);
});


export default instance;
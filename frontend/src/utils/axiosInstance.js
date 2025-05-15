// src/utils/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/auth',  // replace with your backend URL
  withCredentials: true,             // allows cookies (for JWT auth)
});

export default instance;

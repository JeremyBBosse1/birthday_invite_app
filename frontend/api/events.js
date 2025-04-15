import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/events/',
});

// Add token to headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getEvents = () => API.get('/');
export const createEvent = (eventData) => API.post('/', eventData);

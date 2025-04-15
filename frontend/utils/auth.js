import axios from 'axios';

export const login = async (email, password) => {
  const response = await axios.post('/api/token/', {email, password});
  localStorage.setItem('access', response.data.access);
  localStorage.setItem('refresh', response.data.refresh);
};

export const logout = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
};

export const getAccessToken = () => localStorage.getItem('access');

export const authHeader = () => {
  const token = getAccessToken();
  return token ? {Authorization: 'Bearer ${token}'}:{};
};

export function isAuthenticated() {
  const token = localStorage.getItem('accessToken');
  return !!token;
}

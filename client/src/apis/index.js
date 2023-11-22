import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_APP_IP,
  headers: { 'Content-Type': 'application/json', userId: 1 },
});

export default client;

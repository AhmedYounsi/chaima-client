/* eslint-disable */
import axios from 'axios';
import host from './host';

const api = axios.create({
  baseURL: host,
  headers: { 
    'Content-Type': 'application/json',
  },
});
export default api;

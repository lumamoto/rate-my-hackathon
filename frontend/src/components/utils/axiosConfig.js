import axios from 'axios';

const env = process.env.NODE_ENV; // current environment
const atlas_uri = process.env.ATLAS_URL; // current environment

export const app = axios.create({
  baseURL:
    env === 'prod'
      ? atlas_uri + '/api/' // production
      : 'http://localhost:8082/api/', // development
});
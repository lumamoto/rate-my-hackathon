import axios from 'axios';

// const env = process.env.NODE_ENV; // current environment
const atlas_uri = process.env.ATLAS_URI; // current environment

export const app = axios.create({
  baseURL: atlas_uri + '/api/hackathons'
    // env === 'prod'
    //   ? atlas_uri + '/api/hackathons' // production
    //   : 'http://localhost:8082/api/hackathons', // development
});
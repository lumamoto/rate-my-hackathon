import axios from 'axios';

// const dotenv = require('dotenv');
// dotenv.config({path: '/.env'});
// const atlas_uri = process.env.ATLAS_URI;
// const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL: 'https://ratemyhackathon.herokuapp.com/api/hackathons'
    // env === 'prod'
    //   ? atlas_uri + '/api/hackathons' // production
    //   : 'http://localhost:8082/api/hackathons', // development
});
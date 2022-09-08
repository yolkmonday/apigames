const axios = require('axios')
const api = axios.create({
  baseURL: 'https://v1.apigames.id',
  timeout: 60000
});

module.export = api

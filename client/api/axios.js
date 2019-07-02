import axios from 'axios';

const route = 'http://localhost:5000/api';

export default {
  create: () => axios.create({
    baseURL: route,
    timeout: 10000,
  })
}

import axios from './axios';

const route = '/weather';

export default {
  search: async (name) => {
    return axios.create().get(`${route}?q=${name}`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return [];
    })
  },

  searchById: async (id) => {
    return axios.create().get(`${route}/${id}`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return [];
      });
  },

  add: async (weather) => {
    return axios.create().post(`${route}`, weather)
      .then()
      .catch(err => console.log(err));
  },

  delete: async (id) => {
    return axios.create().delete(`${route}/${id}`)
      .then()
      .catch(err => console.log(err))
  },

  update: async (id, weather) => {
    return axios.create().put(`${route}/${id}`, weather)
      .then()
      .catch(err => console.log(err));
  }
}

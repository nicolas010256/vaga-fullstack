import axios from './axios';

const route = '/pokemon';

export default {
  search: async (name) => {
    return axios.create().get(`${route}?q=${name}`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return [];
    });
  },

  searchById: async (id) => {
    return axios.create().get(`${route}/${id}`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return [];
      });
  },

  add: async (pokemon) => {
    return axios.create().post(`${route}`, pokemon)
      .then()
      .catch(err => console.log(err));
  },

  update: async (id, pokemon) => {
    return axios.create().put(`${route}/${id}`, pokemon)
      .then()
      .catch(err => console.log(err));
  },

  delete: async (id) => {
    return axios.create().delete(`${route}/${id}`)
      .then()
      .catch(err => console.log(err));
  }
}

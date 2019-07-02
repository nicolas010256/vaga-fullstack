import axios from './axios';

const route = '/type';

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
      })
  },

  add: async (type) => {
    return axios.create().post(`${route}`, type)
      .then()
      .catch(err => {
        console.log(err);
        return [];
      })
  },

  update: async (id, type) => {
    return axios.create().put(`${route}/${id}`, type)
      .then()
      .catch(err => console.log(err));
  },

  delete: async (id) => {
    return axios.create().delete(`${route}/${id}`)
      .then()
      .catch(err => console.log(err));
  }
}

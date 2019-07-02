const Sequelize = require('sequelize');
const db = require('../config/database');

const Weather = db.define('weather', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'id'
  },
  name: {
    type: Sequelize.STRING,
    field: 'name'
  }
});

module.exports = Weather;
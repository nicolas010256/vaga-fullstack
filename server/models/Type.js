const Sequelize = require('sequelize');
const db = require('../config/database');

const Type = db.define('type', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  name: {
    type: Sequelize.STRING,
    field: 'name'
  }
});

module.exports = Type;
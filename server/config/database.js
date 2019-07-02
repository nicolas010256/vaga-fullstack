const Sequelize = require('sequelize');

module.exports = new Sequelize({
    username: 'root',
    password: '123456',
    database: 'teste_redfox',
    host: '127.0.0.1',
    dialect: 'mysql',

    define: {
        freezeTableName: true,
        timestamps: false
    }
})
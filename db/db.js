const Sequelize = require('sequelize');
const {database, username, password} = require('./config.js');

const db = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;
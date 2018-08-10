const Sequelize = require('sequelize');
const db = require('../db.js');


const User = db.define('user', {
  username: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  photoAvar: Sequelize.STRING,
});

User
  .sync({ force: true })
  .then(() => {
    return User.create({
      username: 'potato',
      firstName: 'henry',
      lastName: 'han'
    });
  });


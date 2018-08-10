const Sequelize = require('sequelize');
const db = require('../db.js');


const Photo = db.define('photo', {
  url: Sequelize.STRING,
  description: Sequelize.STRING,
});

Photo
  .sync({ force: true })
  .then(() => {
    return Photo.create({
      url: 'http://test.com',
      description: 'this is a photot'
    });
  });


const Sequelize = require('sequelize');
const db = require('../db.js');


const StopsComment = db.define('stopsComment', {
  text: Sequelize.STRING,
  rating: Sequelize.FLOAT 
});

StopsComment
  .sync({ force: true })
  .then(() => {
    return StopsComment.create({
      text: 'this is a good stop comment',
      rating: 4.65
    });
  });


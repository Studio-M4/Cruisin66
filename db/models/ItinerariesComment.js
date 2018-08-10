const Sequelize = require('sequelize');
const db = require('../db.js');


const ItinerariesComment = db.define('itinerariesComment', {
  text: Sequelize.STRING,
  rating: Sequelize.FLOAT 
});

ItinerariesComment
  .sync({ force: true })
  .then(() => {
    return ItinerariesComment.create({
      text: 'this is a good itinerary comment',
      rating: 4.65
    });
  });


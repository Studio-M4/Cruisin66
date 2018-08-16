const db = require('../controllers/itinerary.js');
const app = require('../app.js');
const getItineraries = require('express').Router();

getItineraries.get('/itineraries', (req, res) => {
  console.log(req.query)
  let query = {
    userId: req.body.userId
  }

  db.getAllItineraries(query, (err, data) => {
    if (err) {
      res.sendStatus(500);
      res.send('Server side error happened');
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

module.exports = getItineraries;
const db = require('../../db/models/');

const getAllItineraries = (query, callback) => {
  // Fetch all Itineraries if there's no specified userId.
  //const where = query.userId ? { where: { userId: query.userId } } : {};

  db.Itinerary.findAll({
    include: [db.User, db.ItineraryPhoto],
    order: [ ['createdAt', 'DESC'] ]
  })
    .then(itineraries => {
      console.log(itineraries);
      callback(null, itineraries);
    })
    .catch(err => {
      // Handle any error in the chain
      console.error(err);
      callback(err, null);
    });
};

const getItineraryById = (query, callback) => {
  db.Itinerary.findOne({
    where: {
      id: query.id
    }
  })
    .then(itinerary => {
      console.log(itinerary);
      callback(null, itinerary);
    })
    .catch(err => {
      console.error(err);
      callback(err, null);
    });
};

const createItinerary = (newItineray, callback) => {
  db.Itinerary.create(newItineray)
    .then(createdItinerary => {
      console.log(createdItinerary);
      callback(null, createdItinerary);
    })
    .catch(err => {
      console.error(err);
      callback(err, null);
    });
};

module.exports.createItinerary = createItinerary;
module.exports.getAllItineraries = getAllItineraries;
module.exports.getItineraryById = getItineraryById;

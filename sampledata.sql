USE cruisin66_dev;

INSERT INTO users (username, firstname, lastname, password, photoAvatar, createdat, updatedat)
VALUES ('slee', 'sophia', 'lee', 'password', 'photoavatarurl', '2018-08-14 12:32:00', '2018-08-14 12:32:00');

INSERT INTO categories (name, createdat, updatedat)
VALUES ('nature', '2018-08-14 12:32:00', '2018-08-14 12:32:00');

INSERT INTO itineraries (name, description, createdat, updatedat, categoryId, userId)
VALUES ('Pacific Coast Highway Tour', 'beautiful spots along the famous Pacific Coast highway', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1, 1);

INSERT INTO itinerariescomments (text, rating, createdat, updatedat, itineraryId, userId)
VALUES ('this tour was the best, highly recommend!', '4', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1, 1);

INSERT INTO itineraryphotos (url, description, createdat, updatedat, itineraryid)
VALUES ('https://i0.wp.com/wearetravelgirls.com/wp-content/uploads/2016/10/big-sur-pacific-coast-highway.jpg', 'view of bixby bridge', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1);

INSERT INTO stops (name, longitude, latitude, description, avgRating, address, zipcode, audiofile, createdat, updatedat)
VAlues ('mcway falls', 36.157, -121.672, 'beautiful falls', 5, 'California 93920', '93920', 'exaudiofile', '2018-08-14 12:32:00', '2018-08-14 12:32:00');

INSERT INTO itineraryphotos (url, description, createdat, updatedat, itineraryid)
VALUES ('https://i0.wp.com/wearetravelgirls.com/wp-content/uploads/2016/10/big-sur-pacific-coast-highway.jpg', 'view of bixby bridge', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1);

INSERT INTO stopphotos (url, description, createdat, updatedat, stopid)
VALUES ('https://i2.wp.com/wearetravelgirls.com/wp-content/uploads/2016/10/california-roadtrip-we-are-travel-girls-2.jpg', 'mcway falls', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1);

INSERT INTO stopscomments (text, rating, createdat, updatedat, stopId, userId)
VALUES ('these falls were so gorgeous', '5', '2018-08-14 12:32:00', '2018-08-14 12:32:00', 1, 1);

SELECT id into @stopid from stops where id =1;
SELECT id into @itineraryid from itineraries where id =1;
INSERT INTO itinerarystops (createdat, updatedat, itineraryid, stopid)
VALUES ('2018-08-14 12:32:00', '2018-08-14 12:32:00', @itineraryid, @stopid);

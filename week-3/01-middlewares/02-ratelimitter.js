const express = require('express');
const app = express();

let numberOfRequestsForUser = {};

function rateLimitRequests(req, res, next) {
  const userId = req.headers['user-id'];

  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 0;
  }

  numberOfRequestsForUser[userId]++;

  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).send('Too many requests');
  }

  next();
}

app.use(rateLimitRequests);

// This setInterval function resets the count for each user every second
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
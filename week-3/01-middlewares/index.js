const express = require('express');
const app = express();
app.use(express.json());
const userCounts = {};
let requestCount = 0;
let errorCount = 0;

function countRequest(req, res, next) {
  requestCount++;
  console.log(`Total Requests: ${requestCount}`);
  next();
}

function countRestrictRequest(req, res, next) {
  const userAgent = req.headers['user'];

  if (!userAgent) {
    return res.status(400).send('User header is missing');
  }

  if (!userCounts[userAgent]) {
    userCounts[userAgent] = 0;
  }

  userCounts[userAgent]++;

  if (userCounts[userAgent] > 5) {
    return res.status(429).send('Too many requests');
  } else {
    next();
  }
}

function errorHandler(err, req, res, next) {
  errorCount++;
  console.error(`Error occurred: ${err.message}`);
  res.status(404).json({ error: err.message }); 
}

app.use(countRequest); // Middleware to log total requests
app.use(errorHandler); // Error handling middleware

app.post('/', countRestrictRequest, (req, res) => {
  const userAgent = req.headers['user'];
  const body = req.body.name;
  console.log("Counting : " + userAgent + " : " + userCounts[userAgent])
  res.status(200).json({ user: userAgent });
});
  
app.listen(3000, () => {
  console.log('server running on port 3000');
});

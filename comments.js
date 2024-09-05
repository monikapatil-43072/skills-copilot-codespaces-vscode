// Create web server with express.js
// Create a route that accepts POST requests to /comments
// When a POST request is made, the server should read the comment from the request body and add it to the comments array
// The server should then respond with the updated comments array in JSON format
// The server should respond with a 400 status code if no comment is provided
// The server should respond with a 400 status code if the comment is an empty string

const express = require('express');
const app = express();

app.use(express.json());

const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body.comment;

  if (!comment || comment === '') {
    return res.status(400).json({ error: 'Comment is required' });
  }

  comments.push(comment);
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
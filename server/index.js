const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.post('/api/data', (req, res) => {
  res.json({ message: `The value you sent was ${req.body.value}` });
});

const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ' + SERVER_PORT);
});

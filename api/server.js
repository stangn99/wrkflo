const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const task = require('./routes/task');


app.use(bodyParser.json());
app.use('/task', task)

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

module.exports = app;


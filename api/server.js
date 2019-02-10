const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const index = require('./routes/healthcheck');

app.use('/healthcheck', index);
app.use(bodyParser.json());


app.use((err, req, res, next) => {
    console.log(err)
})

module.exports = app;




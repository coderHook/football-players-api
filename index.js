const db = require('./db')
const Team = require('./team/model.js')

const express = require('express')

const app = express();
const port = process.env.PORT || 4000;


app.listen(port, () => `Listening on port ${port}`)
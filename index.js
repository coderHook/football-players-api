const db = require('./db')
const Team = require('./team/model.js')
const teamRouter = require('./team/router')
const bodyParser = require('body-parser')

const express = require('express')
const jsonParser = bodyParser.json()

const app = express();
const port = process.env.PORT || 4000;

app.use(jsonParser)
app.use(teamRouter)


app.listen(port, () => `Listening on port ${port}`)
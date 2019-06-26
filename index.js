const db = require('./db')
const Team = require('./team/model.js')
const Player = require('./player/model.js')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')
const bodyParser = require('body-parser')
const authRouter = require('./auth/router')
const userRouter = require('./user/router')



const express = require('express')
const jsonParser = bodyParser.json()

const app = express();
const port = process.env.PORT || 4000;

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)
app.use(authRouter)
app.use(userRouter)


app.listen(port, () => `Listening on port ${port}`)
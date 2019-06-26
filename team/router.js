const express = require('express')
const Team = require('./model')
// const bodyParser = require('body-parser')

let router = express.Router()

// router.use(bodyParser);

router.get('/team', (req, res, next) => {
  Team.findAll()
      .then(teams => res.status(200).send(teams))
      .catch(err => res.status(500).next(err))
})

router.get('/x')

router.post('/team', (req, res, next) => {
  Team.create(req.body)
      .then(newTeam => res.status(200).send(newTeam))
      .catch(err => res.status(500).send(next(err)))
})

module.exports = router
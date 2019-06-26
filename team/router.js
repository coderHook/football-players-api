const express = require('express')
const Team = require('./model')

let router = express.Router()

router.get('/team', (req, res, next) => {
  Team.findAll()
      .then(teams => res.status(200).send(teams))
      .catch(err => res.status(500).send(next(err)))
})

module.exports = router
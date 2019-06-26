const express = require('express')
const Team = require('./model')

let router = express.Router()

router.get('/team', (req, res, next) => {
  Team.findAll()
      .then(teams => res.status(200).send(teams))
      .catch(err => res.status(500).next(err))
})

router.get('/team/:id', (req, res, next) => {
  const id = req.params.id;

  Team.findByPk(id)
      .then(team => res.status(200).send(team))
      .caught(err => res.status(404).send({
        message: 'We cannot find a team with that id',
        error: err
      }))
})

router.post('/team', (req, res, next) => {
  Team.create(req.body)
      .then(newTeam => {
        if(newTeam.name) { return res.status(200).send(newTeam) }
        next()
      })
      .catch(err => res.status(500).send(next(err)))
})

router.put('/team/:id', (req, res, next) => {
  const id = req.params.id;

  Team.findByPk(id)
      .then(team => 
          team.update(req.body)
              .then( teamUpdated => res.status(200).send(teamUpdated))
      )
      .caught( err => res.status(500).send({
        message: 'Updated couldnt be precessed',
        error: err
      }))
})

module.exports = router
const express = require('express')
const Player = require('./model')

let router = express.Router()

router.get('/player', (req, res, next) => {
  Player.findAll()
      .then(players => res.status(200).send(players))
      .catch(err => res.status(500).send(err))
})

router.get('/player/:id', (req, res, next) => {
  const id = req.params.id;

  Player.findByPk(id)
        .then(player => res.status(200).send(player))
        .caught(err => res.status(500).send(err))
})

router.put('/player/:id', (req, res, next) => {
  const id = req.params.id;

  Player.findByPk(id)
    .then( player => 
      player.update(req.body)
          .then(playerUpdated => res.status(200).send(playerUpdated))
    )
    .caught(err => res.status(500).send({
      message: 'Cannot Update',
      error: err
    }))
})

router.post('/player', (req, res, next) => {
  Player.create(req.body)
      .then(player => res.status(200).send(player))
      .caught(err => res.status(500).send(err))
})


module.exports = router
const express = require('express')
const Player = require('./model')
const Team = require('../team/model')

let router = express.Router()

router.get('/player', (req, res, next) => {
  const limit = req.query.limit || 25
  const offset = req.query.offset || 0

  Promise.all([
    Player.count(),
    Player.findAll({ limit, offset })
  ])
    .then(([total, player]) => {
      res.send({
        player, total
      })
    })
    .catch(error => next(error))

  // Player
  //     .count()
  //     .then(total => Player
  //       .findAll({ limit, offset })
  //       .then(players => res.status(200).send({ players, total }))
  //     )
  //     .catch(err => res.status(500).next(err))
})

router.get('/player/:id', (req, res, next) => {
  const id = req.params.id;

  Player.findByPk(id, {include: [Team]})
        .then(player => res.status(200).send(player).JSON(player))
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
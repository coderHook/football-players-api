const Sequelize = require('sequelize')
const db = require('../db')

const Player = db.define(
  'player',
  {
    name: {
      type: Sequelize.STRING,
      field: 'player_name'
    },
    number: Sequelize.INTEGER
  },
  { tableName: 'football_players'}
)

module.exports = Player
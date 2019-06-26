const Sequelize = require('sequelize')

let databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:pedro@localhost:5432/postgres'

let sequelize = new Sequelize(databaseUrl)

sequelize
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

module.exports = sequelize
    
const Sequelize = require('sequelize')
const db = new Sequelize('samplebd1', 'usuario3', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = { db }

db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))
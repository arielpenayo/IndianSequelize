const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
const db = new Sequelize('samplebd1', 'usuario3', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

const Student = db.define('student', {
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age: DataTypes.INTEGER(2)
})

module.exports = {
    db,
    Student
}


//para sincronizar 
// db.sync({ alter: true })
//     .then(() => console.log('datos sincronizados'))
//     .catch(console.error)
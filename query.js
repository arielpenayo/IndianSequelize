const { db, Student } = require('./model')
const task = async() => {
    try {
        await db.sync()
        const studentsBuscador = await Student.findAll(({
                order: [
                    ['age', 'DESC']
                ]
            }))
            // console.log(studentsBuscador);
        studentsBuscador.forEach(Student => console.log(`name: ${Student.dataValues.name} ,age: ${Student.dataValues.age}`))

    } catch (e) {
        console.error(e)
    }
}

task();
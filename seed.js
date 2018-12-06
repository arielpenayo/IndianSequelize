const { db, Center, Course, Teacher, Season, Batch } = require('./models')



const seed = async() => {
    try {
        console.log("eeeee");
        db.sync({ alter: true })


        await Center.bulkCreate([
            { id: 'PP', name: 'ariel', city: 'cde' },
            { id: 'VV', name: 'vicente', city: 'cde' },
            { id: 'MM', name: 'martin', city: 'cde' },
            { id: 'VM', name: 'victor', city: 'foz' },
            { id: 'PS', name: 'pablo', city: 'cde' },
        ], {
            ignoreDuplicates: true
        })
        await Teacher.bulkCreate([
            { name: 'fulano' }
        ])

    } catch (e) {
        console.error(e)
    }
}
module.exports = { seed }
    // seed()
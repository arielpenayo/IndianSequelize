// const { db, Student } = require('./model')
// const task = async() => {
//     try {
//         await db.sync({ alter: true })

//         //insert a student
//         // await Student.create({
//         //     name: 'Ariel Penayo',
//         //     age: 19
//         // })
//         //insert student + random
//         for (let i = 0; i < 30; i++) {
//             await Student.create({
//                 name: (['ariel', 'ariel2', 'ejemplo', 'ejemplo2', 'vicente', 'mas nombres',
//                     'muchoas mas', 'no para luego', 'ayudaa', 'eeeee'
//                 ])[parseInt(Math.random() * 10)],
//                 age: 19 + parseInt(Math.random() * 10)
//             })

//         }

//     } catch (e) {
//         console.error(e)
//     }
// }

// task();

const sql = require('mssql')

// config for your database
const config = {
  user: 'sa',
  password: 'DevOps2023!',
  server: 'localhost',
  database: 'WORD1',
  trustServerCertificate: true
}

// async function query (queryToExecute) {
//   const result = sql.connect(config, async function (err) {
//     if (err) {
//       console.log(err)
//     } else {
//       const request = new sql.Request()
//       // return request
//       return request.query(queryToExecute, function (err, recordset) {
//         if (err) {
//           console.log(err)
//         } else {
//         // send records as a response
//           console.log(recordset.re)
//           return recordset
//         // res.send(recordset)
//         }
//       })
//       // return result
//     }
//   })
//   return result
// }
async function query (queryToExecute) {
  await sql.connect(config)
  const result = await sql.query(queryToExecute)
  return result
}

module.exports = { query }
// })

// app.listen(5000, function () {
//   console.log('Server is running..')
// })

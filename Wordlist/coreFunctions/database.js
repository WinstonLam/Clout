// const Connection = require('tedious').Connection
// const config = {
//   server: 'db', // update me
//   authentication: {
//     type: 'default',
//     options: {
//       userName: 'sa', // update me
//       password: 'DevOps2023!' // update me
//     }
//   },
//   options: {
//     // If you are on Microsoft Azure, you need encryption:
//     encrypt: true,
//     database: 'WORD01' // update me
//   }
// }
// const connection = new Connection(config)
// connection.on('connect', function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     // If no error, then good to proceed.
//     console.log('Connected')
//   }
// })

// connection.connect()
// // Server=localhost\MSSQLSERVER01;Database=master;Trusted_Connection=True;

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const sql = require('mssql')

  // config for your database
  const config = {
    user: 'sa',
    password: 'DevOps2023!',
    server: 'localhost',
    database: 'WORD1',
    trustServerCertificate: true
  }

  // connect to your database
  sql.connect(config, function (err) {
    if (err) {
      console.log(err)
    } else {
    // create Request object
      const request = new sql.Request()

      // query to the database and get the records
      request.query('select * from words', function (err, recordset) {
        if (err) {
          console.log(err)
        } else {
          // send records as a response
          console.log(recordset)
          res.send(recordset)
        }
      })
    }
  })
})

app.listen(5000, function () {
  console.log('Server is running..')
})

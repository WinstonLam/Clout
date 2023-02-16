const Connection = require('tedious').Connection
const config = {
  server: 'localhost\\MSSQLSERVER01', // update me
  authentication: {
    type: 'default',
    options: {
      userName: 'LAPTOP-A60747UK\\douwe'// update me
    //   password: 'your_password' // update me
    }
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: 'lingoGame' // update me
  }
}
const connection = new Connection(config)
connection.on('connect', function (err) {
  if (err) {
    console.log(err)
  }
  // If no error, then good to proceed.
  console.log('Connected')
})

connection.connect()
// Server=localhost\MSSQLSERVER01;Database=master;Trusted_Connection=True;

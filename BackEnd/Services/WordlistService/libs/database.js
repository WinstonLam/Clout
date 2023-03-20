const mysql = require('mysql2/promise')

// config for your database
const configMysql = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_REMOTE_ADDRESS,
  database: process.env.DB_NAME
}

async function queryMySQL (queryToExecute) {
  try {
    // change to configMysql for cloud connection
    const connection = await mysql.createConnection(configMysql)
    await connection.connect()
    const result = await connection.execute(queryToExecute)
    connection.end()
    return result
  } catch (error) {
    console.log('error in query execution:' + error.message)
    throw new Error('error executing query to db: ' + error.message)
  }
}

module.exports = { queryMySQL }

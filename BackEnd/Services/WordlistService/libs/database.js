const mysql = require('mysql2/promise')
const sql = require('mssql')

// config for your database
const configMSql = {
  user: 'sa',
  password: 'DevOps2023!',
  server: 'sql-gen',
  database: 'LINGO',
  trustServerCertificate: true
}

const configMysql = {
  host: 'lingo.c3kqqwo7vrhf.us-east-1.rds.amazonaws.com',
  database: 'LINGO',
  user: 'admin',
  password: 'DevOps2023!'
}

async function queryMsSQL (queryToExecute) {
  try {
    await sql.connect(configMSql)
    const result = await sql.query(queryToExecute)
    return result
  } catch (error) {
    console.log('error in query execution:' + error.message)
    throw new Error('error executing query to db: ' + error.message)
  }
}
async function queryMySQL (queryToExecute) {
  try {
    // change to configMysql for cloud connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      database: 'LINGO',
      user: 'root',
      password: 'DevOps2023!',
      options: {
        encrypt: false
      }
    })
    await connection.connect()
    const result = await connection.execute(queryToExecute)
    return result
  } catch (error) {
    console.log('error in query execution:' + error.message)
    throw new Error('error executing query to db: ' + error.message)
  }
}

module.exports = { queryMySQL }

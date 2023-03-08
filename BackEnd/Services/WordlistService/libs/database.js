const mysql = require('mysql')
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
    let connection = mysql.createConnection(configMysql)
    connection = connection.connect()
    const result = await connection.query(queryToExecute)
    return result
  } catch (error) {
    console.log('error in query execution:' + error.message)
    throw new Error('error executing query to db: ' + error.message)
  }
}

module.exports = { queryMySQL }

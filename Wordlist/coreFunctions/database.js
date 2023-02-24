
const sql = require('mssql')

// config for your database
const config = {
  user: 'sa',
  password: 'DevOps2023!',
  server: 'sqlgen',
  database: 'LINGO',
  trustServerCertificate: true
}

async function query (queryToExecute) {
  try {
    await sql.connect(config)
    const result = await sql.query(queryToExecute)
    return result
  } catch (error) {
    console.log('error in query execution:' + error)
    throw new Error('error executing query to db', error)
  }
}

module.exports = { query }

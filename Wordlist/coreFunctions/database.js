
const sql = require('mssql')

// config for your database
const config = {
  user: 'sa',
  password: 'DevOps2023!',
  server: 'localhost',
  database: 'WORD1',
  trustServerCertificate: true
}

async function query (queryToExecute) {
  await sql.connect(config)
  const result = await sql.query(queryToExecute)
  return result
}

module.exports = { query }

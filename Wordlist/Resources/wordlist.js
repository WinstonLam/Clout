const databaseCon = require('../coreFunctions/database')

async function get () {
  try {
    const result = await databaseCon.query('select * from words')
    const returnObject = {
      words: result.recordset,
      wordlistName: 'words'
    }
    return returnObject
  } catch (error) {
    throw new Error('error retrieving data from database', error)
  }
}
async function post (inputWordlist) {
  try {
    if (inputWordlist.request.words.length !== 0) {
      // const connection = databaseCon.connect()
      // const result = await databaseCon.query(`insert into words values( $inputWordlist )`)

      let queryValues = ''
      for (const word in inputWordlist.words) {
        queryValues += `'+ ${word} '  'description Test'`
      }
      const query = `insert into words values ( ${queryValues} )`
      const result = await databaseCon.query(query)

      return { statusCode: 200, responseBody: 'Saving wordlist to dataBase succesful' + result }
    }
  } catch (error) {
    throw new Error("error saving new wordlist", error);
  }
}
function getById() {
  return "get by id";
}
function deleteById() {
  return "delete";
}
module.exports = { get, post, getById, deleteById };

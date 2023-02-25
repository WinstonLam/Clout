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
      const queryWordList = `Insert Into wordlist OUTPUT INSERTED.[Id] values ('${inputWordlist.request.wordlistName} ', '${inputWordlist.request.description}')`
      const resultWordList = await databaseCon.query(queryWordList)

      let queryValues = ''
      for (const word of inputWordlist.request.words) {
        queryValues += `('${word.word} ' , '${word.description}', ${resultWordList.recordset[0].Id}),`
      }
      queryValues = queryValues.slice(0, -1)
      const query = `insert into words values ${queryValues}`

      await databaseCon.query(query)

      return { statusCode: 200, responseBody: 'Saving wordlist to dataBase succesful' }
    }
  } catch (error) {
    console.log('error in saving list:' + error.message)
    throw new Error('Error saving new wordlist: ' + error.message)
  }
}
function getById () {
  return 'get by id'
}
function deleteById () {
  return 'delete'
}
module.exports = { get, post, getById, deleteById }

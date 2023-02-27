const databaseCon = require('../libs/database')

async function getWordsOfWordList (input) {
  try {
    const result = await databaseCon.query(`select * from words where wordlistID = ${input.request.id}`)
    const returnObject = {
      words: result.recordset
    }
    return returnObject
  } catch (error) {
    throw new Error('error retrieving data from database', error)
  }
}

async function getWordListByUserID (input) {
  try {
    const result = await databaseCon.query(`select * from wordlist where userID = ${input.request.id}`)
    const returnObject = []
    for (const objResult of result.recordset) {
      returnObject.push({
        wordlistName: objResult.Name,
        description: objResult.description,
        userID: objResult.userID,
        wordlistID: objResult.Id
      })
    }
    return { wordlistInfo: returnObject }
  } catch (error) {
    throw new Error('error retrieving data from database', error)
  }
}

// async function getWordExceptIDs (input) {
//   try {
//     const result = await databaseCon.query(`select TOP 1 * from words
//     where [wordlistID] = ${input.request.wordlistID}
//     AND [Id] NOT IN (${input.request.filter})
//     ORDER BY NEWID()
//     `)
//     const returnObject = {
//       words: result.recordset
//     }
//     return returnObject
//   } catch (error) {
//     throw new Error('error retrieving data from database', error)
//   }
// }

async function post (inputWordlist) {
  try {
    if (inputWordlist.request.words.length !== 0) {
      // const connection = databaseCon.connect()
      // const result = await databaseCon.query(`insert into words values( $inputWordlist )`)
      const queryWordList = `Insert Into wordlist OUTPUT INSERTED.[Id] values (
        '${inputWordlist.request.wordlistName} ',
        '${inputWordlist.request.description}',
        '${inputWordlist.request.userID}')`
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

module.exports = { getWordListByUserID, post, getWordsOfWordList }

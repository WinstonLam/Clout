const { getWordListByUserID } = require('../libs/wordlist').default
const database = require('../libs/database').default

describe('Wordlist Service:', () => {
  jest.mock('mysql2/promise')
  describe('getWordListByUserID', () => {
    it('should return a wordlist object based on an user ID', () => {
      // jest.mock(database, () => () => false)
      database.queryMySQL = jest.fn().mockReturnValueOnce({
        wordlistName: 'Wordlist name',
        description: 'description',
        userID: 1,
        wordlistID: 4,
        words: [],
        serverInfo: {}

      })
      const requestObject = { input: { request: { id: 1 } } }
      const wordlistsOfUser = getWordListByUserID(requestObject)
      expect(wordlistsOfUser).toConatin('wordlistName')
    })
  })
})

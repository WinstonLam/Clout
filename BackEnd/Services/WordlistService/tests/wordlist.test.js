const wordlist = require('../libs/wordlist')
const database = require('../libs/database')

describe('Wordlist Service:', () => {
  describe('getWordListByUserID', () => {
    it('should return a wordlist object based on an user ID', () => {
      jest.mock(database, () => () => false)
      database.queryMySQL = jest.fn().mockReturnValueOnce({
        wordlistName: 'Wordlist name',
        description: 'description',
        userID: 1,
        wordlistID: 4,
        words: [],
        serverInfo: {}

      })
      const requestObject = { input: { request: { id: 1 } } }
      const wordlistsOfUser = wordlist.getWordListByUserID(requestObject)
      expect(wordlistsOfUser).toConatin('wordlistName')
    })
  })
})

const { getWordListByUserID, getWordExceptIDs, post } = require('../libs/wordlist')
const database = require('../libs/database')

jest.mock('../libs/database')

describe('Wordlist Service:', () => {
  // jest.mock('mysql2/promise')
  describe('getWordListByUserID', () => {
    it('Should return an array with matching name, description and userID', async () => {
      const input = {
        request: {
          userID: 123
        }
      }
      const queryResult = [
        {
          Id: 1,
          Name: 'wordlist 1',
          description: 'description 1',
          userID: 123
        },
        {
          Id: 2,
          Name: 'wordlist 2',
          description: 'description 2',
          userID: 123
        }
      ]
      const expectedOutput = {
        wordlistInfo: [
          {
            wordlistName: 'wordlist 1',
            description: 'description 1',
            userID: 123,
            wordlistID: 1
          },
          {
            wordlistName: 'wordlist 2',
            description: 'description 2',
            userID: 123,
            wordlistID: 2
          }
        ]
      }
      database.queryMySQL = jest.fn().mockResolvedValue([queryResult])
      const wordlistsOfUser = await getWordListByUserID(input)
      expect(wordlistsOfUser).toEqual(expectedOutput)
    })
  })
  describe('getWordExceptIDs', () => {
    it('Should return an the following properties of a word:  word, description, Id', async () => {
      const input = {
        request: {
          wordlistID: 1,
          filter: [{ id: 1 }, { id: 2 }, { id: 3 }]
        }
      }
      const queryResult = [
        {
          Id: 4,
          word: 'word4',
          description: 'description of word4'
        }
      ]
      const expectedOutput = {
        words:
        [{
          word: 'word4',
          description: 'description of word4',
          Id: 4
        }]
      }
      database.queryMySQL = jest.fn().mockResolvedValue([queryResult])
      const wordlistsOfUser = await getWordExceptIDs(input)
      expect(wordlistsOfUser).toEqual(expectedOutput)
    })
  })
  jest.mock('../libs/database', () => ({
    queryMySQL: jest.fn()
  }))

  describe('post function', () => {
    afterEach(() => {
      jest.resetAllMocks() // Reset mock after each test
    })

    it('should return a successful response if inputWordlist.request.words is not empty', async () => {
      const inputWordlist = {
        request: {
          wordlistName: 'Test Wordlist',
          description: 'This is a test wordlist',
          userID: 123,
          words: [
            { word: 'word1', description: 'This is word1' },
            { word: 'word2', description: 'This is word2' }
          ]
        }
      }

      const expectedResult = {
        statusCode: 200,
        responseBody: 'Saving wordlist to dataBase succesful'
      }

      // Mock database connection functions
      database.queryMySQL.mockResolvedValue([{ insertId: 1 }])

      // Call the post function
      const result = await post(inputWordlist)

      // Assert that the result matches the expected result
      expect(result).toEqual(expectedResult)

      // Assert that the database connection functions were called with the expected parameters
      expect(database.queryMySQL).toHaveBeenCalledTimes(2)
      expect(database.queryMySQL).lastCalledWith(
        "insert into words (`word`, `description`, `wordlistID` ) values ('word1 ' , 'This is word1', 1),('word2 ' , 'This is word2', 1)"
      )
    })
  })
})

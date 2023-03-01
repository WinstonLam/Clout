
import { Game, ongoingGames } from '../libs/gamelogic.js'

const gameId = '999'
const wordlistId = '999'
let secretWord = ''

describe('Game class:', () => {
  let game

  beforeEach(() => {
    game = new Game(wordlistId)
    ongoingGames.set(gameId, game)
    secretWord = game.secretWord
  })

  describe('constructor', () => {
    it('should create a Game object', () => {
      expect(game).toBeInstanceOf(Game)
    })

    it('should set the wordlistId and gameId properties', () => {
      expect(game.wordlistId).toBe(wordlistId)
      expect(game.secretWord).toBeDefined()
      expect(typeof game.gameId).toBe('string')
    })

    it('should have fetched a secret word', () => {
      expect(game.secretWord).toBeDefined()
      expect(typeof game.secretWord).toBe('string')
    })
  })

  describe('update', () => {
    it('should throw exception if guess length is not equal to secret word length', () => {
      try {
        game.update(secretWord + 'x')
        fail('update should have thrown exception')
      } catch (e) {
        expect(e.message).toBeDefined()
      }
    })

    it('should return feedback and true if guess length is equal to secret word length and some letters match', () => {
      const firstLetter = secretWord.slice(0, 1)
      const replacementLetter = String.fromCharCode(firstLetter.charCodeAt(0) + 1) // Cannot overflow, because it loops around
      const guess = secretWord.replace(firstLetter, replacementLetter) // almost correct guess, off by one char

      const expectedFeedback = strToObject(secretWord)
      delete expectedFeedback[0] // Feedback shouldn't include first letter, because the guess got this letter wrong

      const [feedback, success] = game.update(guess)
      expect(success).toBe(true)
      expect(feedback).toEqual(expectedFeedback)
    })

    it('should have feedback letters match secretword', () => {
      const expectedFeedback = strToObject(secretWord)
      
      const [feedback, success] = game.update(game.secretWord)
      expect(success).toBe(true)
      expect(feedback).toStrictEqual(expectedFeedback)
    })
  })
})

function strToObject (string) {
  const object = {}

  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    object[i] = char
  }

  return object
}

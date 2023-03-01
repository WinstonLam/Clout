import { v4 as uuidv4 } from 'uuid';

export const ongoingGames = new Map()

export class Game {
  constructor (wordlistId) {
    this.wordlistId = wordlistId
    this.gameId = uuidv4()
    this.secretWord = (Math.random() + 1).toString(36).substring(7) // TODO - Get from WordlistService

    console.log('secret word for game ' + this.gameId + ' is ' + this.secretWord)
  }

  update (guess) {
    if (guess.length !== this.secretWord.length) {
      throw new Error('guess length does not equal secret word length')
    }

    const feedback = {}

    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i]

      if (letter === this.secretWord[i]) {
        feedback[i] = letter
      }
    }

    return [feedback, true]
  }
}

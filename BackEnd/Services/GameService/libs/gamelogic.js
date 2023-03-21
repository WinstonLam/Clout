import { v4 as uuidv4 } from 'uuid'

import { getWordExceptIds } from './wordlist-client.js'

export const ongoingGames = new Map()

export class Game {
  constructor (wordlistId) {
    this.wordlistId = wordlistId
    this.gameId = uuidv4()
    this.secretWord = getWordExceptIds(this.wordlistId, null)
    this.wordDescription = "";
    this.completedWordIds = []
  }

  update (guess) {
    if (!this.secretWord) {
      throw new Error('secret word has not been set yet')
    }

    if (guess.length !== this.secretWord.length - 1) {
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

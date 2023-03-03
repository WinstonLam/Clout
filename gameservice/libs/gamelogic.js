import { v4 as uuidv4 } from 'uuid';

import { getWordExceptIds } from './wordlist-client.js'

export const ongoingGames = new Map()

export class Game {
  constructor(wordlistId) {
    this.wordlistId = wordlistId
    this.gameId = uuidv4()
    this.secretWord = null
    this.completedWordIds = []

    getWordExceptIds(wordlistId, null) // Wordlist service returns a list which is always 0 or 1 word
    .then((words) => {
        if (words[0]) {
          this.secretWord = words[0].word
          this.completedWordIds.push(words[0].Id)
          console.log(`secret word for game '${this.gameId}' is '${this.secretWord}'`)
        } else { // TODO - Proper error handling
          console.log(`wordlist service returned no words for wordlist with id '${wordlistId}''`)
        }
      })
      .catch((err) => {
        console.log(`error setting secret word: ${err}`)
      })
  }

  update(guess) {
    if (!this.secretWord) {
      throw new Error('secret word has not been set yet')
    }

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

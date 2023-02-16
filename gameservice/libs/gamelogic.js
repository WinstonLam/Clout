
export const ongoingGames = new Map()

export class Game {
  constructor (wordlistId, sessionId) {
    this.wordlistId = wordlistId
    this.sessionId = sessionId
    this.secretWord = 'lingo' // TODO - Get from WordlistService
  }

  initGame () {
    // TODO - Get secret word from wordlist with wordlistId from WordlistService
    // TODO - Return the secret word to front-end? Is this necessary?
  }

  update (guess) {
    if (guess.length !== this.secretWord.length) return [{}, false]

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

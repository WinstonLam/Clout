
export const ongoingGames = new Map()

export class Game {
  constructor (wordlistId, sessionId) {
    this.wordlistId = wordlistId
    this.sessionId = sessionId
    this.secretWord = (Math.random() + 1).toString(36).substring(7) // TODO - Get from WordlistService

    console.log('secret word for session ' + sessionId + ' is ' + this.secretWord)
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

    // Delete game after word has been guessed
    // TODO - Decide if this is actually expected behaviour:
    // Good because no dependence on client (which might lose connection) to 
    // remove the session.
    // Bad because it's a side effect that might be unexpected.
    if (Object.keys(feedback).length === this.secretWord.length) {
      ongoingGames.delete(this.sessionId)
    }

    return [feedback, true]
  }
}

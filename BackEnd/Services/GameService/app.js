import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

import { Game, ongoingGames } from './libs/gamelogic.js'
import { getWordExceptIds } from './libs/wordlist-client.js'

const serverAddress = process.env.GAMESERVICE_ADDRESS
const serverPort = process.env.GAMESERVICE_PORT

const PROTO_PATH = './protos/gameservice.proto'
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
const gameserviceProto = grpc.loadPackageDefinition(packageDefinition).gameservice
const lingoGameService = gameserviceProto.LingoGame.service

// RPC methods
function initGame (call, callback) {
  const request = call.request
  const wordlistId = request.wordlist_id
  const response = {}

  const game = new Game(wordlistId)
  if (!game) {
    response.err_msg = 'failed to create game'
    response.success = false
    callback(null, response)
    return
  }

  ongoingGames.set(game.gameId, game)

  response.success = true
  response.game_id = game.gameId

  game.secretWord.then((words) => {
    if (words[0]) {
      game.secretWord = words[0].word
      game.completedWordIds.push(words[0].Id)
      game.wordDescription = words[0].description
      console.log(`secret word for game '${game.gameId}' is '${game.secretWord}'`)

      response.secret_word = words[0].word
      response.word_description = words[0].description

      console.log(typeof words[0].word)
      callback(null, response)
    } else { // TODO - Proper error handling
      console.log(`wordlist service returned no words for wordlist with id '${game.wordlistId}''`)
    }
  }).catch((err) => {
    console.log(`error setting secret word: ${err}`)
  })
}

function updateGame (call, callback) {
  const request = call.request
  const gameId = request.game_id
  const guess = request.guess
  const response = {}

  // If a game for this session already exists, use it. Otherwise, create a new
  // game with the provided word.
  const game = ongoingGames.has(gameId) ? ongoingGames.get(gameId) : null
  if (!game) {
    response.err_msg = "game with id '" + gameId + "' does not exist"
    response.success = false
    callback(null, response)
    return
  }

  try {
    [response.feedback_map, response.success] = game.update(guess)
  } catch (e) {
    response.err_msg = e.message
    response.success = false
  }

  callback(null, response)
}

function deleteGame (call, callback) {
  const request = call.request
  const gameId = request.game_id
  const response = {}

  if (ongoingGames.has(gameId)) {
    ongoingGames.delete(gameId)
    response.success = true
  } else {
    response.err_msg = "game with id '" + gameId + "' does not exist"
    response.success = false
  }

  callback(null, response)
}

function nextWord (call, callback) {
  const request = call.request
  const gameId = request.game_id
  const response = {}

  const game = ongoingGames.has(gameId) ? ongoingGames.get(gameId) : null
  if (!game) {
    response.err_msg = "game with id '" + gameId + "' does not exist"
    response.success = false
    callback(null, response)
    return
  }

  getWordExceptIds(game.wordlistId, game.completedWordIds)
    .then((words) => {
      if (words[0]) {
        const nextWord = words[0]

        game.secretWord = nextWord.word
        game.wordDescription = nextWord.description

        response.word_description = nextWord.description
        response.secret_word = nextWord.word
        response.success = true

        game.completedWordIds.push(nextWord.Id)

        console.log(`next secret word for game '${game.gameId}' is '${nextWord.word}'`)
        callback(null, response)
      } else {
        response.err_msg = `no words left in wordlist with id '${game.wordlistId}'`
        response.success = false

        callback(null, response)
      }
    })
    .catch((err) => {
      response.err_msg = `error getting next secret word: ${err}`
      response.success = false

      callback(null, response)
    })
}

function main () {
  // TODO - gRPC authentication, proper address:port config, full proto spec
  // and implementations. Also communicate about the interface and potentially update code

  console.log(`starting gameservice server at ${serverAddress}:${serverPort}`)
  console.log('extra logging for gameservice!')
  const server = new grpc.Server()
  server.addService(lingoGameService, { updateGame, initGame, deleteGame, nextWord })
  server.bindAsync(serverAddress + ':' + serverPort, grpc.ServerCredentials.createInsecure(), () => {
    server.start()
  })
}

main()

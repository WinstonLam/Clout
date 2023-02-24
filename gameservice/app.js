import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

import { Game, ongoingGames } from './libs/gamelogic.js'

const serverAddress = '0.0.0.0'
const serverPort = '45287'

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

// RPC method
function updateGame (call, callback) {
  const request = call.request
  const sessionId = request.session_id
  const wordlistId = request.wordlist_id
  const guess = request.guess
  const response = {}

  // If a game for this session already exists, use it. Otherwise, create a new
  // game with the provided word.
  const game = ongoingGames.has(sessionId) ? ongoingGames.get(sessionId) : new Game(wordlistId, sessionId)
  ongoingGames.set(sessionId, game);

  [response.feedback_map, response.success] = game.update(guess)

  callback(null, response)
}

function main () {
  // TODO - gRPC authentication, proper address:port config, full proto spec
  // and implementations. Also communicate about the interface and potentially update code
  const server = new grpc.Server()
  server.addService(lingoGameService, { updateGame })
  server.bindAsync(serverAddress + ':' + serverPort, grpc.ServerCredentials.createInsecure(), () => {
    server.start()
  })
}

main()

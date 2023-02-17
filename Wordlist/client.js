// dependencies
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

// path to our proto file
const PROTO_FILE = './protos/service_def.proto'

// options needed for loading Proto file
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

const pkgDefs = protoLoader.loadSync(PROTO_FILE, options)

// load Definition into gRPC
const UserService = grpc.loadPackageDefinition(pkgDefs).UserService

// create the Client
const client = new UserService(
  '127.0.0.1:5000',
  grpc.credentials.createInsecure()
)

// make a call to GetUser
client.getWordlist({}, (error, user) => {
  if (error) {
    console.log(error)
  } else {
    console.log(user)
  }
})
client.addNewWordlist({ wordlistName: 'test', words: ['maann', 'roos', 'vis'] }, (error, reponse) => {
  if (error) {
    console.log(error)
  } else {
    console.log(reponse)
  }
})

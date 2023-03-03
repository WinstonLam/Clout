// dependencies
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const wordList = require('./libs/wordlist')

// add /Wordlist if wanting to debug
const PORT = 5000;
const PROTO_FILE = "./protos/service_def.proto";
// options needed for loading Proto file
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const pkgDefs = protoLoader.loadSync(PROTO_FILE, options);

// load Definition into gRPC
const userProto = grpc.loadPackageDefinition(pkgDefs);

// create gRPC server
const server = new grpc.Server();

// implement UserService
server.addService(userProto.UserService.service, {
  // implment GetUser
  getWordlist,
  addNewWordlist,
});

// start the Server
server.bindAsync(
  // port to serve on
  `0.0.0.0:${PORT}`,
  // authentication settings
  grpc.ServerCredentials.createInsecure(),
  // server start callback
  (error, port) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`listening on port ${port}`);
      server.start();
    }
  }
);

async function getWordlist(input, callback) {
  try {
    const data = await wordList.get();
    // const returnObject = {
    //   wordlistName: data.wordListName,
    //   words: data.words
    // }

    callback(null, data);
  } catch (error) {
    callback(error, null);
  }
}

function addNewWordlist(input, callback) {
  try {
    console.log(input.request);
    const response = wordList.post(input);
    callback(null, response);
  } catch (error) {
    const errorObject = {
      statusCode: 400,
      responseBody: error.message,
    };
    callback(errorObject, null);
  }
}

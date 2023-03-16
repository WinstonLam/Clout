// dependencies
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const wordList = require("./libs/wordlist");

// add /Wordlist if wanting to debug
// /BackEnd/Services/WordlistService
const PROTO_FILE = "./protos/wordlist.proto";
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
const userProto = grpc.loadPackageDefinition(pkgDefs).wlservice;

// create gRPC server
const server = new grpc.Server();

// all the services for the proto file
server.addService(userProto.WordlistService.service, {
  loadAllWordlists,
  addNewWordlist,
  getWordsOfWordList,
  getWordExceptIDs,
});

async function loadAllWordlists(input, callback) {
  try {
    const data = await wordList.getWordListByUserID(input);
    callback(null, data);
  } catch (error) {
    const errorObject = {
      statusCode: 400,
      responseBody: error.message,
    };
    callback(null, errorObject);
  }
}
async function getWordExceptIDs(input, callback) {
  try {
    const data = await wordList.getWordExceptIDs(input);
    callback(null, data);
  } catch (error) {
    const errorObject = {
      statusCode: 400,
      responseBody: error.message,
    };
    callback(null, errorObject);
  }
}

async function getWordsOfWordList(input, callback) {
  try {
    const data = await wordList.getWordsOfWordList(input);
    callback(null, data);
  } catch (error) {
    const errorObject = {
      statusCode: 400,
      responseBody: error.message,
    };
    callback(null, errorObject);
  }
}

async function addNewWordlist(input, callback) {
  try {
    console.log(input.request);
    const response = await wordList.post(input);
    callback(null, response);
  } catch (error) {
    const errorObject = {
      statusCode: 400,
      responseBody: error.message,
    };
    callback(null, errorObject);
  }
}

// start the Server
server.bindAsync(
  // port to serve on
  "0.0.0.0:5000",
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
